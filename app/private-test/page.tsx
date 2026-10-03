import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Test | Devtool Atlas",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivateTestPage() {
  return (
    <main className="tool-page">
      <div className="tool-heading">
        <p className="tool-kicker">Search visibility test</p>
        <h1>Private test page</h1>
        <p>
          This page is available to visitors but asks search engines not to
          index it.
        </p>
      </div>
    </main>
  );
}
