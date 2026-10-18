// Development page copy and data, transcribed from Figma "Development Detail page" (104:1418).
// Placeholder content that still needs real values is marked TODO.
import {
  AppWindow,
  Bot,
  Brain,
  Cloud,
  CodeXml,
  Cpu,
  Globe,
  MessageSquare,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { contactUs, site } from "./content";

export const meta = {
  title: "Development - Trivyah Tech",
  description:
    "From quick MVPs to enterprise platforms, we build reliable software that grows with your business.",
};

export const hero = {
  eyebrow: "Development",
  titleLines: ["Build Faster.", "Scale Smarter."],
  body: meta.description,
  primaryCta: { label: "Start a Project", href: contactUs.href },
  secondaryCta: { label: "View Case Studies", href: "#case-studies" },
};

export const capabilities = {
  title: "Capabilities",
  items: [
    { icon: CodeXml, title: "Custom Software", description: "Bespoke systems engineered around your exact workflows." },
    { icon: Globe, title: "Website Development", description: "Marketing sites and storefronts that load fast and convert." },
    { icon: AppWindow, title: "Web Applications", description: "Dashboards and portals built to handle real growth." },
    { icon: Smartphone, title: "Mobile Apps", description: "Fast iOS and Android apps from a single codebase." },
    { icon: Palette, title: "UI/UX Design", description: "Research-driven interfaces with design systems that last." },
    { icon: Bot, title: "AI Integration", description: "LLMs, copilots, and automation embedded where they matter." },
    { icon: Workflow, title: "Automation", description: "Remove repetitive work with reliable, automated workflows." },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Cloud hosting and automated deployments that stay reliable." },
    { icon: ShieldCheck, title: "Maintenance & Support", description: "Ongoing monitoring, fixes, and improvements after launch." },
  ],
};

export const ai = {
  eyebrow: "Fully Custom AI",
  eyebrowIcon: Sparkles,
  title: "AI Automations, Chatbots & Agents.",
  body: "Every solution is engineered around your specific operations - your data, your tools, your tone. Not off-the-shelf. Not generic. Built to integrate, learn, and scale with your business.",
  solutions: [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Conversational assistants trained on your data - handling support, sales, and routing 24/7.",
      points: ["LLM fine-tuning", "Multi-channel deploy", "Human handoff"],
    },
    {
      icon: Workflow,
      title: "AI Automations",
      description: "Replace repetitive workflows with reliable pipelines that connect your tools and act on their own.",
      points: ["Trigger-based flows", "Document processing", "CRM sync"],
    },
    {
      icon: Users,
      title: "AI Agents",
      description: "Autonomous agents that plan, reason, and execute multi-step tasks across your business systems.",
      points: ["Goal-driven actions", "Tool use & APIs", "Memory & context"],
    },
  ],
  stepsTitle: "How we build it",
  steps: [
    { number: "01", icon: Sparkles, title: "Discover", description: "We map your workflows and pinpoint where AI creates leverage." },
    { number: "02", icon: Cpu, title: "Design", description: "We architect the agent, model, and integration layer to fit." },
    { number: "03", icon: Brain, title: "Build", description: "We train, connect, and deploy - fully custom to your data and rules." },
    { number: "04", icon: MessageSquare, title: "Refine", description: "We monitor, retrain, and optimize as your business evolves." },
  ],
  strip: {
    title: "Have a workflow that should run itself?",
    body: "Tell us what you want to automate. We'll design the AI for it.",
    cta: { label: "Design my AI", href: `mailto:${site.email}?subject=Design%20my%20AI` }, // TODO: booking link
  },
};

export const process = {
  title: "Development Process",
  steps: [
    { number: "01", title: "Discovery", description: "We map goals, constraints, and success metrics with your team." },
    { number: "02", title: "Architecture", description: "We design systems, data models, and interfaces before building." },
    { number: "03", title: "Build", description: "Weekly shipping cycles with live previews and constant feedback." },
    { number: "04", title: "Launch & Scale", description: "We deploy, monitor, and optimize for real-world performance." },
  ],
};

export const techStack = {
  title: "Technology Stack",
  items: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "Redis",
    "GraphQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "OpenAI",
  ],
};

export const caseStudies = {
  title: "Featured Case Studies",
  items: [
    { stat: "2k+ teams", client: "CoreKit", summary: "Design system platform shipped in 10 weeks." },
  ],
};

export const builtDeployed = {
  eyebrow: "Our Work",
  title: "Built & Deployed",
  description: "Live products and platforms engineered end-to-end by the Trivyah team.",
  // Images are cropped from the Figma export and already include their badges.
  // TODO: replace with clean 2x exports and move the badges into `badges`.
  projects: [
    {
      image: "/work/tejas-uniforms.png",
      imageAlt: "Tejas Uniforms storefront showing NCC uniform categories",
      category: "E-Commerce & Defense Kit",
      domain: "tejas.trivyah.tech",
      title: "Tejas Uniforms",
      description:
        "National e-commerce platform equipping 1M+ NCC cadets across India with DG NCC regulation uniforms and gear.",
      link: { label: "Visit live project", href: "https://tejas.trivyah.tech", external: true },
    },
    {
      image: "/work/pilot-impex.png",
      imageAlt: "Pilot Impex trading dashboard with market overview and live orders",
      category: "Chemical & Industrial Trade",
      domain: "pilotimpex.in",
      title: "Pilot Impex",
      description:
        "Enterprise chemical distribution portal serving GACL and specialty chemicals with real-time RFQ workflows.",
      link: { label: "Visit live project", href: "https://pilotimpex.in", external: true },
    },
    {
      image: "/work/medspa-os.png",
      imageAlt: "MedSpa OS scheduling calendar on a clinic display",
      category: "Healthcare Tech",
      title: "MedSpa OS",
      description: "Clinic management & smart booking suite featuring automated AI practitioner dispatch.",
      link: { label: "View details", href: "#" }, // TODO: case study URL
    },
  ],
};

export const faq = {
  title: "FAQ",
  items: [
    {
      question: "What tech stack do you use?",
      answer:
        "We default to TypeScript, React/Next.js, Node or Go, and PostgreSQL on AWS - but we choose the stack that fits your constraints, not the other way around.",
    },
    {
      question: "Do you offer fixed-price projects?",
      // TODO: replace placeholder answer
      answer:
        "Yes. Once scope is clear we can quote a fixed price per milestone; for evolving products we work in monthly sprints instead.",
    },
    {
      question: "Can you integrate with our existing APIs?",
      // TODO: replace placeholder answer
      answer:
        "Yes. We integrate with REST and GraphQL APIs, webhooks, and legacy systems, and add tests around every integration point.",
    },
    {
      question: "Who owns the code?",
      // TODO: replace placeholder answer
      answer: "You do. All source code, infrastructure, and design files are transferred to you, with full documentation.",
    },
  ],
};

export const cta = {
  titleLines: ["Let's engineer your next", "platform."],
  body: "Tell us what you're building. We'll bring the team and the experience to deliver it.",
  primary: contactUs,
};
