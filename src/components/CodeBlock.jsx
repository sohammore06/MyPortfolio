import React, { useState, useCallback } from "react";
import { AiOutlineCopy, AiFillCheckCircle } from "react-icons/ai";

/**
 * Portfolio-styled code block with copy-to-clipboard.
 */
const CodeBlock = ({ code, label, language = "text" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }, [code]);

  return (
    <div className="relative my-8 rounded-2xl overflow-hidden border border-[#151030] bg-black-100 shadow-card">
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-tertiary border-b border-[#151030]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-secondary text-xs sm:text-sm font-medium truncate">
            {label || (language === "latex" ? "LaTeX" : language)}
          </span>
          <span className="hidden sm:inline text-[#2E2E2E] text-xs">·</span>
          <span className="hidden sm:inline text-secondary/70 text-xs uppercase tracking-wider">
            {language}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold text-white bg-black-200 hover:bg-[#151030] border border-[#211e35] transition-colors"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <AiFillCheckCircle className="text-[#00cea8] text-lg" />
              Copied
            </>
          ) : (
            <>
              <AiOutlineCopy className="text-lg text-secondary" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 sm:p-5 max-h-[70vh] overflow-auto text-left">
        <code className="text-[13px] sm:text-sm text-[#dfd9ff] font-mono leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
