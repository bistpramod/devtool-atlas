import Link from "next/link";

const tools = [
  {
    number: "01",
    name: "JSON Formatter",
    description: "Tidy up JSON or catch a syntax mistake in seconds.",
    href: "/tools/json-formatter",
    label: "Format JSON",
  },
  {
    number: "02",
    name: "JWT Decoder",
    description:
      "Read a token's header and payload without sending it anywhere.",
    href: "/tools/jwt-decoder",
    label: "Decode a token",
  },
  {
    number: "03",
    name: "Regex Tester",
    description:
      "Try a regular expression against sample text and inspect matches.",
    href: "/tools/regex-tester",
    label: "Test a pattern",
  },
];

export default function Home() {
  return (
    <main className="home-main">
      <section className="home-intro">
        <p className="eyebrow">
          <span className="status-dot" /> Three useful tools
        </p>
        <h1>A clearer route through everyday dev work.</h1>
        <p className="intro-copy">
          Quick, focused utilities for the little jobs that come up in every
          project. Your data stays in this browser.
        </p>
      </section>

      <section className="tool-list" aria-label="Developer tools">
        {tools.map((tool) => (
          <Link className="tool-card" href={tool.href} key={tool.href}>
            <span className="tool-number">{tool.number}</span>
            <div className="tool-card-copy">
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
            </div>
            <span className="tool-card-link">
              {tool.label}
              <span aria-hidden="true"> ↗</span>
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
