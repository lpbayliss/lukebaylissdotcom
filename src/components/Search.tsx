import { useEffect, useMemo, useState } from "react";
import type { SearchItem } from "../lib/search-index";

interface SearchProps {
  searchIndex: SearchItem[];
}

export default function Search({ searchIndex }: SearchProps) {
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simple client-side search implementation
  const results = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    const searchTerm = query.toLowerCase();
    const scored = searchIndex
      .map((item) => {
        let score = 0;

        // Search in title (highest weight)
        const titleMatch = item.title.toLowerCase().includes(searchTerm);
        if (titleMatch) score += 10;

        // Search in description (medium weight)
        const descMatch = item.description.toLowerCase().includes(searchTerm);
        if (descMatch) score += 5;

        // Search in tags (medium weight)
        const tagMatch = item.tags?.some((tag) => tag.toLowerCase().includes(searchTerm));
        if (tagMatch) score += 5;

        // Search in content (low weight)
        const contentMatch = item.content.toLowerCase().includes(searchTerm);
        if (contentMatch) score += 1;

        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);

    return scored;
  }, [query, searchIndex]);

  if (!mounted) {
    return (
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="search-input" className="text-sm text-foreground-muted">
            search:
          </label>
          <input
            id="search-input"
            type="text"
            className="w-full bg-background-subtle border border-border px-3 py-2 rounded text-foreground font-mono focus:outline-none focus:border-border-accent"
            placeholder="Loading search..."
            disabled
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="search-input" className="text-sm text-foreground-muted">
          search:
        </label>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-background-subtle border border-border px-3 py-2 rounded text-foreground font-mono focus:outline-none focus:border-border-accent transition-colors"
          placeholder="Type to search posts, projects, and snippets..."
          autoFocus
        />
      </div>

      {query.trim() && (
        <div className="space-y-4">
          <div className="text-sm text-foreground-muted">
            {results.length === 0 ? (
              <span>No results found for "{query}"</span>
            ) : (
              <span>
                Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
              </span>
            )}
          </div>

          {results.length > 0 && (
            <div className="space-y-4">
              {results.map((result) => (
                <a
                  key={result.url}
                  href={result.url}
                  className="block p-4 bg-background-subtle border border-border rounded hover:border-border-accent transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-foreground-accent font-mono text-sm mt-1">
                      [{result.type}]
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground font-semibold group-hover:text-foreground-accent transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-foreground-muted mt-1 line-clamp-2">
                        {result.description}
                      </p>
                      {result.tags && result.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {result.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono text-foreground-muted bg-background px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
