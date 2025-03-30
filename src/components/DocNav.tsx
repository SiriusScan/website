import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Flatten the navigation structure for easier traversal
const flatNavigation = [
  { title: "Installation", href: "/docs/getting-started/installation" },
  { title: "Quick Start", href: "/docs/getting-started/quick-start" },
  { title: "Scanning Guide", href: "/docs/guides/scanning" },
  { title: "Configuration", href: "/docs/guides/configuration" },
  { title: "API Overview", href: "/docs/api" },
  { title: "API Reference", href: "/docs/api/reference" },
  { title: "Contributing", href: "/docs/community/contributing" },
  { title: "Support", href: "/docs/community/support" },
];

const DocNav: React.FC = () => {
  const router = useRouter();
  const currentIndex = flatNavigation.findIndex(
    (item) => item.href === router.pathname,
  );

  const prevPage = currentIndex > 0 ? flatNavigation[currentIndex - 1] : null;
  const nextPage =
    currentIndex < flatNavigation.length - 1
      ? flatNavigation[currentIndex + 1]
      : null;

  if (!prevPage && !nextPage) return null;

  return (
    <div className="mt-16 flex items-center justify-between border-t border-violet-700/40 pt-8">
      {prevPage ? (
        <Link href={prevPage.href} className="no-underline">
          <span className="group flex items-center space-x-2 text-gray-400 transition-colors hover:text-violet-200">
            <ChevronLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>
              <div className="text-sm">Previous</div>
              <div className="text-base font-medium">{prevPage.title}</div>
            </span>
          </span>
        </Link>
      ) : (
        <div />
      )}

      {nextPage && (
        <Link href={nextPage.href} className="no-underline">
          <span className="group flex items-center space-x-2 text-right text-gray-400 transition-colors hover:text-violet-200">
            <span>
              <div className="text-sm">Next</div>
              <div className="text-base font-medium">{nextPage.title}</div>
            </span>
            <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      )}
    </div>
  );
};

export default DocNav;
