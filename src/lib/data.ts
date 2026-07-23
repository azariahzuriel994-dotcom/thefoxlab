export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    title: "Website Development",
    description:
      "High-performance marketing sites and custom web platforms built for speed and conversion.",
    tag: "WEB",
  },
  {
    title: "Shopify Development",
    description:
      "Custom Shopify themes and app integrations built to move product, not just look good.",
    tag: "COMMERCE",
  },
  {
    title: "AI Automation",
    description:
      "Chatbots, internal tools, and workflow automation that remove manual work from your day.",
    tag: "AI",
  },
  {
    title: "SaaS Development",
    description:
      "Full-stack SaaS products — from first prototype to a platform your users depend on.",
    tag: "PRODUCT",
  },
  {
    title: "Mobile App Development",
    description:
      "Native-feeling iOS and Android apps built to actually get used and get updated.",
    tag: "MOBILE",
  },
  {
    title: "UI/UX Design",
    description:
      "Interface design grounded in how people actually use software, not just how it looks in a mockup.",
    tag: "DESIGN",
  },
  {
    title: "Branding & Graphics",
    description:
      "Visual identity systems — logo, type, color, and tone — built to travel across every surface.",
    tag: "BRAND",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing updates, monitoring, and support so your site stays fast, secure, and current.",
    tag: "CARE",
  },
  {
    title: "SEO & Digital Growth",
    description:
      "Technical SEO and growth strategy focused on qualified traffic, not vanity rankings.",
    tag: "GROWTH",
  },
];

export const PROJECTS = [
  {
    title: "Aperture — E-Commerce Platform",
    category: "Website Development · Commerce",
    description:
      "A full storefront rebuild focused on sub-second load times and a streamlined checkout flow.",
    mark: "grid",
  },
  {
    title: "Northline — SaaS Dashboard",
    category: "SaaS Development",
    description:
      "A data-dense analytics dashboard designed to stay legible under real production load.",
    mark: "bars",
  },
  {
    title: "Kindred — Booking App",
    category: "Mobile App Development",
    description:
      "A cross-platform booking app with live calendar sync and push-based reminders.",
    mark: "ring",
  },
  {
    title: "Vantage — AI Support Layer",
    category: "AI Automation",
    description:
      "A support chatbot trained on internal docs, cutting first-response time dramatically.",
    mark: "diamond",
  },
  {
    title: "Ledger & Co — Brand System",
    category: "Branding & Graphics",
    description:
      "A full identity system — mark, type, and motion guidelines — for a fintech rebrand.",
    mark: "triangle",
  },
  {
    title: "Halcyon — 3D Product Studio",
    category: "Website Development · 3D",
    description:
      "An interactive 3D configurator letting customers explore product finishes in real time.",
    mark: "cube",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Senior-only team",
    description:
      "No juniors learning on your budget — every project is built by people who've shipped this before.",
  },
  {
    title: "One team, full stack",
    description:
      "Design, engineering, and growth under one roof, so nothing gets lost between agencies.",
  },
  {
    title: "Fixed scope, fixed price",
    description:
      "You get a clear quote before work starts. No mid-project surprises on cost or timeline.",
  },
  {
    title: "Built to scale",
    description:
      "Architecture decisions are made for where your business is going, not just where it is today.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They rebuilt our platform end to end and it never once felt like a black box — every decision was explained.",
    name: "J. Whitfield",
    role: "Founder, DTC Retail Brand",
  },
  {
    quote:
      "The AI automation work alone saved our support team hours every single week within the first month.",
    name: "M. Okafor",
    role: "Ops Lead, Logistics Startup",
  },
  {
    quote:
      "Finally a studio that answers on time and doesn't disappear the moment the invoice is paid.",
    name: "R. Alden",
    role: "CEO, Healthcare SaaS",
  },
];

export const TECH_STACK = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
  "Shopify",
  "OpenAI API",
];

export const PRICING = [
  {
    name: "Launch",
    price: "$2,500",
    period: "starting at",
    description: "For businesses that need a sharp, modern web presence fast.",
    features: [
      "5–7 page custom website",
      "Mobile-first responsive build",
      "Basic on-page SEO setup",
      "2 rounds of revisions",
      "2 weeks delivery",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$7,500",
    period: "starting at",
    description: "For businesses ready to invest in a full digital system.",
    features: [
      "Everything in Launch",
      "CRM or booking system integration",
      "Custom UI/UX design system",
      "Basic AI automation (chatbot or workflow)",
      "Priority support for 60 days",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quoted per project",
    description: "For SaaS products, mobile apps, and multi-system builds.",
    features: [
      "Full product design + engineering team",
      "SaaS or mobile app development",
      "Advanced AI/automation architecture",
      "Dedicated project lead",
      "Ongoing maintenance retainer available",
    ],
    highlighted: false,
  },
];

export const CONTACT = {
  email: "thefoxlabs.tech@gmail.com",
  phone: "+447348540788",
  phoneDisplay: "+44 7348 540788",
  whatsapp: "https://wa.me/447348540788",
};
