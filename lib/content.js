// All page copy and data. Placeholder content that still needs real values is marked TODO.

export const site = {
  name: "Trivyah Tech",
  email: "hello@trivyah.tech",
  phone: "+91 00000 00000", // TODO: real phone number (Figma repeats the email here)
  phoneHref: "tel:+910000000000", // TODO: real phone number
  tagline: "Innovate. Build. Scale.",
  description:
    "Trivyah Tech builds software, brands, AI experiences, and digital growth strategies that help ambitious businesses scale with confidence.",
};

// TODO: booking link (e.g. Calendly) — mailto until then
export const bookCall = { label: "Book a Call", href: `mailto:${site.email}?subject=Book%20a%20call` };

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#work" },
  { label: "About", href: "/#inside" }, // TODO: point to an About section/page once it exists
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "Next-generation digital product studio",
  titleLines: ["Building digital", "products for", "modern", "businesses."],
  body: site.description,
  primaryCta: { label: "Explore", href: "#work" },
  secondaryCta: { label: "Contact Us", href: "#contact" },
  stats: [
    { value: "120+", label: "Projects shipped" },
    { value: "40+", label: "Global clients" },
    { value: "8", label: "Years building" },
  ],
};

export const services = {
  eyebrow: "What We Build",
  titleLines: ["Helping businesses transform", "ideas into powerful digital experiences."],
  items: [
    {
      id: "development",
      number: "01",
      icon: "code",
      title: "Development",
      description:
        "Full-stack engineering — from rapid MVPs to enterprise platforms engineered to scale.",
      tags: [
        "Website Development",
        "Web Applications",
        "Mobile Applications",
        "UI/UX Design",
        "AI Solutions",
        "Automation",
        "Enterprise Software",
        "CRM",
        "POS Systems",
        "Dashboards",
        "SaaS Platforms",
        "Cloud Solutions",
        "API Integration",
        "Maintenance",
      ],
      cta: { label: "Explore Development", href: "/development" },
    },
    {
      id: "marketing",
      number: "02",
      icon: "megaphone",
      title: "Digital Marketing",
      description:
        "Data-driven growth — brand, content, and performance campaigns that move metrics that matter.",
      tags: [
        "Social Media Marketing",
        "Brand Strategy",
        "Creative Design",
        "SEO",
        "Paid Advertising",
        "Performance Marketing",
        "Content Marketing",
        "Video Editing",
        "Reels",
        "Campaign Management",
        "Email Marketing",
        "Analytics",
      ],
      cta: { label: "Explore Marketing", href: "/marketing" },
    },
  ],
};

export const inside = {
  eyebrow: "Inside Trivyah",
  title: "Follow our latest work",
  // `tone` alternates the screen gradient exactly as in Figma.
  reels: [
    { platform: "Instagram", icon: "instagram-sm", handle: "@trivyah.tech", title: "Behind the build", meta: "Reel · 0:32", tone: "bright", href: "#" }, // TODO: post URL
    { platform: "LinkedIn", icon: "linkedin-sm", handle: "Trivyah Tech", title: "Scaling SaaS in 2026", meta: "Article · 4 min", tone: "dim", href: "#" }, // TODO: post URL
    { platform: "YouTube", icon: "youtube-sm", handle: "Trivyah Shorts", title: "AI automation demo", meta: "Short · 0:58", tone: "bright", href: "#" }, // TODO: post URL
    { platform: "Facebook", icon: "facebook-sm", handle: "Trivyah Tech", title: "Campaign case study", meta: "Video · 2:14", tone: "dim", href: "#" }, // TODO: post URL
    { platform: "Instagram", icon: "instagram-sm", handle: "@trivyah.tech", title: "Brand identity drop", meta: "Reel · 0:45", tone: "bright", href: "#" }, // TODO: post URL
    // TODO: placeholder posts so the carousel has something to scroll to — replace with real ones.
    { platform: "YouTube", icon: "youtube-sm", handle: "Trivyah Shorts", title: "Sprint review, unfiltered", meta: "Short · 0:41", tone: "dim", href: "#" },
    { platform: "LinkedIn", icon: "linkedin-sm", handle: "Trivyah Tech", title: "Design systems that last", meta: "Article · 6 min", tone: "bright", href: "#" },
    { platform: "Instagram", icon: "instagram-sm", handle: "@trivyah.tech", title: "Launch day at the studio", meta: "Reel · 0:38", tone: "dim", href: "#" },
  ],
};

