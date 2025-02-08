import { ShortUrlResponse } from "@/app/models/shortUrl.response";

const API_URL = "https://api.goshort.tech/";
const REDIRECT_URL = "https://goshort.tech/"

export async function shortenUrl(url: string): Promise<ShortUrlResponse> {
    const response = await fetch(`${API_URL}api/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    
    const data = await response.json();

    return {
        shortUrl: `${REDIRECT_URL}${data.short_code}`,
        originalUrl: data.original_url,
    };
}