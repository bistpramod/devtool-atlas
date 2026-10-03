"use client";

import { useState } from "react";

function decodePart(part: string) {
  const base64 = part.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  function decodeToken() {
    try {
      const parts = token.trim().split(".");
      if (parts.length !== 3 || parts.some((part) => part.length === 0)) {
        throw new Error(
          "A JWT must have three non-empty parts separated by dots.",
        );
      }
      setHeader(JSON.stringify(decodePart(parts[0]), null, 2));
      setPayload(JSON.stringify(decodePart(parts[1]), null, 2));
      setError("");
    } catch (caughtError) {
      setHeader("");
      setPayload("");
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Could not decode token.",
      );
    }
  }

  return (
    <section className="tool-workspace" aria-label="JWT decoder">
      <label className="field-label" htmlFor="jwt-input">
        JSON Web Token
      </label>
      <textarea
        className="text-field compact-field"
        id="jwt-input"
        placeholder="Paste a three-part JWT here"
        spellCheck={false}
        value={token}
        onChange={(event) => setToken(event.target.value)}
      />
      <div className="action-row">
        <button className="action-button" onClick={decodeToken} type="button">
          Decode token
        </button>
        {error && (
          <p className="result-message error" role="alert">
            {error}
          </p>
        )}
      </div>
      {(header || payload) && (
        <div className="jwt-results" aria-live="polite">
          <div>
            <h2>Header</h2>
            <pre className="output-box">{header}</pre>
          </div>
          <div>
            <h2>Payload</h2>
            <pre className="output-box">{payload}</pre>
          </div>
        </div>
      )}
    </section>
  );
}
