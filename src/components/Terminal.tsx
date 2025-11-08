import { useEffect, useRef, useState } from "react";
import type { SearchItem } from "../lib/search-index";

interface HistoryEntry {
  command: string;
  output: string[];
}

interface FileSystemNode {
  type: "file" | "dir";
  name: string;
  content?: string;
  url?: string;
  description?: string;
}

interface FileSystem {
  [key: string]: FileSystemNode[];
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentPath, setCurrentPath] = useState("/");
  const [fileSystem, setFileSystem] = useState<FileSystem>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Initialize file system from content
  useEffect(() => {
    async function loadContent() {
      try {
        const response = await fetch("/search-index.json");
        const items: SearchItem[] = await response.json();

        const fs: FileSystem = {
          "/": [
            { type: "dir", name: "blog" },
            { type: "dir", name: "projects" },
            { type: "dir", name: "snippets" },
            { type: "file", name: "about", content: "About Luke Bayliss\n\nSoftware engineer and builder.\n\nUse 'cat about' to read more, or visit /about in your browser." },
            { type: "file", name: "contact", content: "Contact Information\n\nGitHub: github.com/lpbayliss\nLinkedIn: linkedin.com/in/lukebayliss\nEmail: Use the contact form at /contact" },
          ],
          "/blog": [],
          "/projects": [],
          "/snippets": [],
        };

        for (const item of items) {
          const node: FileSystemNode = {
            type: "file",
            name: item.title,
            content: item.content,
            url: item.url,
            description: item.description,
          };

          if (item.type === "blog") {
            fs["/blog"].push(node);
          } else if (item.type === "project") {
            fs["/projects"].push(node);
          } else if (item.type === "snippet") {
            fs["/snippets"].push(node);
          }
        }

        setFileSystem(fs);

        // Show welcome message
        setHistory([
          {
            command: "",
            output: [
              "╔═══════════════════════════════════════════════════════════════╗",
              "║           Welcome to lukebayliss.com - TUI Mode              ║",
              "╚═══════════════════════════════════════════════════════════════╝",
              "",
              "A terminal user interface for exploring my portfolio.",
              "",
              "Type 'help' for available commands.",
              "",
            ],
          },
        ]);
      } catch (error) {
        console.error("Failed to load content:", error);
        setHistory([
          {
            command: "",
            output: [
              "Error: Failed to load content. Please refresh the page.",
            ],
          },
        ]);
      }
    }

    loadContent();
  }, []);

  // Focus input when clicking anywhere in terminal
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    const terminal = terminalRef.current;
    terminal?.addEventListener("click", handleClick);

    return () => {
      terminal?.removeEventListener("click", handleClick);
    };
  }, []);

  // Scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const parts = trimmedCmd.split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output: string[] = [];

    switch (command) {
      case "":
        break;

      case "help":
        output = [
          "Available commands:",
          "",
          "  help              Show this help message",
          "  ls [path]         List files and directories",
          "  cd <path>         Change directory",
          "  pwd               Print working directory",
          "  cat <file>        Display file contents",
          "  clear             Clear the terminal",
          "  tree              Show directory tree",
          "  whoami            Display user information",
          "  date              Show current date and time",
          "  echo <text>       Print text to terminal",
          "  open <file>       Open file in browser",
          "",
          "Navigation shortcuts:",
          "  cd ..             Go to parent directory",
          "  cd ~   or  cd /   Go to root directory",
          "",
        ];
        break;

      case "ls":
        {
          const path = args[0] ? normalizePath(currentPath, args[0]) : currentPath;
          const items = fileSystem[path];

          if (!items) {
            output = [`ls: cannot access '${args[0] || path}': No such file or directory`];
          } else {
            output = [""];
            const dirs = items.filter((i) => i.type === "dir");
            const files = items.filter((i) => i.type === "file");

            if (dirs.length > 0) {
              for (const dir of dirs) {
                output.push(`  \x1b[34m${dir.name}/\x1b[0m`);
              }
            }
            if (files.length > 0) {
              for (const file of files) {
                output.push(`  ${file.name}`);
              }
            }
            output.push("");
          }
        }
        break;

      case "cd":
        {
          let newPath = "/";
          if (args[0]) {
            newPath = normalizePath(currentPath, args[0]);
          }

          if (!fileSystem[newPath]) {
            output = [`cd: no such file or directory: ${args[0]}`];
          } else {
            setCurrentPath(newPath);
          }
        }
        break;

      case "pwd":
        output = [currentPath];
        break;

      case "cat":
        {
          if (!args[0]) {
            output = ["cat: missing operand", "Usage: cat <file>"];
          } else {
            const fileName = args.join(" ");
            const items = fileSystem[currentPath];
            const file = items?.find(
              (i) => i.type === "file" && i.name.toLowerCase() === fileName.toLowerCase()
            );

            if (!file) {
              output = [`cat: ${args[0]}: No such file or directory`];
            } else if (file.content) {
              // Limit content length for display
              const lines = file.content.split("\n");
              const preview = lines.slice(0, 50);

              output = [
                "",
                `╔═══ ${file.name} ${"═".repeat(Math.max(0, 60 - file.name.length))}`,
                "",
              ];

              if (file.description) {
                output.push(file.description, "");
              }

              output.push(...preview);

              if (lines.length > 50) {
                output.push("", "... (content truncated)", "");
              }

              if (file.url) {
                output.push("", `→ Full content: ${file.url}`, "  Use 'open ${fileName}' to view in browser", "");
              }

              output.push(`╚${"═".repeat(63)}`, "");
            }
          }
        }
        break;

      case "clear":
        setHistory([]);
        return;

      case "tree":
        output = [
          "",
          "lukebayliss.com/",
          "├── blog/",
        ];

        if (fileSystem["/blog"]) {
          fileSystem["/blog"].forEach((item, idx, arr) => {
            const isLast = idx === arr.length - 1;
            output.push(`│   ${isLast ? "└──" : "├──"} ${item.name}`);
          });
        }

        output.push("├── projects/");
        if (fileSystem["/projects"]) {
          fileSystem["/projects"].forEach((item, idx, arr) => {
            const isLast = idx === arr.length - 1;
            output.push(`│   ${isLast ? "└──" : "├──"} ${item.name}`);
          });
        }

        output.push("├── snippets/");
        if (fileSystem["/snippets"]) {
          fileSystem["/snippets"].forEach((item, idx, arr) => {
            const isLast = idx === arr.length - 1;
            output.push(`│   ${isLast ? "└──" : "├──"} ${item.name}`);
          });
        }

        output.push("├── about", "└── contact", "");
        break;

      case "whoami":
        output = [
          "",
          "Luke Bayliss",
          "Software Engineer",
          "",
          "Location: Melbourne, Australia",
          "",
          "Type 'cat about' for more information.",
          "",
        ];
        break;

      case "date":
        output = [new Date().toString()];
        break;

      case "echo":
        output = [args.join(" ")];
        break;

      case "open":
        {
          if (!args[0]) {
            output = ["open: missing operand", "Usage: open <file>"];
          } else {
            const fileName = args.join(" ");
            const items = fileSystem[currentPath];
            const file = items?.find(
              (i) => i.type === "file" && i.name.toLowerCase() === fileName.toLowerCase()
            );

            if (!file) {
              output = [`open: ${args[0]}: No such file or directory`];
            } else if (file.url) {
              window.location.href = file.url;
              output = [`Opening ${file.name}...`];
            } else {
              output = [`open: ${args[0]}: Cannot open file (no URL available)`];
            }
          }
        }
        break;

      default:
        output = [
          `${command}: command not found`,
          "Type 'help' for available commands.",
        ];
        break;
    }

    setHistory((prev) => [...prev, { command: trimmedCmd, output }]);
    setCurrentCommand("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(currentCommand);
    }
  };

  const normalizePath = (current: string, target: string): string => {
    if (target === "~" || target === "/") {
      return "/";
    }

    if (target === "..") {
      if (current === "/") return "/";
      return "/";
    }

    if (target.startsWith("/")) {
      return target;
    }

    // Relative path
    if (current === "/") {
      return `/${target}`;
    }
    return `${current}/${target}`;
  };

  const getPrompt = () => {
    const path = currentPath === "/" ? "~" : currentPath.replace("/", "");
    return `visitor@lukebayliss.com:${path}$ `;
  };

  return (
    <div
      ref={terminalRef}
      className="h-screen bg-[#030712] text-[#E5E7EB] font-mono overflow-y-auto p-4"
      style={{ caretColor: "#34D399" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* History */}
        {history.map((entry, idx) => (
          <div key={idx} className="mb-2">
            {entry.command && (
              <div className="flex gap-2">
                <span className="text-[#34D399]">{getPrompt()}</span>
                <span>{entry.command}</span>
              </div>
            )}
            {entry.output.map((line, lineIdx) => (
              <div
                key={lineIdx}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: line
                    .replace(/\x1b\[34m/g, '<span class="text-blue-400">')
                    .replace(/\x1b\[0m/g, "</span>"),
                }}
              />
            ))}
          </div>
        ))}

        {/* Input */}
        <div className="flex gap-2">
          <span className="text-[#34D399]">{getPrompt()}</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-[#E5E7EB]"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
