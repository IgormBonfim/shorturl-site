"use client";

import { useState } from "react";

interface ShortUrlFormProps {
  setStatus: (status: "form" | "loading" | "result") => void;
  service: (url: string) => void;
}


export default function ShortURlForm({ setStatus, service }: ShortUrlFormProps) {
  const [url, setUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setStatus("loading")
    service(url)

    setUrl("");
  };

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <input
        placeholder="URL para encurtar"
        className="appearance-none py-2 px-3 border rounded p-[10px] text-gray-700 bg-zinc-200 focus:outline-none focus:shadow-outline"
        type="text"
        name="url"
        value={url}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Encurtar
      </button>
    </form>
  );
}
