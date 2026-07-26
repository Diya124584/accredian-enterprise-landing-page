export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export interface HeroHighlight {
  label: string;
}

export interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
}

// Live site renders these as animated counters starting from 0. Exact target
// figures aren't exposed in static markup — replace with your real numbers
// if you have them; these are reasonable, consistent placeholders.
export const statsContent = {
  eyebrow: "Our Track Record",
  heading: "The Numbers Behind Our Success",
  stats: [
    {
      id: "trained",
      target: 10,
      suffix: "K+",
      label: "Professionals Trained For Exceptional Career Success",
    },
    {
      id: "sessions",
      target: 200,
      suffix: "+",
      label: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      id: "learners",
      target: 5,
      suffix: "K+",
      label: "Active Learners Engaged In Dynamic Courses",
    },
  ] as StatItem[],
};

export interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export const clientsContent = {
  eyebrow: "Our Proven Partnerships",
  heading: "Successful Collaborations With the Industry's Best",
  logos: [
    { name: "Reliance Industries Limited", src: "/logos/reliance.png", width: 160, height: 40 },
    { name: "HCL", src: "/logos/hcl.png", width: 120, height: 40 },
    { name: "IBM", src: "/logos/ibm.png", width: 100, height: 40 },
    { name: "CRIF", src: "/logos/crif.png", width: 110, height: 40 },
    { name: "ADP", src: "/logos/adp.svg", width: 100, height: 40 },
    { name: "Bayer", src: "/logos/bayer.svg", width: 120, height: 40 },
  ] as ClientLogo[],
};

export interface EdgeItem {
  title: string;
  description: string;
}

export const edgeContent = {
  eyebrow: "The Accredian Edge",
  heading: "Key Aspects of Our Strategic Training",
  items: [
    {
      title: "Tailored Solutions",
      description: "Programs customized to your organization's goals and challenges.",
    },
    {
      title: "Expert Guidance",
      description: "Learn from industry leaders with real-world success.",
    },
    {
      title: "Innovative Framework",
      description: "Proprietary methods for impactful, application-driven results.",
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art LMS for seamless learning experiences.",
    },
    {
      title: "Diverse Offerings",
      description: "Courses across industries, skill levels, and emerging fields.",
    },
    {
      title: "Proven Impact",
      description: "Trusted by leading organizations for measurable ROI.",
    },
    {
      title: "Flexible Delivery",
      description: "Online and offline options tailored to your needs.",
    },
  ] as EdgeItem[],
};

export interface CatPillar {
  title: string;
  description: string;
}

export const catContent = {
  eyebrow: "The CAT Framework",
  heading: "Our Proven Approach to Learning Excellence",
  pillars: [
    {
      title: "Concept",
      description: "Foundational knowledge for deep subject understanding.",
    },
    {
      title: "Application",
      description: "Practical implementation through real-world scenarios.",
    },
    {
      title: "Tools",
      description: "Resources and techniques for effective skill mastery.",
    },
  ] as CatPillar[],
};

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export const howItWorksContent = {
  eyebrow: "How We Deliver Results That Matter?",
  heading: "A Structured Three-Step Approach to Skill Development",
  steps: [
    {
      step: 1,
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs.",
    },
    {
      step: 2,
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals.",
    },
    {
      step: 3,
      title: "Flexible Program Delivery",
      description:
        "Deliver adaptable programs aligned with industry and organizational needs.",
    },
  ] as HowItWorksStep[],
};

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

