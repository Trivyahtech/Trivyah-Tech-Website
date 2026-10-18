// About page copy, from the Figma "TT Brand Guideline" (About the brand, Aim & Vision, Brand Values).
import { Award, Handshake, Lightbulb, ShieldCheck, Target, Telescope } from "lucide-react";
import { contactUs } from "./content";

export const meta = {
  title: "About - Trivyah Tech",
  description:
    "Trivyah Tech is a technology company delivering innovative digital solutions that empower businesses to grow, innovate, and succeed.",
};

export const hero = {
  eyebrow: "About Us",
  titleLines: ["Innovate.", "Build. Scale."],
  body: meta.description,
  primaryCta: { label: "Start a Project", href: contactUs.href },
  secondaryCta: { label: "Our Values", href: "#values" },
};

export const intro = {
  title: "Who we are",
  paragraphs: [
    "Trivyah Tech is a technology-driven company committed to delivering innovative digital solutions that help businesses grow, adapt, and succeed in an ever-evolving digital landscape. We specialize in building scalable software, intuitive digital experiences, and modern technology solutions that solve real-world business challenges.",
    "Driven by innovation, quality, and collaboration, we partner with organizations of all sizes to transform ideas into reliable products that create lasting value. At Trivyah Tech, we believe technology should simplify complexity, empower people, and accelerate business success.",
  ],
};

export const aim = {
  title: "Our Aim & Vision",
  items: [
    {
      icon: Target,
      label: "Mission",
      text: "To empower businesses through innovative, reliable, and user-centric technology solutions that drive growth, improve efficiency, and create meaningful digital experiences. We are committed to delivering high-quality products while building long-term partnerships based on trust, transparency, and excellence.",
    },
    {
      icon: Telescope,
      label: "Vision",
      text: "To become a trusted global technology partner, recognized for delivering innovative digital solutions that inspire transformation and create lasting impact. We strive to shape the future through continuous innovation, exceptional quality, and a commitment to helping businesses thrive in the digital world.",
    },
  ],
};

export const values = {
  title: "Our Values",
  items: [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace new ideas, emerging technologies, and creative thinking to deliver modern solutions. Innovation drives us to continuously improve and stay ahead in a rapidly evolving digital world.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description:
        "We believe trust is built through honesty, transparency, and accountability. Every decision and interaction reflects our commitment to ethical business practices.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every project by maintaining high standards of quality, precision, and performance. Our focus is on delivering solutions that exceed expectations.",
    },
    {
      icon: Handshake,
      title: "Customer-Centric",
      description:
        "Our clients are at the heart of everything we do. We listen, understand their goals, and create solutions that deliver real value and lasting impact.",
    },
  ],
};

export const cta = {
  titleLines: ["Let's build something", "that lasts."],
  body: "Tell us about your business and your goals. We'll help you get there.",
  primary: contactUs,
};
