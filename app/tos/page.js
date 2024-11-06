import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://lansky.tech
// - Name: Lansky Tech
// - Contact information: hello@lansky.tech
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://lansky.tech/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms & Services
Last updated: November 6, 2024

Welcome to Lansky Tech (the “Company”), a web technology company dedicated to helping entrepreneurs grow their startups. By using our website, https://lansky.tech (the “Site”), and purchasing our services, you agree to the following terms and conditions.

1. Ownership and Usage Rights
When purchasing a package from Lansky Tech, you receive downloadable code to create applications. This code is for your personal use, and you retain ownership rights. However, you may not resell, sublicense, or distribute this code in any form.

2. Data Collection and Privacy
We collect certain personal information, including your name, email, and payment information, to facilitate purchases and services. We also collect non-personal data through cookies to enhance your user experience. For more details on how we handle your data, please review our Privacy Policy at https://lansky.tech/privacy-policy.

3. Updates to Terms
We may update these Terms & Services periodically. If changes are made, we will notify you by email.

4. Governing Law
These terms are governed by the laws of the United States. Any disputes arising from or relating to these Terms & Services shall be resolved under U.S. jurisdiction.

For any questions or further assistance, please contact us at hello@lansky.tech.

Thank you for choosing Lansky Tech!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
