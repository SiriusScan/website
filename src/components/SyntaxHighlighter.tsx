import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-go";

interface SyntaxHighlighterProps {
  code: string;
  language: string;
  className?: string;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  language,
  className = "",
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <pre className="!bg-transparent">
      <code
        className={`language-${language} !m-0 !bg-transparent !p-0`}
        dangerouslySetInnerHTML={{ __html: code.trim() }}
      />
    </pre>
  );
};

export default SyntaxHighlighter;
