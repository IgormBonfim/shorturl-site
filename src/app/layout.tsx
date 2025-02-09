import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import Footer from "@/app/components/footer";
import GoogleAdsense from "@/app/components/googleAdsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Encurtador de URL - Encurte Links Rápido e Fácil",
  description:
    "Encurte suas URLs rapidamente com nosso encurtador de links gratuito. Compartilhe links curtos e rastreáveis de maneira simples e eficiente.",
  keywords: "encurtador de URL, encurtar link, links curtos, URL shortener",
  openGraph: {
    title: "Encurtador de URL - Encurte Links Rápido e Fácil",
    description:
      "Encurte URLs de forma rápida e eficiente. Compartilhe links encurtados com facilidade!",
    url: "https://seusite.com",
    siteName: "Encurtador de URL",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Encurtador de URL - Encurte Links Rápido e Fácil",
    description:
      "Encurte URLs de forma rápida e eficiente. Compartilhe links encurtados com facilidade!",
    site: "@seuTwitter",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <GoogleAdsense />
        <meta
          name="google-site-verification"
          content="0nYtCDPsSl1GPl9_4c6rZ_H3r9QbCiDXODf9EIKPy1c"
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex flex-grow items-center justify-around mx-8 mb-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
