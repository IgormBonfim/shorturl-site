"use client";

import ShortUrlForm from "@/app/components/shortUrlForm";
import { useState } from "react";
import Loading from "@/app/components/loading";
import { shortenUrl } from "@/app/services/urlService";
import ShortUrlResult from "@/app/components/shortUrlResult";
import { ShortUrlResponse } from "@/app/models/shortUrl.response";
import ErrorModal from "@/app/components/modalError";

export default function Home() {
  const [status, setStatus] = useState<"form" | "loading" | "result">("form");
  const [urlResponse, setUrlResponse] = useState<ShortUrlResponse | undefined>(
    undefined
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function shorten(url: string) {
    shortenUrl(url)
      .then((x) => {
        console.log(x.shortUrl);
        setUrlResponse(x);
        setStatus("result");
      })
      .catch(() => {
        setErrorMessage("Ocorreu um erro ao encurtar a URL. Tente novamente.");
        setStatus("form");
      });
  }

  return (
    <main className="flex flex-col items-center max-w-[90%] w-[750px]">
      <section className="bg-zinc-900 rounded-md items-center w-full p-6 flex flex-col shadow-md gap-4">
        <h1 className="text-3xl font-bold">Encurtador de URL</h1>
        {status === "form" && (
          <ShortUrlForm setStatus={setStatus} service={shorten} />
        )}
        {status === "loading" && <Loading />}
        {status === "result" && (
          <ShortUrlResult setStatus={setStatus} shortUrl={urlResponse} />
        )}
      </section>

      {errorMessage && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </main>
  );
}
