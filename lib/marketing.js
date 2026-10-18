// Digital Marketing page copy and data, transcribed from the Figma "Marketing detail page" export.
// Placeholder content that still needs real values is marked TODO.
import { ChartColumn, FileText, Film, Megaphone, Palette, PenTool, Search, Share2, Users } from "lucide-react";
import { contactUs, site } from "./content";

export const meta = {
  title: "Digital Marketing - Trivyah Tech",
  description:
    "Brand, content, and performance marketing working together. We build steady growth, not one-off campaigns.",
};

export const hero = {
  eyebrow: "Digital Marketing",
  titleLines: ["Create.", "Influence.", "Grow."],
  body: meta.description,
  primaryCta: { label: "Start a Campaign", href: `mailto:${site.email}?subject=Start%20a%20campaign` }, // TODO: booking link
  secondaryCta: { label: "See Success Stories", href: "#success-stories" },
};

export const services = {
  title: "What We Do",
  items: [
    { icon: Palette, title: "Brand Identity", description: "Naming, visual systems, and voice that make you unmistakable." },
    { icon: Share2, title: "Social Media Marketing", description: "Always-on content engines across every platform that counts." },
    { icon: PenTool, title: "Creative Design", description: "Scroll-stopping creative built to convert, not just decorate." },
    { icon: Search, title: "SEO", description: "Technical and content SEO that grows your organic traffic over time." },
    { icon: Megaphone, title: "Paid Campaigns", description: "Full-funnel ads on Google, Meta, and LinkedIn with clear ROAS." },
    { icon: Film, title: "Video Editing", description: "Reels, shorts, and long-form edited for retention and reach." },
    { icon: FileText, title: "Content Creation", description: "Articles, scripts, and assets that earn attention organically." },
    { icon: Users, title: "Influencer Marketing", description: "Vetted creator partnerships that move real audiences." },
    { icon: ChartColumn, title: "Performance Analytics", description: "Attribution and dashboards that tie spend to revenue." },
  ],
};

export const process = {
  title: "Marketing Process",
  steps: [
    { number: "01", title: "Strategy", description: "Positioning, audience, and channel mix defined from first principles." },
    { number: "02", title: "Creative", description: "We produce the assets, campaigns, and content your funnel needs." },
    { number: "03", title: "Launch", description: "Coordinated rollout across paid and organic with live monitoring." },
    { number: "04", title: "Optimize", description: "Weekly testing and clear reports that keep improving your results." },
  ],
};

export const successStories = {
  title: "Success Stories",
  items: [
    { stat: "62% ↓ no-shows", client: "MedSpa", summary: "AI scheduling + social campaigns filled the calendar." },
    { stat: "1.2M impressions", client: "CoreKit", summary: "Developer-focused content and SEO drove organic dominance." },
  ],
};

export const brands = {
  eyebrow: "Our Work",
  title: "Brands We've Grown",
  description: "Brand identity, social content, and performance campaigns that turned products into recognized names.",
  // Images are cropped from the Figma export and already include the badge, title and social icons.
  // TODO: replace with clean 2x exports and render those overlays as HTML (see BrandCaseCard `overlay`).
  items: [
    {
      image: "/work/brand-tejas-uniforms.png",
      imageAlt: "Tejas Uniforms storefront and NCC cadets in uniform",
      title: "Tejas Uniforms",
      description:
        "We built the brand identity and run an always-on content engine across Instagram and Facebook - reels, product storytelling, and performance campaigns that turn a niche uniform business into a recognized national name.",
      tags: ["Brand Identity", "Social Content", "Reels", "Paid Ads", "SEO"],
      metrics: [
        { value: "1M+", label: "Audience reach" },
        { value: "4.2×", label: "Engagement" },
        { value: "3.8×", label: "ROAS" },
      ],
      link: { label: "View live brand presence", href: "https://tejas.trivyah.tech" }, // TODO: social profile?
    },
    {
      image: "/work/brand-pilot-impex.png",
      imageAlt: "Pilot Impex trading dashboard on a curved monitor",
      title: "Pilot Impex",
      description:
        "A legacy industrial brand repositioned for the digital era - refined identity, technical SEO foundation, and a LinkedIn-led content strategy that drives qualified B2B inquiries from across the country.",
      tags: ["Brand Refresh", "SEO", "Content", "LinkedIn", "Lead Gen"],
      metrics: [
        { value: "2.4×", label: "Organic traffic" },
        { value: "+180%", label: "Qualified leads" },
        { value: "↑ High", label: "Brand recall" },
      ],
      link: { label: "View live brand presence", href: "https://pilotimpex.in" }, // TODO: social profile?
    },
  ],
};

export const faq = {
  title: "FAQ",
  items: [
    {
      question: "Do you require long-term retainers?",
      answer:
        "Most growth work runs on monthly retainers, but we also take on focused campaigns and launches. We'll recommend the right structure after discovery.",
    },
    {
      question: "Can you work with our existing brand?",
      // TODO: replace placeholder answer
      answer:
        "Yes. We start from your current identity and guidelines, tighten what isn't working, and extend it across every channel we run.",
    },
    {
      question: "How do you report on performance?",
      // TODO: replace placeholder answer
      answer:
        "You get a live dashboard plus a monthly review tying spend, reach, and leads to revenue - with the experiments planned for next month.",
    },
    {
      question: "Do you produce video in-house?",
      // TODO: replace placeholder answer
      answer: "Yes. Scripting, shooting, and editing for reels, shorts, and long-form all happen within our creative team.",
    },
  ],
};

export const cta = {
  titleLines: ["Let's build your growth", "engine."],
  body: "Strategy, creative, and performance under one roof. Tell us where you want to grow.",
  primary: contactUs,
};
