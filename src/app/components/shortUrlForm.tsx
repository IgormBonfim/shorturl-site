"use client";

import { useState } from "react";

interface ShortUrlFormProps {
  setStatus: (status: "form" | "loading" | "result") => void;
  service: (url: string) => void;
}

export default function ShortURlForm({
  setStatus,
  service,
}: ShortUrlFormProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const isValidURL = (input: string): boolean => {
    try {
      new URL(input);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setError(undefined);
    event.preventDefault();

    if (!url.trim()) {
      setError("O campo URL é obrigatório.");
      return;
    }

    if (!isValidURL(url)) {
      setError("Por favor, insira uma URL válida.");
      return;
    }

    setStatus("loading");
    service(url);

    setUrl("");
  };

  return (
    <form
      className="flex flex-col gap-2 w-full"
      onSubmit={handleSubmit}
      aria-labelledby="form-title"
    >
      <label htmlFor="url" className="text-sm font-medium text-gray-700">
        URL para encurtar
      </label>
      <input
        placeholder="https://exemplo.com"
        className={`appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline ${
          error ? "border-red-700" : "border-gray-300"
        }`}
        type="text"
        name="url"
        value={url}
        onChange={handleChange}
        aria-invalid={!!error}
        aria-describedby={error ? "url-error" : undefined}
      />
      {error && (
        <p id="url-error" className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Encurtar
      </button>
    </form>
  );
}
