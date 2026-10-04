export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
}

export interface WorkItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image?: string;
  highlights: string[];
  technologies: string[];
}

export interface TeamDiscipline {
  id: string;
  role: string;
  description: string;
  focusAreas: string[];
  leadOutput: string;
}

export const SITE_DATA = {
  profile: {
    name: "Aditya Agrawat",
    logoWordmark: "ADITYA.",
    eyebrowLabel: "ADITYA AGRAWAT",
    subtitle: "Digital Marketer · Entrepreneur · Digital Builder",
    headline: "Building Digital Ideas Into Impact.",
    supportingText:
      "I'm Aditya Agrawat — a digital marketer, entrepreneur and digital builder working across digital marketing, websites, applications, content, social media, SEO, blogging and digital products with a 48+ member team.",
    aboveTheFoldText: "Have an idea, project or partnership opportunity? Let's talk.",
    email: "adityaagrawatofficial@gmail.com",
    positioning: "Digital Marketer · Entrepreneur · Digital Builder",
    stats: [
      { value: "48+", label: "Team Members" },
      { value: "∞", label: "Ideas & Projects" },
      { value: "24/7", label: "Digital Presence" },
      { value: "01", label: "Vision" }
    ]
  },

  whoIsAditya: {
    label: "01 — WHO IS ADITYA AGRAWAT?",
    heading: "Who is Aditya Agrawat?",
    summary:
      "Aditya Agrawat is an Indian digital marketer, entrepreneur and digital builder working across digital marketing, websites, applications, content, social media, SEO, blogging and digital products.",
    paragraphs: [
      "Aditya Agrawat is an Indian digital marketer, entrepreneur and digital builder working across digital marketing, websites, applications, content, social media, SEO, blogging and digital products.",
      "His work bridges technical architecture and growth execution — transforming early concepts into high-performing websites, mobile apps, scalable media engines, and durable digital ventures.",
      "Aditya operates alongside a dedicated 48+ member team spanning technology, marketing, content, design, promotion and operations, delivering end-to-end execution for brands, founders, and digital properties."
    ]
  },

  aboutProfile: {
    heading: "A digital builder focused on ideas, execution and growth.",
    lead: "Aditya Agrawat operates at the intersection of technology, marketing, content and digital business. Rather than treating code, growth, and media as separate silos, he orchestrates them as an interconnected growth ecosystem.",
    disciplines: [
      {
        title: "Digital Marketing Experience",
        desc: "Designing and executing multi-channel marketing campaigns, search strategy, conversion architecture, and measurable audience acquisition."
      },
      {
        title: "Building Websites",
        desc: "Engineering modern, fast, and responsive websites for brands, digital products, and content portals with refined aesthetics and high performance."
      },
      {
        title: "Application Development",
        desc: "Developing web and mobile applications designed around practical business logic, rock-solid security, and intuitive user experiences."
      },
      {
        title: "Online Content & Media",
        desc: "Creating editorial systems, written publications, and narrative frameworks that build lasting brand authority and organic reach."
      },
      {
        title: "Social Media & YouTube Promotion",
        desc: "Managing high-retention video programming, short-form syndication, and organic audience growth across YouTube and major social networks."
      },
      {
        title: "SEO & Blogging Properties",
        desc: "Structuring long-term topical authority, technical SEO hygiene, and high-quality blogging networks to generate enduring search visibility."
      },
      {
        title: "Digital Products & Platforms",
        desc: "Incubating digital ventures, software utilities, and digital platforms from initial conceptualization to full-scale release."
      },
      {
        title: "Multidisciplinary Team Leadership",
        desc: "Directing a 48+ member team of developers, marketers, writers, designers, and operators to execute complex digital initiatives at scale."
      }
    ]
  },

  whatBringsYouHere: [
    { id: "have-business", label: "I Have a Business", defaultInterest: "Digital Marketing" },
    { id: "have-idea", label: "I Have an Idea", defaultInterest: "Business Idea" },
    { id: "need-marketing", label: "I Need Digital Marketing", defaultInterest: "Digital Marketing" },
    { id: "need-website", label: "I Need a Website", defaultInterest: "Website" },
    { id: "need-app", label: "I Need an App", defaultInterest: "Application" },
    { id: "want-partner", label: "I Want to Partner", defaultInterest: "Partnership" },
    { id: "im-creator", label: "I'm a Creator", defaultInterest: "Collaboration" },
    { id: "other", label: "Other", defaultInterest: "Other" }
  ],

  howWeWork: [
    {
      step: "01",
      title: "Share Your Idea",
      desc: "Tell us what you're trying to build or achieve."
    },
    {
      step: "02",
      title: "Understand",
      desc: "Our team reviews your requirements and understands the opportunity."
    },
    {
      step: "03",
      title: "Plan",
      desc: "We discuss possible solutions, collaboration and next steps."
    },
    {
      step: "04",
      title: "Execute",
      desc: "Where there is a good fit, we work together to move the project forward."
    }
  ],

  services: [
    {
      id: "digital-marketing",
      number: "01",
      title: "Digital Marketing",
      tagline: "Strategy, campaigns, audience growth and digital marketing execution.",
      description:
        "Comprehensive digital marketing strategies crafted to attract high-intent users, optimize acquisition funnels, and scale commercial performance across search, paid media, and brand storytelling.",
      capabilities: [
        "Go-to-market strategic roadmap",
        "Paid acquisition & campaign management",
        "Audience segmentation & funnel optimization",
        "Conversion rate architecture",
        "Multi-channel performance tracking"
      ],
      deliverables: [
        "Full funnel acquisition blueprints",
        "Ad creative & copy frameworks",
        "Continuous attribution & analytics reporting"
      ]
    },
    {
      id: "website-development",
      number: "02",
      title: "Website Development",
      tagline: "Modern websites for brands, businesses and digital products.",
      description:
        "Fast, responsive, and aesthetically distinctive web experiences built with modern frontend frameworks, rock-solid security, and obsessive attention to typography, mobile ergonomics, and loading speeds.",
      capabilities: [
        "Custom responsive web development",
        "Modern agency & corporate brand portals",
        "Headless CMS & dynamic editorial hubs",
        "High-converting landing pages",
        "Web performance & Core Web Vitals optimization"
      ],
      deliverables: [
        "Production-ready responsive codebase",
        "SEO-optimized structure & semantic HTML",
        "Global CDN deployment & domain integration"
      ]
    },
    {
      id: "app-development",
      number: "03",
      title: "App Development",
      tagline: "Digital applications and products built around practical business needs.",
      description:
        "Cross-platform and web applications engineered to solve pragmatic business problems. From client portals to internal management tools, built with scalable architectures and clean interfaces.",
      capabilities: [
        "Custom web applications (SPA / Full-Stack)",
        "Cross-platform mobile applications",
        "API integration & backend workflows",
        "Real-time database and auth systems",
        "Intuitive UX wireframes & production components"
      ],
      deliverables: [
        "Interactive application frontend & cloud APIs",
        "Authentication & data isolation layers",
        "Maintenance & deployment pipeline"
      ]
    },
    {
      id: "content-social-media",
      number: "04",
      title: "Content & Social Media",
      tagline: "YouTube, social media, content promotion and online audience growth.",
      description:
        "End-to-end media production, distribution frameworks, and audience cultivation. We help brands turn complex ideas into compelling video, short-form content, and sustained engagement.",
      capabilities: [
        "YouTube channel growth & programming",
        "Short-form video packaging (Reels / Shorts)",
        "Social media narrative & scheduling",
        "Engagement analytics & retention loops",
        "Strategic creator collaborations"
      ],
      deliverables: [
        "Content editorial calendar & scripts",
        "Post-production creative assets & thumbnails",
        "Audience growth & retention reporting"
      ]
    },
    {
      id: "seo-blogging",
      number: "05",
      title: "SEO & Blogging",
      tagline: "SEO, content publishing and long-term organic digital properties.",
      description:
        "Long-term search visibility and digital asset building. We build editorial search engines, authoritative topical maps, and technical SEO hygiene that drive recurring inbound discovery.",
      capabilities: [
        "Technical SEO auditing & architecture",
        "Keyword clustering & topical maps",
        "Long-form editorial publishing systems",
        "On-page optimization & internal linking",
        "Rich Schema.org structured data setup"
      ],
      deliverables: [
        "Editorial content schedule & published blogs",
        "Search engine indexing & crawl health audits",
        "Monthly organic ranking & traffic audits"
      ]
    },
    {
      id: "digital-products",
      number: "06",
      title: "Digital Products",
      tagline: "Creating digital products, platforms and online businesses from idea to execution.",
      description:
        "End-to-end venture building. Taking nascent digital opportunities through ideation, MVP prototyping, monetization architecture, and scalable rollout.",
      capabilities: [
        "Concept validation & product discovery",
        "Rapid prototype & MVP roadmap",
        "Monetization & payment integration",
        "Onboarding & retention UX flows",
        "Iterative product refinement"
      ],
      deliverables: [
        "Functional digital product release",
        "User acquisition & billing architecture",
        "Lifecycle product iteration plan"
      ]
    }
  ] as ServiceItem[],

  haveAnIdea: {
    label: "LET'S BUILD TOGETHER",
    headingLine1: "Have an idea?",
    headingLine2: "Let's build it together.",
    leadParagraph: "You don't need to have everything figured out.",
    bodyParagraph:
      "Tell us what you're thinking, what you're trying to build or where you want to grow.",
    supportParagraph:
      "Our team can understand the requirement, discuss the possibilities and help identify the right next step."
  },

  partnerships: {
    heading: "Let's Build Something Together.",
    subheading:
      "We are open to working with businesses, creators, entrepreneurs, developers, agencies and digital teams.",
    openTo: [
      "Businesses",
      "Entrepreneurs",
      "Creators",
      "Publishers",
      "Developers",
      "Agencies",
      "Digital teams"
    ],
    cards: [
      {
        number: "01",
        title: "Business Partnership",
        subtitle: "For businesses and entrepreneurs looking for long-term collaboration.",
        desc: "Co-building digital ventures, modernizing web and application footprints, and implementing scalable marketing growth engines."
      },
      {
        number: "02",
        title: "Creator Collaboration",
        subtitle: "For YouTubers, creators, publishers and social media professionals.",
        desc: "Developing digital products for creator audiences, producing high-retention video formats, and building authoritative media engines."
      },
      {
        number: "03",
        title: "Digital Projects",
        subtitle: "For websites, applications, marketing, content and digital products.",
        desc: "Executing high-velocity digital initiatives with our dedicated 48+ member engineering, marketing, and creative team."
      }
    ]
  },

  team: {
    headingLine1: "One Vision.",
    headingLine2: "48+ People.",
    headingLine3: "One Digital Direction.",
    quote:
      "Great digital work isn't built alone. A 48+ member team works across technology, marketing, content, design, promotion and operations.",
    disciplines: [
      {
        id: "marketing",
        role: "MARKETING",
        description: "Strategists and growth specialists orchestrating campaigns, analytics, and market penetration.",
        focusAreas: ["Growth Strategy", "Paid Acquisition", "Funnel Optimization", "Audience Research"],
        leadOutput: "High-yield conversion funnels and scalable market penetration"
      },
      {
        id: "content",
        role: "CONTENT",
        description: "Storytellers, copywriters, and researchers crafting scripts, blogs, and narrative frameworks.",
        focusAreas: ["Scriptwriting", "Long-form Blogging", "Copywriting", "Editorial Strategy"],
        leadOutput: "Engaging editorial publishing and high-retention scripts"
      },
      {
        id: "design",
        role: "DESIGN",
        description: "UI/UX architects and visual designers shaping dark luxury interfaces and brand assets.",
        focusAreas: ["Visual Identity", "UI/UX Systems", "Motion Design", "Design Systems"],
        leadOutput: "Distinction-led digital interfaces and brand guidelines"
      },
      {
        id: "development",
        role: "DEVELOPMENT",
        description: "Software engineers and full-stack developers turning concepts into fast, secure web and app systems.",
        focusAreas: ["Frontend Architecture", "Backend Engineering", "Application Logic", "Security & DevOps"],
        leadOutput: "Production-grade web and mobile applications"
      },
      {
        id: "promotion",
        role: "PROMOTION",
        description: "Distribution managers managing YouTube channels, social outreach, and organic syndication.",
        focusAreas: ["YouTube Management", "Social Syndication", "Influencer Outreach", "Community Growth"],
        leadOutput: "Sustained audience retention and organic reach"
      },
      {
        id: "operations",
        role: "OPERATIONS",
        description: "Project managers and delivery coordinators ensuring flawless execution and on-time delivery.",
        focusAreas: ["Project Management", "Quality Assurance", "Resource Allocation", "Client Alignment"],
        leadOutput: "Predictable, transparent project timelines and milestones"
      }
    ] as TeamDiscipline[]
  },

  selectedWork: [
    {
      id: "work-web-apps",
      number: "01",
      category: "Web & Applications",
      title: "Web & Applications",
      subtitle: "Full-Stack Web Architectures & Product Interfaces",
      description:
        "Architecting bespoke web platforms and software tools tailored for speed, scale, and clean user experience. Combining modern TypeScript frameworks, resilient cloud backends, and responsive design systems.",
      image: "/src/assets/images/digital_builder_workspace_1791140696046.jpg",
      highlights: [
        "Responsive, high-speed agency and commercial web platforms",
        "Custom web applications with zero-lag interactions",
        "Modern developer toolchains, clean code architecture, and CDN delivery"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next / Vite", "Cloud APIs"]
    },
    {
      id: "work-marketing",
      number: "02",
      category: "Digital Marketing",
      title: "Digital Marketing",
      subtitle: "Multi-Channel Acquisition & Performance Funnels",
      description:
        "Designing structured digital marketing campaigns that guide high-intent prospects through clear conversion pathways. Balancing creative resonance with rigorous performance analytics.",
      highlights: [
        "Data-grounded search and social marketing campaigns",
        "Frictionless landing page funnels with quantified conversion tracking",
        "Multi-touch audience retargeting and relationship retention"
      ],
      technologies: ["Performance Ads", "Funnel Architecture", "Analytics", "Audience Retargeting"]
    },
    {
      id: "work-content-social",
      number: "03",
      category: "Content & Social",
      title: "Content & Social",
      subtitle: "Video Syndication, Organic Reach & Content Systems",
      description:
        "Building recurring digital media engines. Transforming conceptual knowledge and brand value into high-retention video formats, editorial articles, and social community growth.",
      image: "/src/assets/images/media_content_production_1791140713184.jpg",
      highlights: [
        "Long-form YouTube programming and high-click packaging",
        "Short-form cross-network syndication workflows",
        "Authoritative blogging networks designed for sustainable search traffic"
      ],
      technologies: ["YouTube Studio", "Video Production", "Editorial Systems", "Social Engines"]
    },
    {
      id: "work-digital-products",
      number: "04",
      category: "Digital Products",
      title: "Digital Products",
      subtitle: "Platform Engineering, Monetization & Online Ventures",
      description:
        "Incubating and releasing commercial digital products, software tools, and online ventures. Focusing on product-market validation, frictionless user onboarding, and sustainable unit economics.",
      highlights: [
        "End-to-end digital product design, development, and launch workflows",
        "Self-service onboarding and secure billing infrastructure",
        "Iterative analytics loops to enhance user retention and lifetime value"
      ],
      technologies: ["Product Strategy", "Full-Stack Architecture", "Monetization", "Cloud Infrastructure"]
    }
  ] as WorkItem[],

  contact: {
    headingLine1: "Have something in mind?",
    headingLine2: "Let's start a conversation.",
    email: "adityaagrawatofficial@gmail.com",
    interests: [
      "Digital Marketing",
      "Website",
      "Application",
      "Content & Social Media",
      "SEO & Blogging",
      "Digital Product",
      "Partnership",
      "Collaboration",
      "Business Idea",
      "Other"
    ]
  },

  finalCta: {
    line1: "Your idea could be the next thing we build.",
    line2: "Let's talk.",
    buttonLabel: "Start a Conversation →"
  }
};
