import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Devtool Atlas | Handy tools for developers",
  description: "A small collection of useful browser-based developer tools.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="site-header">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              DA
            </span>
            <span>devtool atlas</span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/tools/json-formatter">JSON</Link>
            <Link href="/tools/jwt-decoder">JWT</Link>
            <Link href="/tools/regex-tester">Regex</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          Small tools, right in your browser.
        </footer>
      </body>
    </html>
  );
}
