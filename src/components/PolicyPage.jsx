"use client";

import { useEffect, useState } from "react";

const API_BASE =
  "https://thepeak.merinasib.shop/api/v1/dashboard/settings/content";

// Shown when the content API is unreachable, so the page never renders empty.
const FALLBACK_CONTENT = `
<p>We prioritize your privacy and are committed to protecting your personal information. We collect data such as your name, email, and job application details to help match you with relevant career opportunities, improve user experience, and communicate important updates. Your data is stored securely using encryption and other safety measures to prevent unauthorized access. We do not share your information with third parties without your consent, except when required by law or to fulfill our services. You have the right to access, update, or delete your data at any time. For inquiries, feel free to contact us.</p>
<h3>How We Use Your Information. Your personal data is used to:</h3>
<ul>
  <li>Connect you with job opportunities</li>
  <li>Improve user experience on the website</li>
  <li>Respond to inquiries and support requests</li>
  <li>Send relevant job alerts and notifications</li>
</ul>
<p>Your data is stored securely using encryption and other safety measures to prevent unauthorized access. We do not share your information with third parties without your consent, except when required by law or to fulfill our services. You have the right to access, update, or delete your data at any time. For inquiries, feel free to contact us.</p>
<p>We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you access our services. Information We Collect: We collect personal data, such as name, email, and job preferences, to personalize your experience and provide relevant job opportunities.</p>
<p>Your information is used solely to enhance our services, provide job recommendations, and improve user experience. We do not share your personal data with third parties without your explicit consent. Data Security: We employ industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
<h3>Cookies and Tracking</h3>
<p>We use cookies to improve website functionality and analyze user behavior. By using our website, you consent to the use of cookies.</p>
<p>You have the right to access, update, or delete your personal information at any time. Please contact us if you wish to make any changes.</p>
<p>We reserve the right to modify this policy. Any changes will be posted on this page, with an updated date. For any questions regarding your privacy, please reach out to us through our contact page.</p>
`;

export default function PolicyPage({ contentKey, fallbackTitle }) {
  const [title, setTitle] = useState(fallbackTitle);
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${API_BASE}/${contentKey}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.code === 200 && result.data) {
          setTitle(result.data.title || fallbackTitle);
          setContent(result.data.content);
        } else {
          throw new Error(result.message || "Failed to retrieve content.");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setContent(FALLBACK_CONTENT);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [contentKey, fallbackTitle]);

  return (
    <div className="min-h-screen bg-dark">
      <section className="mx-4 mt-6 rounded-3xl bg-[#3d3230] px-6 py-16 text-center sm:mx-6">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {isLoading ? (
          <p className="text-center text-gray-400">Loading content...</p>
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