// The live site only exposes 2 questions in static markup, both under "About
// the Course" (the other two tabs' questions load on tab switch). The
// questions/answers below for those two tabs are written to match the site's
// tone and topic, since their exact copy isn't retrievable statically —
// swap in the real copy from the live site if you want an exact match.
export const faqContent = {
  eyebrow: "FAQs",
  heading: "Frequently Asked Questions",
  categories: [
    {
      id: "course",
      label: "About the Course",
      items: [
        {
          question: "What types of corporate training programs does Accredian offer?",
          answer:
            "We offer programs across Data Science, AI, Product Management, Leadership, and Business Analytics, each customized to your organization's goals.",
        },
        {
          question: "What domain specializations are available?",
          answer:
            "Specializations span Gen-AI, Product & Innovation, Tech & Data, Operations, Fintech, and Digital Enterprise tracks.",
        },
      ],
    },
    {
      id: "delivery",
      label: "About the Delivery",
      items: [
        {
          question: "Is training delivered online, offline, or both?",
          answer:
            "Both. Programs can be delivered fully online, on-site, or in a hybrid format based on your team's location and schedule.",
        },
        {
          question: "How long does a typical enterprise program run?",
          answer:
            "Most programs run 6 to 12 weeks, though timelines flex based on your team's skill-gap assessment and goals.",
        },
      ],
    },
    {
      id: "misc",
      label: "Miscellaneous",
      items: [
        {
          question: "Do participants receive a certificate on completion?",
          answer:
            "Yes, every participant receives a certificate of completion recognized across our partner network.",
        },
        {
          question: "Can programs be customized for a specific industry?",
          answer:
            "Yes, our Skill Gap Analysis step tailors content, case studies, and tools to your specific industry.",
        },
      ],
    },
  ] as FaqCategory[],
};

export interface Testimonial {
  quote: string;
  client: string;
}

export const testimonialsContent = {
  eyebrow: "Testimonials from Our Partners",
  heading: "What Our Clients Are Saying",
  items: [
    {
      quote:
        "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
      client: "ADP",
    },
    {
      quote:
        "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
      client: "BAYER",
    },
  ] as Testimonial[],
};

export const ctaContent = {
  heading: "Want to Learn More About Our Training Solutions?",
  subheading: "Get Expert Guidance for Your Team's Success!",
  ctaLabel: "Contact Us",
};

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const footerContent = {
  brand: "Accredian",
  brandSuffix: "Enterprise",
  tagline:
    "India's most trusted enterprise learning platform. Upskill your workforce with programs from IITs, IIMs, and global universities.",
  socials: [
    { label: "LinkedIn", href: "#", icon: "/icons/linkedin.svg" },
    { label: "Twitter", href: "#", icon: "/icons/twitter.svg" },
    { label: "YouTube", href: "#", icon: "/icons/youtube.svg" },
  ],
  groups: [
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Learning", href: "#" },
        { label: "Custom Programs", href: "#" },
        { label: "Analytics Dashboard", href: "#" },
        { label: "HR Integrations", href: "#" },
        { label: "Certificates", href: "#" },
      ],
    },
    {
      title: "Programs",
      links: [
        { label: "Data Science & AI", href: "#" },
        { label: "Product Management", href: "#" },
        { label: "Leadership", href: "#" },
        { label: "Business Analytics", href: "#" },
        { label: "Cloud Computing", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "#" },
        { label: "Whitepapers", href: "#" },
        { label: "Webinars", href: "#" },
        { label: "L&D Playbook", href: "#" },
        { label: "API Docs", href: "#" },
      ],
    },
  ] as FooterLinkGroup[],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  copyright: "© 2026 Accredian. All rights reserved. Accredian is a registered trademark.",
};

export const heroContent = {
  eyebrow: "Trusted by 200+ Enterprises",
  heading: "Next-Gen Expertise For Your Enterprise",
  subheading: "Cultivate high-performance teams through expert learning.",
  highlights: [
    { label: "Tailored Solutions" },
    { label: "Industry Insights" },
    { label: "Expert Guidance" },
  ] as HeroHighlight[],
  ctaLabel: "Enquire Now",
  image: {
    src: "/images/hero.webp",
    alt: "Enterprise professionals collaborating in a training session",
    width: 960,
    height: 800,
  },
  floatingBadge: {
    value: "10,000+ Trained",
    label: "Professionals worldwide",
  },
};
