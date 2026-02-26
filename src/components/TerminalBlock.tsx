import React, { useState } from "react";

interface TerminalBlockProps {
  title?: string;
  commands: string[];
  className?: string;
}

const TerminalBlock: React.FC<TerminalBlockProps> = ({
  title = "bash",
  commands,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commands.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-[#0a0a14] text-left shadow-2xl shadow-black/60 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#12121f] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] font-medium tracking-wide text-gray-500">
            {title}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="rounded px-2 py-0.5 text-[11px] text-gray-500 transition-colors hover:bg-white/5 hover:text-gray-300"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="flex-1 space-y-1 p-4 font-mono text-[13px] leading-relaxed">
        {commands.map((cmd, i) => (
          <div key={i} className="flex">
            <span className="mr-2 select-none text-emerald-500">$</span>
            <span className="text-gray-300">{cmd}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalBlock;
