import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "Lansky Tech",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Full-stack products, AI platforms, and developer tools — built from zero to production.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "lansky.tech",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        isFeatured: false,
        priceId: "custom-sprint",
        name: "🎯 Product Sprint",
        description: "Go from idea to working product in weeks, not months. I'll design, build, and deploy a production-ready MVP — full-stack, end-to-end.",
        features: [
          { name: "Full-stack MVP: frontend, backend, database, deployment" },
          { name: "AI integration where it adds value (not for show)" },
          { name: "Production-grade: auth, payments, analytics from day one" },
          { name: "Delivered in 2-4 weeks with source code you own" },
        ],
        ctaButtonText: "Starting at $12,000",
        footerText: "Let's build."
      },
      {
        isFeatured: true,
        priceId: "custom-cto",
        name: "🧠 Fractional CTO",
        description: "Technical leadership without the full-time hire. I'll own your architecture, ship features, manage your codebase, and make the hard calls — on a monthly retainer.",
        features: [
          { name: "Architecture decisions & code reviews" },
          { name: "Hands-on development (I write code, not just docs)" },
          { name: "Team mentorship & hiring guidance" },
          { name: "Vendor evaluation & technical due diligence" },
          { name: "Weekly syncs & async availability" },
        ],
        ctaButtonText: "$3,000/mo",
        footerText: "Grab your spot in line."
      },
      {
        isFeatured: false,
        priceId: "custom-ai",
        name: "🚀 AI Integration",
        description: "Add AI capabilities to your existing product — whether it's chat, document analysis, automation, or intelligent features that actually solve problems.",
        features: [
          { name: "LLM integration (Claude, GPT, Gemini)" },
          { name: "RAG pipelines, document parsing, structured extraction" },
          { name: "AI agents & workflow automation" },
          { name: "Custom models & fine-tuning when off-the-shelf isn't enough" },
        ],
        ctaButtonText: "Contact Us",
        footerText: "Let's boogie."
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `Lansky <noreply@lansky.tech>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Gene at Lansky <gene@lansky.tech>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "hi@lansky.tech",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "hi@lansky.tech",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "dark",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["dark"]["light"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
};

export default config;
