import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "Lansky Tech",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Web development done right.",
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
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1QpKehBA9X37Uo66ezhxOARY"
            : "price_1ROUi8BA9X37Uo668gpgpGkS",
        // REQUIRED - Name of the plan, displayed on the pricing page
        name: "🛒 New Cart, Who This?",
        description: "Upgrade your e-commerce experience with a streamlined, conversion-focused shopping cart that integrates seamlessly with your existing setup.",
        features: [
          { name: "Effortless Stripe/SamCart integration" },
          { name: "Custom shopping cart enhancements for a smooth checkout" },
          { name: "Responsive design optimized for all devices" },
          { name: "Enhanced load times & user-friendly UI/UX" },
          { name: "Optional add-ons: Detailed analytics & extended support" }
        ],
        ctaButtonText: "$2,399 - Order Now",
        footerText: "Let's boogie."
      },
      {
        isFeatured: true,
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1ROUeSBA9X37Uo66ulgTOgTk"
            : "price_1ROUcnBA9X37Uo66AsOrdr31",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "✨ Landing Page Glow Up",
        description: "Refine your landing page to convert more visitors by enhancing your CTAs, visuals, and performance—without a full redesign.",
        features: [
          { name: "Strategic CTA placement for every device" },
          { name: "AI-powered image optimization & load speed boosts" },
          { name: "Dynamic content variants & A/B testing setup" },
          { name: "Optimized typography & white space for clear messaging" },
          { name: "Multimedia conversion (GIFs/MP4s to HLS) with subtitles" },
          { name: "Optional add-ons: Advanced testing, maintenance, interactive features" }
        ],
        ctaButtonText: "$1500",
        footerText: "Grab your spot in line."
      },
      {
        isFeatured: false,
        priceId: "custom",
        // REQUIRED - Name of the plan, displayed on the pricing page
        name: "🚀 Web App Boosters",
        description: "Supercharge your web app with features that engage users and drive growth—focusing on gamified onboarding, performance improvements, and built-in growth engines.",
        features: [
          { name: "Onboarding gamification to make first impressions fun" },
          { name: "Performance enhancements for lightning-fast interactions" },
          { name: "Growth engine integration: in-app checkout, referrals, & social sharing" },
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
