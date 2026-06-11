"use client";

import CParagraph from "@/components/CParagraph";
import CSubHeading from "@/components/CSubHeading";
import { useEffect, useState } from "react";

const API_ENDPOINT =
  "https://thepeak.merinasib.shop/api/v1/dashboard/settings/content/terms_and_conditions";

export default function Terms() {
  const [title, setTitle] = useState("About Us");
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(API_ENDPOINT);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.code === 200 && result.data) {
          setTitle(result.data.title || "About Us");
          setContent(result.data.content);
        } else {
          throw new Error(
            result.message ||
              result.data.message ||
              "Failed to retrieve content."
          );
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Could not load about us content. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutContent();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto p-4">
        <CSubHeading text="Loading Content..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto p-4">
        <CSubHeading text="Error Loading Page" />
        <CParagraph text={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <CSubHeading text={title} />
      </div>

      <div
        className="prose max-w-none no-tailwind"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
