"use client";

import { useEffect, useState } from "react";

const API_BASE = "https://iftek7500.merinasib.shop/api/v1/settings";

// Turn the API's mixed markdown/HTML text into clean HTML for rendering.
function formatContent(raw) {
  if (!raw) return "";

  // Markdown-style **bold** -> <strong>.
  const withBold = raw.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // If the API already returns real block-level HTML, render it as-is.
  if (/<(ul|ol|li|h[1-6]|div|table)\b/i.test(withBold)) {
    return withBold;
  }

  // Otherwise treat it as plain text: split lines into paragraphs and drop
  // the leading indentation the API sends.
  return withBold
    .replace(/<\/?p>/gi, "\n")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `<p>${line}</p>`)
    .join("");
}

export default function PolicyPage({ slug, fallbackTitle }) {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE}/${slug}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.ok && result.data?.content) {
          if (!ignore) setContent(formatContent(result.data.content));
        } else {
          throw new Error(result.message || "Failed to retrieve content.");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        if (!ignore) setError("Unable to load content right now. Please try again later.");
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    fetchContent();

    return () => {
      ignore = true;
    };
  }, [slug]);

  return (
    <div className="min-h-screen bg-dark">
      <section className="mx-4 mt-6 rounded-3xl bg-[#3d3230] px-6 py-16 text-center sm:mx-6">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          {fallbackTitle}
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {isLoading ? (
          <p className="text-center text-gray-400">Loading content...</p>
        ) : error ? (
          <p className="text-center text-gray-400">{error}</p>
        ) : (
          <div
            className="policy-html"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </section>
    </div>
  );
}
