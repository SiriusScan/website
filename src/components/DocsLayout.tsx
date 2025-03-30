import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import { Command } from "cmdk";
import DocNav from "./DocNav";
import {
  BookOpenIcon,
  CodeBracketIcon,
  CommandLineIcon,
  UsersIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import MDXWrapper from "./MDXProvider";

interface SidebarItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  items?: SidebarItem[];
}

const sidebar: SidebarItem[] = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    icon: <BookOpenIcon className="h-5 w-5" />,
    items: [
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "Quick Start", href: "/docs/getting-started/quick-start" },
      { title: "Interface Tour", href: "/docs/getting-started/interface-tour" },
    ],
  },
  {
    title: "API Reference",
    href: "/docs/api",
    icon: <CodeBracketIcon className="h-5 w-5" />,
    items: [
      { title: "Overview", href: "/docs/api" },
      {
        title: "REST API",
        href: "/docs/api/rest",
        items: [
          { title: "Authentication", href: "/docs/api/rest/authentication" },
          { title: "Endpoints", href: "/docs/api/rest/endpoints" },
          { title: "Error Handling", href: "/docs/api/rest/errors" },
        ],
      },
      { title: "Go SDK", href: "/docs/api/sdk/go" },
    ],
  },
  {
    title: "Community",
    href: "/docs/community",
    icon: <UsersIcon className="h-5 w-5" />,
    items: [
      { title: "Contributing", href: "/docs/community/contributing" },
      { title: "Support", href: "/docs/community/support" },
    ],
  },
];

