import { useState } from "react";
import { ShortUrlResponse } from "@/app/models/shortUrl.response";

interface ShortUrlResultProps {
  setStatus: (status: "form" | "loading" | "result") => void;
  shortUrl: ShortUrlResponse | undefined;
}

export default function ShortUrlResult({
  setStatus,
  shortUrl,
}: ShortUrlResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (shortUrl?.shortUrl) {
      await navigator.clipboard.writeText(shortUrl.shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <button
        type="button"
        onClick={handleCopy}
        className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 transition"
      >
        {shortUrl?.shortUrl}
        <span className="border-l pl-3 dark:border-neutral-700 flex items-center">
          {copied ? <CopyIcon /> : <CopiedIcon />}
        </span>
      </button>

      <button
        type="button"
        onClick={() => setStatus("form")}
        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition"
      >
        Encurtar outra URL
      </button>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      className="size-4 text-green-500 animate-bounce"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function CopiedIcon() {
  return (
    <svg
      className="size-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    </svg>
  );
}
