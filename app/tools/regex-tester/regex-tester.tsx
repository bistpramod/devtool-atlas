"use client";

import { useState } from "react";

type RegexMatch = {
  text: string;
  index: number;
};

export default function RegexTester() {
  const [pattern, setPattern] = useState("\\b[a-z]+\\b");
  const [flags, setFlags] = useState("gi");
  const [sample, setSample] = useState(
    "Atlas has small tools for everyday dev work.",
  );
  const [matches, setMatches] = useState<RegexMatch[] | null>(null);
  const [error, setError] = useState("");

  function testPattern() {
    try {
      const expression = new RegExp(pattern, flags);
      const found = flags.includes("g")
        ? Array.from(sample.matchAll(expression), (match) => ({
            text: match[0],
            index: match.index ?? 0,
          }))
        : (() => {
            const match = expression.exec(sample);
            return match ? [{ text: match[0], index: match.index }] : [];
          })();
      setMatches(found);
      setError("");
    } catch (caughtError) {
      setMatches(null);
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Invalid regular expression.",
      );
    }
  }

  return (
    <section className="tool-workspace" aria-label="Regular expression tester">
      <div className="field-row">
        <div>
          <label className="field-label" htmlFor="regex-pattern">
            Pattern
          </label>
          <input
            className="text-field compact-field"
            id="regex-pattern"
            value={pattern}
            onChange={(event) => setPattern(event.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="regex-flags">
            Flags
          </label>
          <input
            className="text-field compact-field"
            id="regex-flags"
            value={flags}
            onChange={(event) => setFlags(event.target.value)}
          />
        </div>
      </div>
      <div style={{ marginTop: 18 }}>
        <label className="field-label" htmlFor="regex-sample">
          Test text
        </label>
        <textarea
          className="text-field compact-field"
          id="regex-sample"
          value={sample}
          onChange={(event) => setSample(event.target.value)}
        />
      </div>
      <div className="action-row">
        <button className="action-button" onClick={testPattern} type="button">
          Test pattern
        </button>
        {error && (
          <p className="result-message error" role="alert">
            Invalid pattern: {error}
          </p>
        )}
      </div>
      {matches !== null && (
        <div style={{ marginTop: 24 }} aria-live="polite">
          <h2>
            {matches.length} {matches.length === 1 ? "match" : "matches"}
          </h2>
          {matches.length > 0 ? (
            <ul className="match-list">
              {matches.map((match, index) => (
                <li className="match-item" key={`${match.index}-${index}`}>
                  <span>{JSON.stringify(match.text)}</span>
                  <span className="match-index">index {match.index}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="result-message">No matches found.</p>
          )}
        </div>
      )}
    </section>
  );
}
