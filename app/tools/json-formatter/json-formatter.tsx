"use client";

import { useState } from "react";

const exampleJson = '{"name":"Devtool Atlas","tools":["json","jwt","regex"]}';

export default function JsonFormatter() {
  const [input, setInput] = useState(exampleJson);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function formatJson() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (caughtError) {
      setOutput("");
      setError(
        caughtError instanceof Error ? caughtError.message : "Invalid JSON.",
      );
    }
  }

  return (
    <section className="tool-workspace" aria-label="JSON formatter">
      <div className="tool-columns">
        <div>
          <label className="field-label" htmlFor="json-input">
            Input JSON
          </label>
          <textarea
            className="text-field"
            id="json-input"
            spellCheck={false}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
        <div>
          <h2>Formatted output</h2>
          <pre className="output-box" aria-live="polite">
            {output || (
              <span className="output-placeholder">
                Your formatted JSON will appear here.
              </span>
            )}
          </pre>
        </div>
      </div>
      <div className="action-row">
        <button className="action-button" onClick={formatJson} type="button">
          Format JSON
        </button>
        {error && (
          <p className="result-message error" role="alert">
            Could not parse JSON: {error}
          </p>
        )}
      </div>
    </section>
  );
}
