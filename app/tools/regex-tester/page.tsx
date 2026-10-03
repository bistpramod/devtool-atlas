import type { Metadata } from "next";
import RegexTester from "./regex-tester";

export const metadata: Metadata = {
  title: "Regex Tester | Devtool Atlas",
  description:
    "Test a regular expression and inspect its matches in your browser.",
};

export default function RegexTesterPage() {
  return (
    <main className="tool-page">
      <div className="tool-heading">
        <p className="tool-kicker">Tool 03 / Text</p>
        <h1>Regex Tester</h1>
        <p>
          Try a pattern against text and see each match with its starting
          position.
        </p>
      </div>
      <RegexTester />
    </main>
  );
}