export const work = {
  eyebrow: "Selected Work",
  title: "Real products built with purpose.",
  featured: {
    number: "01",
    category: "SaaS",
    title: "CoreKit", // TODO: confirm project name (the Figma card leaves the title slot empty)
    industry: "Design systems", // TODO: confirm
    description: "Component library & design system platform powering 2k+ teams.",
    href: "#", // TODO: case study URL
  },
  projects: [
    { number: "02", category: "Platform", title: "Verova Payments", industry: "Fintech", description: "End-to-end payment orchestration with real-time reconciliation.", href: "#" },
    { number: "03", category: "Web App", title: "MedSpa", industry: "Healthcare", description: "Booking & clinic management suite with AI scheduling.", href: "#" },
    { number: "04", category: "Enterprise", title: "EDGE Autosoft", industry: "Automotive", description: "Dealer management system automating inventory and invoicing.", href: "#" },
    { number: "05", category: "Web App", title: "Capital Lending", industry: "Finance", description: "Loan origination portal with embedded credit decisioning.", href: "#" },
  ],
};

export const stories = {
  eyebrow: "Client Stories",
  titleLines: ["Trusted by founders and teams", "who ship."],
  testimonials: [
    {
      name: "Aarav Mehta",
      role: "CEO, CoreKit",
      source: "LinkedIn",
      hasVideo: true,
      quote:
        "Trivyah rebuilt our platform in 10 weeks. The velocity and craft were unreal — we shipped to 2,000 teams without a hiccup.",
    },
    {
      name: "Sofia Rendón",
      role: "CMO, Verova",
      source: "LinkedIn", // TODO: confirm source
      hasVideo: false,
      quote:
        "Their growth team 3x'd our qualified pipeline in a single quarter. Performance marketing with real engineering rigor.",
    },
    {
      name: "Daniel Okafor",
      role: "Founder, EDGE Autosoft",
      source: "LinkedIn", // TODO: confirm source
      hasVideo: true,
      quote:
        "From wireframes to enterprise rollout, Trivyah owned every detail. The automation saved us 40 hours a week.",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  items: [
    {
      question: "What does Trivyah Tech actually do?",
      answer:
        "We are a full-cycle digital product studio. We design, engineer, and scale software, brands, AI solutions, and growth campaigns — from first wireframe to global launch.",
    },
    {
      question: "How do projects typically start?",
      // TODO: replace placeholder answer
      answer:
        "With a short discovery call. We map your goals, users, and constraints, then send a scoped proposal with timeline and budget — usually within a week.",
    },
    {
      question: "Do you work with early-stage startups?",
      // TODO: replace placeholder answer
      answer:
        "Yes. We help founders validate ideas and ship a focused MVP fast, then stay on to scale the product as traction grows.",
    },
    {
      question: "Can you take over an existing codebase?",
      // TODO: replace placeholder answer
      answer:
        "Yes. We start with a code and infrastructure audit, fix what blocks you today, and then keep shipping features on top of a healthier foundation.",
    },
  ],
};

export const cta = {
  titleLines: ["Ready to Build Something", "Extraordinary?"],
  body: "Let's create software, products, and digital experiences your customers will love.",
  primary: bookCall,
  secondary: { label: "Contact Us", href: `mailto:${site.email}` },
};

export const footer = {
  wordmark: "TRIVYAH",
  blurb: "Innovate. Build. Scale. We craft software, brands, and AI experiences for ambitious businesses.",
  services: [
    { label: "Software Development", href: "/development" },
    { label: "UI/UX Design", href: "/development#capabilities" },
    { label: "AI Solutions", href: "/development#ai" },
    { label: "Branding", href: "/marketing" },
    { label: "Digital Marketing", href: "/marketing" },
  ],
  company: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/development" },
    { label: "Marketing", href: "/marketing" },
    { label: "Portfolio", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ],
  // TODO: real profile URLs
  socials: [
    { label: "LinkedIn", icon: "linkedin", href: "#" },
    { label: "Instagram", icon: "instagram", href: "#" },
    { label: "YouTube", icon: "youtube", href: "#" },
    { label: "GitHub", icon: "github", href: "#" },
  ],
  copyright: "© 2026 Trivyah Tech. All rights reserved.",
};
