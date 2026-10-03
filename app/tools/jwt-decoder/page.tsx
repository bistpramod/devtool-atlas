import type { Metadata } from "next";
import JwtDecoder from "./jwt-decoder";

export const metadata: Metadata = {
  title: "JWT Decoder | Devtool Atlas",
  description: "Decode a JWT header and payload locally in your browser.",
};

export default function JwtDecoderPage() {
  return (
    <main className="tool-page">
      <div className="tool-heading">
        <p className="tool-kicker">Tool 02 / Tokens</p>
        <h1>JWT Decoder</h1>
        <p>
          Inspect the header and payload of a JSON Web Token. Decoding does not
          verify its signature.
        </p>
      </div>
      <JwtDecoder />
    </main>
  );
}
