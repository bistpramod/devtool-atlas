import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/tools/json-formatter` },
    { url: `${baseUrl}/tools/jwt-decoder` },
    { url: `${baseUrl}/tools/regex-tester` },
  ];
}
