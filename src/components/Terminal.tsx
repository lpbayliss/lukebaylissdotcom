import { useEffect, useRef, useState } from "react";
import type { SearchItem } from "../lib/search-index";

interface HistoryEntry {
  id: number;
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
  const historyIdRef = useRef(0);

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
            {
              type: "file",
              name: "about",
              content:
                "About Luke Bayliss\n\nSoftware engineer and builder.\n\nUse 'cat about' to read more, or visit /about in your browser.",
            },
            {
              type: "file",
              name: "contact",
              content:
                "Contact Information\n\nGitHub: github.com/lpbayliss\nLinkedIn: linkedin.com/in/lukebayliss\nEmail: Use the contact form at /contact",
            },
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
            id: historyIdRef.current++,
            command: "",
            output: [
              "[ASCII_ART]",
              "    ██╗     ██╗   ██╗██╗  ██╗███████╗    ██████╗  █████╗ ██╗   ██╗██╗     ██╗███████╗███████╗",
              "    ██║     ██║   ██║██║ ██╔╝██╔════╝    ██╔══██╗██╔══██╗╚██╗ ██╔╝██║     ██║██╔════╝██╔════╝",
              "    ██║     ██║   ██║█████╔╝ █████╗      ██████╔╝███████║ ╚████╔╝ ██║     ██║███████╗███████╗",
              "    ██║     ██║   ██║██╔═██╗ ██╔══╝      ██╔══██╗██╔══██║  ╚██╔╝  ██║     ██║╚════██║╚════██║",
              "    ███████╗╚██████╔╝██║  ██╗███████╗    ██████╔╝██║  ██║   ██║   ███████╗██║███████║███████║",
              "    ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝╚══════╝╚══════╝",
              "[/ASCII_ART]",
              "",
              "╔═══════════════════════════════════════════════════════════════════════════════════════════════╗",
              "║                               [ACCENT]✦ TERMINAL USER INTERFACE ✦[/ACCENT]                                  ║",
              "╚═══════════════════════════════════════════════════════════════════════════════════════════════╝",
              "",
              "[SUCCESS]Welcome to my portfolio terminal![/SUCCESS] Navigate using Unix-like commands.",
              "",
              "Type [COMMAND]help[/COMMAND] for available commands, or try [COMMAND]tree[/COMMAND] to see the site structure.",
              "",
            ],
          },
        ]);
      } catch (error) {
        console.error("Failed to load content:", error);
        setHistory([
          {
            id: historyIdRef.current++,
            command: "",
            output: ["Error: Failed to load content. Please refresh the page."],
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
  });

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
          "╔════════════════════════ [ACCENT]Available Commands[/ACCENT] ═══════════════════════════╗",
          "",
          "  [COMMAND]help[/COMMAND]              Show this help message",
          "  [COMMAND]ls[/COMMAND] [path]         List files and directories",
          "  [COMMAND]cd[/COMMAND] <path>         Change directory",
          "  [COMMAND]pwd[/COMMAND]               Print working directory",
          "  [COMMAND]cat[/COMMAND] <file>        Display file contents",
          "  [COMMAND]clear[/COMMAND]             Clear the terminal",
          "  [COMMAND]tree[/COMMAND]              Show directory tree",
          "  [COMMAND]whoami[/COMMAND]            Display user information",
          "  [COMMAND]date[/COMMAND]              Show current date and time",
          "  [COMMAND]echo[/COMMAND] <text>       Print text to terminal",
          "  [COMMAND]open[/COMMAND] <file>       Open file in browser",
          "",
          "╠════════════════════════ [ACCENT]Navigation Shortcuts[/ACCENT] ═════════════════════════╣",
          "",
          "  [COMMAND]cd ..[/COMMAND]             Go to parent directory",
          "  [COMMAND]cd ~[/COMMAND]   or  [COMMAND]cd /[/COMMAND]   Go to root directory",
          "",
          "╚═════════════════════════════════════════════════════════════════════╝",
          "",
        ];
        break;

      case "ls":
        {
          const path = args[0] ? normalizePath(currentPath, args[0]) : currentPath;
          const items = fileSystem[path];

          if (!items) {
            output = [`[ERROR]ls: cannot access '${args[0] || path}': No such file or directory[/ERROR]`];
          } else {
            output = [""];
            const dirs = items.filter((i) => i.type === "dir");
            const files = items.filter((i) => i.type === "file");

            if (dirs.length > 0) {
              for (const dir of dirs) {
                output.push(`  [DIR]${dir.name}/[/DIR]`);
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
            output = [`[ERROR]cd: no such file or directory: ${args[0]}[/ERROR]`];
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
            output = ["[ERROR]cat: missing operand[/ERROR]", "Usage: cat <file>"];
          } else {
            const fileName = args.join(" ");
            const items = fileSystem[currentPath];
            const file = items?.find(
              (i) => i.type === "file" && i.name.toLowerCase() === fileName.toLowerCase(),
            );

            if (!file) {
              output = [`[ERROR]cat: ${args[0]}: No such file or directory[/ERROR]`];
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
                output.push(
                  "",
                  `→ Full content: ${file.url}`,
                  `  Use 'open ${fileName}' to view in browser`,
                  "",
                );
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
        output = ["", "[ACCENT]lukebayliss.com/[/ACCENT]", "├── [DIR]blog/[/DIR]"];

        if (fileSystem["/blog"]) {
          fileSystem["/blog"].forEach((item, idx, arr) => {
            const isLast = idx === arr.length - 1;
            output.push(`│   ${isLast ? "└──" : "├──"} [FILE]${item.name}[/FILE]`);
          });
        }

        output.push("├── [DIR]projects/[/DIR]");
        if (fileSystem["/projects"]) {
          fileSystem["/projects"].forEach((item, idx, arr) => {
            const isLast = idx === arr.length - 1;
            output.push(`│   ${isLast ? "└──" : "├──"} [FILE]${item.name}[/FILE]`);
          });
        }

        output.push("├── [DIR]snippets/[/DIR]");
        if (fileSystem["/snippets"]) {
          fileSystem["/snippets"].forEach((item, idx, arr) => {
            const isLast = idx === arr.length - 1;
            output.push(`│   ${isLast ? "└──" : "├──"} [FILE]${item.name}[/FILE]`);
          });
        }

        output.push("├── [FILE]about[/FILE]", "└── [FILE]contact[/FILE]", "");
        break;

      case "whoami":
        output = [
          "",
          "┌─────────────────────────────────────┐",
          "│  [ACCENT]Luke Bayliss[/ACCENT]                      │",
          "│  [SUCCESS]Software Engineer[/SUCCESS]                │",
          "│                                     │",
          "│  📍 Location: Melbourne, Australia  │",
          "│                                     │",
          "│  Type [COMMAND]cat about[/COMMAND] for more info    │",
          "└─────────────────────────────────────┘",
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
            output = ["[ERROR]open: missing operand[/ERROR]", "Usage: open <file>"];
          } else {
            const fileName = args.join(" ");
            const items = fileSystem[currentPath];
            const file = items?.find(
              (i) => i.type === "file" && i.name.toLowerCase() === fileName.toLowerCase(),
            );

            if (!file) {
              output = [`[ERROR]open: ${args[0]}: No such file or directory[/ERROR]`];
            } else if (file.url) {
              window.location.href = file.url;
              output = [`[SUCCESS]Opening ${file.name}...[/SUCCESS]`];
            } else {
              output = [`[ERROR]open: ${args[0]}: Cannot open file (no URL available)[/ERROR]`];
            }
          }
        }
        break;

      default:
        output = [`[ERROR]${command}: command not found[/ERROR]`, "Type [COMMAND]help[/COMMAND] for available commands."];
        break;
    }

    setHistory((prev) => [...prev, { id: historyIdRef.current++, command: trimmedCmd, output }]);
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

  const renderLine = (line: string) => {
    // Parse custom color markers
    const regex = /(\[(?:DIR|ASCII_ART|ACCENT|SUCCESS|ERROR|COMMAND|FILE)\].*?\[\/(?:DIR|ASCII_ART|ACCENT|SUCCESS|ERROR|COMMAND|FILE)\])/g;
    const parts = line.split(regex);

    return parts.map((part, index) => {
      // ASCII Art - cyan color
      if (part.startsWith("[ASCII_ART]") && part.endsWith("[/ASCII_ART]")) {
        const content = part.slice(11, -12);
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static string parts won't reorder
          <span key={index} className="text-cyan-400 font-bold">
            {content}
          </span>
        );
      }

      // Directory - blue
      if (part.startsWith("[DIR]") && part.endsWith("[/DIR]")) {
        const content = part.slice(5, -6);
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static string parts won't reorder
          <span key={index} className="text-blue-400 font-semibold">
            {content}
          </span>
        );
      }

      // File - lighter gray
      if (part.startsWith("[FILE]") && part.endsWith("[/FILE]")) {
        const content = part.slice(6, -7);
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static string parts won't reorder
          <span key={index} className="text-gray-300">
            {content}
          </span>
        );
      }

      // Accent/highlight - yellow
      if (part.startsWith("[ACCENT]") && part.endsWith("[/ACCENT]")) {
        const content = part.slice(8, -9);
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static string parts won't reorder
          <span key={index} className="text-yellow-400 font-semibold">
            {content}
          </span>
        );
      }

      // Success - green
      if (part.startsWith("[SUCCESS]") && part.endsWith("[/SUCCESS]")) {
        const content = part.slice(9, -10);
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static string parts won't reorder
          <span key={index} className="text-green-400">
            {content}
          </span>
        );
      }

      // Error - red
      if (part.startsWith("[ERROR]") && part.endsWith("[/ERROR]")) {
        const content = part.slice(7, -8);
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static string parts won't reorder
          <span key={index} className="text-red-400">
            {content}
          </span>
        );
      }

      // Command - magenta/purple
      if (part.startsWith("[COMMAND]") && part.endsWith("[/COMMAND]")) {
        const content = part.slice(9, -10);
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static string parts won't reorder
          <span key={index} className="text-purple-400 font-semibold">
            {content}
          </span>
        );
      }

      // biome-ignore lint/suspicious/noArrayIndexKey: Static string parts won't reorder
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div
      ref={terminalRef}
      className="h-screen bg-[#030712] text-[#E5E7EB] font-mono overflow-y-auto p-4"
    >
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .terminal-cursor {
            animation: blink 1s step-end infinite;
          }
          .terminal-input-hidden {
            position: absolute;
            left: -9999px;
            opacity: 0;
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto">
        {/* History */}
        {history.map((entry) => (
          <div key={entry.id} className="mb-2">
            {entry.command && (
              <div className="flex gap-2">
                <span className="text-[#34D399]">{getPrompt()}</span>
                <span>{entry.command}</span>
              </div>
            )}
            {entry.output.map((line, lineIdx) => (
              <div key={`${entry.id}-${lineIdx}`} className="whitespace-pre-wrap">
                {renderLine(line)}
              </div>
            ))}
          </div>
        ))}

        {/* Custom styled input */}
        <div className="flex gap-2 items-center">
          <span className="text-[#34D399] font-semibold">{getPrompt()}</span>
          <div className="flex-1 relative">
            <span className="text-[#E5E7EB]">{currentCommand}</span>
            <span className="terminal-cursor bg-[#34D399] inline-block w-2 h-4 ml-0.5 align-middle"></span>
          </div>
        </div>

        {/* Hidden actual input for keyboard handling */}
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-input-hidden"
          // biome-ignore lint/a11y/noAutofocus: Terminal should auto-focus for better UX
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