interface DocsLayoutProps {
  children: React.ReactNode;
  meta: any;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children, meta }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [commandOpen, setCommandOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const isActive = (href: string) => router.pathname === href;

  const renderSidebarItems = (items: SidebarItem[]) => {
    return items.map((item) => (
      <div key={item.href} className="mb-4">
        <Link href={item.href}>
          <span
            className={`group flex items-center space-x-2 text-lg transition-colors ${
              isActive(item.href)
                ? "font-semibold text-violet-200"
                : "text-gray-300 hover:text-violet-200"
            }`}
          >
            {item.icon && (
              <span className="text-violet-400 group-hover:text-violet-300">
                {item.icon}
              </span>
            )}
            <span>{item.title}</span>
          </span>
        </Link>
        {item.items && (
          <div className="ml-4 mt-2 border-l border-violet-700/40 pl-4">
            {item.items.map((subItem) => (
              <div key={subItem.href}>
                <Link href={subItem.href}>
                  <span className="group flex items-center py-2 text-sm">
                    <span
                      className={`mr-2 h-1.5 w-1.5 rounded-full ${
                        isActive(subItem.href)
                          ? "bg-violet-400"
                          : "bg-violet-700/40 group-hover:bg-violet-500/60"
                      }`}
                    />
                    <span
                      className={`transition-colors ${
                        isActive(subItem.href)
                          ? "font-semibold text-violet-200"
                          : "text-gray-400 group-hover:text-violet-200"
                      }`}
                    >
                      {subItem.title}
                    </span>
                  </span>
                </Link>
                {subItem.items && (
                  <div className="ml-4 border-l border-violet-700/40 pl-4">
                    {subItem.items.map((nestedItem) => (
                      <Link key={nestedItem.href} href={nestedItem.href}>
                        <span className="group flex items-center py-2 text-sm">
                          <span
                            className={`mr-2 h-1.5 w-1.5 rounded-full ${
                              isActive(nestedItem.href)
                                ? "bg-violet-400"
                                : "bg-violet-700/40 group-hover:bg-violet-500/60"
                            }`}
                          />
                          <span
                            className={`transition-colors ${
                              isActive(nestedItem.href)
                                ? "font-semibold text-violet-200"
                                : "text-gray-400 group-hover:text-violet-200"
                            }`}
                          >
                            {nestedItem.title}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  const allItems = sidebar.reduce((acc: SidebarItem[], section) => {
    acc.push(section);
    if (section.items) {
      acc.push(...section.items);
    }
    return acc;
  }, []);

  const filteredItems = search
    ? allItems.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      )
    : allItems;

  return (
    <div className="relative min-h-screen bg-[#15162c]">
      {/* Progress bar */}
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-violet-500/60 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Command Menu */}
      {mounted && (
        <Command.Dialog
          open={commandOpen}
          onOpenChange={setCommandOpen}
          label="Search documentation"
          className="fixed left-1/2 top-[20%] z-50 max-h-[500px] w-full max-w-2xl -translate-x-1/2 overflow-hidden rounded-xl border border-violet-700/40 bg-[#1a1b2e] p-4 shadow-2xl"
        >
          <div
            role="dialog"
            aria-label="Search documentation"
            className="sr-only"
          >
            Search documentation
          </div>
          <div className="flex items-center border-b border-violet-700/20 pb-4">
            <MagnifyingGlassIcon className="mr-2 h-5 w-5 text-violet-400" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              className="w-full bg-transparent text-base text-violet-200 placeholder-violet-400 focus:outline-none"
              placeholder="Search documentation..."
            />
          </div>
          <Command.List className="scrollbar-thin scrollbar-track-violet-900/20 scrollbar-thumb-violet-700/40 mt-4 max-h-[350px] overflow-auto pr-2">
            <Command.Empty className="py-4 text-center text-gray-400">
              No results found.
            </Command.Empty>
            {sidebar.map((section) => (
              <Command.Group
                key={section.href}
                heading={section.title}
                className="px-2"
              >
                {section.items
                  ?.filter(
                    (item) =>
                      !search ||
                      item.title.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((item) => (
                    <Command.Item
                      key={item.href}
                      onSelect={() => {
                        router.push(item.href);
                        setCommandOpen(false);
                        setSearch("");
                      }}
                      className="flex cursor-pointer items-center space-x-2 rounded px-3 py-2 text-gray-300 transition-colors hover:bg-violet-700/20 hover:text-violet-200"
                    >
                      <ChevronRightIcon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Command.Item>
                  ))}
              </Command.Group>
            ))}
          </Command.List>
        </Command.Dialog>
      )}

      <div className="container mx-auto flex min-h-screen flex-col px-4 pt-20 text-white md:flex-row">
        {/* Sidebar */}
        <div className="w-full border-r border-violet-700/40 md:w-64">
          <div className="sticky top-20 overflow-y-auto pb-8">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-violet-200">
                  Documentation
                </h3>
              </div>
              <div className="mr-2 mt-4">
                <button
                  onClick={() => setCommandOpen(true)}
                  className="flex w-full items-center rounded-md border border-violet-700/40 bg-violet-900/20 px-3 py-1.5 text-sm text-gray-400 transition-colors hover:border-violet-600/60 hover:text-violet-200"
                >
                  <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
                  <span>Search</span>
                  <kbd className="ml-auto rounded bg-violet-700/20 px-1.5 font-mono text-xs">
                    Ctrl K
                  </kbd>
                </button>
              </div>
            </div>
            <nav>{renderSidebarItems(sidebar)}</nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 py-8 md:px-8">
          <div className="prose prose-invert max-w-none">
            <MDXWrapper>{children}</MDXWrapper>
          </div>
          <DocNav />
        </div>
      </div>

      {/* Documentation Footer */}
      <footer className="border-t border-violet-700/40 bg-[#161b37]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-violet-200">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/docs/getting-started/installation">
                    <span className="hover:text-violet-200">Installation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/docs/getting-started/quick-start">
                    <span className="hover:text-violet-200">Quick Start</span>
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api">
                    <span className="hover:text-violet-200">API Reference</span>
                  </Link>
                </li>
                <li>
                  <Link href="/docs/community/contributing">
                    <span className="hover:text-violet-200">Contributing</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-violet-200">
                Community
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://github.com/SiriusScan/Sirius"
                    className="flex items-center hover:text-violet-200"
                  >
                    <CodeBracketIcon className="mr-2 h-5 w-5" />
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/VTjqSxkJqX"
                    className="flex items-center hover:text-violet-200"
                  >
                    <UsersIcon className="mr-2 h-5 w-5" />
                    Discord Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-violet-200">
                Support
              </h3>
              <p className="text-gray-400">
                Need help? Join our{" "}
                <a
                  href="https://discord.gg/VTjqSxkJqX"
                  className="text-violet-400 hover:text-violet-300"
                >
                  Discord server
                </a>{" "}
                or open an issue on{" "}
                <a
                  href="https://github.com/SiriusScan/Sirius/issues"
                  className="text-violet-400 hover:text-violet-300"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocsLayout;
