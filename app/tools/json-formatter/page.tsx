import type { Metadata } from "next";
import JsonFormatter from "./json-formatter";

export const metadata: Metadata = {
  title: "JSON Formatter | Devtool Atlas",
  description: "Format and validate JSON in your browser.",
};

export default function JsonFormatterPage() {
  return (
    <main className="tool-page">
      <div className="tool-heading">
        <p className="tool-kicker">Tool 01 / Data</p>
        <h1>JSON Formatter</h1>
        <p>
          Paste JSON to make it easier to read, or find out why it will not
          parse.
        </p>
      </div>
      <JsonFormatter />
    </main>
  );
}

// page tsx is the main file of the folder
