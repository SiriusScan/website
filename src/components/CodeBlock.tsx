import React, { useRef, useState } from "react";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";

interface CodeBlockProps {
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    const codeElement =
      containerRef.current?.querySelector("pre code") ??
      containerRef.current?.querySelector("pre");
    const code = codeElement?.textContent ?? "";
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={containerRef} className="code-block-container">
      {children}
      <button
        onClick={handleCopy}
        className="copy-button"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-3.5 w-3.5" />
            <span>Copied!</span>
          </span>
        ) : (
          <span className="flex items-center gap-1.5">
            <ClipboardIcon className="h-3.5 w-3.5" />
            <span>Copy</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
