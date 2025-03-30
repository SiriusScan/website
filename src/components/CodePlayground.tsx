import React, { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";
import SyntaxHighlighter from "./SyntaxHighlighter";

interface CodeExample {
  language: string;
  code: string;
}

interface CodePlaygroundProps {
  examples: {
    [key: string]: string;
  };
  defaultLanguage?: string;
  title?: string;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  examples,
  defaultLanguage = Object.keys(examples)[0],
  title,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(examples[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6">
      {title && <div className="mb-2 font-medium text-violet-200">{title}</div>}
      <div className="overflow-hidden rounded-lg border border-violet-700/40 bg-[#1a1b2e]">
        <div className="flex items-center justify-between border-b border-violet-700/20 px-4 py-2">
          <div className="flex space-x-2">
            {Object.keys(examples).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`rounded px-3 py-1 text-sm transition-colors ${
                  selectedLanguage === lang
                    ? "bg-violet-700/20 text-violet-200"
                    : "text-gray-400 hover:bg-violet-700/10 hover:text-violet-200"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <button
            onClick={handleCopy}
            className="group rounded p-1 hover:bg-violet-700/20"
            title="Copy to clipboard"
          >
            {copied ? (
              <CheckIcon className="h-5 w-5 text-green-400" />
            ) : (
              <ClipboardIcon className="h-5 w-5 text-gray-400 group-hover:text-violet-200" />
            )}
          </button>
        </div>
        <div className="overflow-x-auto p-4">
          <SyntaxHighlighter
            code={examples[selectedLanguage]}
            language={selectedLanguage.toLowerCase()}
            className="!m-0 !bg-transparent !p-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
