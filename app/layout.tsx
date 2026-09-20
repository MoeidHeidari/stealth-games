import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stealth Games: Casual Mini Games",
  description:
    "Stealth Games is a collection of casual, instantly playable mini games. No installs, no accounts, just click and play.",
  metadataBase: new URL("https://stealth-games.example.com"),
  openGraph: {
    title: "Stealth Games: Casual Mini Games",
    description:
      "Small games. Instant fun. Play Gale Force Golf and more, free in your browser.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
