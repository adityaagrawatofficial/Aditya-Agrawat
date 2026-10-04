export interface RouteSEO {
  title: string;
  description: string;
  canonical: string;
  schema: object;
}

const BASE_URL = 'https://aditya-agrawat.onrender.com';

const PERSON_ENTITY = {
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Aditya Agrawat',
  url: `${BASE_URL}/`,
  jobTitle: 'Digital Marketer, Entrepreneur & Digital Builder',
  description:
    'A digital marketer, entrepreneur and digital builder working across digital marketing, website development, applications, content, social media, SEO and digital products.',
  email: 'adityaagrawatofficial@gmail.com',
  nationality: {
    '@type': 'Country',
    name: 'India',
  },
  knowsAbout: [
    'Digital Marketing',
    'Website Development',
    'App Development',
    'SEO',
    'Content Strategy',
    'Social Media',
    'YouTube Promotion',
    'Digital Products',
    'Digital Strategy',
    'Online Business',
  ],
};

const WEBSITE_ENTITY = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: 'Aditya Agrawat',
  description:
    'Aditya Agrawat is an Indian digital marketer, entrepreneur and digital builder working across digital marketing, websites, applications, content, social media and digital products with a 48+ member team.',
  publisher: {
    '@id': `${BASE_URL}/#person`,
  },
};

export const SEO_ROUTES: Record<string, RouteSEO> = {
  '/': {
    title: 'Aditya Agrawat | Digital Marketer, Entrepreneur & Digital Builder',
    description:
      'Aditya Agrawat is an Indian digital marketer, entrepreneur and digital builder working across digital marketing, websites, applications, content, social media and digital products with a 48+ member team.',
    canonical: `${BASE_URL}/`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [PERSON_ENTITY, WEBSITE_ENTITY],
    },
  },
  '/about-aditya-agrawat': {
    title: 'Aditya Agrawat | About, Digital Marketing & Entrepreneurship',
    description:
      'Learn about Aditya Agrawat, a digital marketer, entrepreneur and digital builder working across digital marketing, websites, applications, SEO, content, social media and digital products.',
    canonical: `${BASE_URL}/about-aditya-agrawat`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        PERSON_ENTITY,
        {
          '@type': ['AboutPage', 'WebPage'],
          '@id': `${BASE_URL}/about-aditya-agrawat#webpage`,
          url: `${BASE_URL}/about-aditya-agrawat`,
          name: 'Aditya Agrawat | About, Digital Marketing & Entrepreneurship',
          description:
            'Learn about Aditya Agrawat, a digital marketer, entrepreneur and digital builder working across digital marketing, websites, applications, SEO, content, social media and digital products.',
          mainEntity: {
            '@id': `${BASE_URL}/#person`,
          },
          isPartOf: {
            '@id': `${BASE_URL}/#website`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/about-aditya-agrawat#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/about-aditya-agrawat#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'About Aditya Agrawat',
              item: `${BASE_URL}/about-aditya-agrawat`,
            },
          ],
        },
      ],
    },
  },
  '/services': {
    title: 'Digital Marketing & Digital Services | Aditya Agrawat',
    description:
      'Explore digital services by Aditya Agrawat across digital marketing, website development, application engineering, SEO, video distribution, and digital products.',
    canonical: `${BASE_URL}/services`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['CollectionPage', 'WebPage'],
          '@id': `${BASE_URL}/services#webpage`,
          url: `${BASE_URL}/services`,
          name: 'Digital Marketing & Digital Services | Aditya Agrawat',
          description:
            'Explore digital services by Aditya Agrawat across digital marketing, website development, application engineering, SEO, video distribution, and digital products.',
          publisher: {
            '@id': `${BASE_URL}/#person`,
          },
          isPartOf: {
            '@id': `${BASE_URL}/#website`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/services#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/services#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${BASE_URL}/services`,
            },
          ],
        },
      ],
    },
  },
  '/projects': {
    title: 'Projects & Digital Work | Aditya Agrawat',
    description:
      'Discover digital projects and execution domains directed by Aditya Agrawat across websites, applications, performance marketing funnels, and digital tools.',
    canonical: `${BASE_URL}/projects`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['CollectionPage', 'WebPage'],
          '@id': `${BASE_URL}/projects#webpage`,
          url: `${BASE_URL}/projects`,
          name: 'Projects & Digital Work | Aditya Agrawat',
          description:
            'Discover digital projects and execution domains directed by Aditya Agrawat across websites, applications, performance marketing funnels, and digital tools.',
          publisher: {
            '@id': `${BASE_URL}/#person`,
          },
          isPartOf: {
            '@id': `${BASE_URL}/#website`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/projects#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/projects#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Projects',
              item: `${BASE_URL}/projects`,
            },
          ],
        },
      ],
    },
  },
  '/contact': {
    title: 'Contact Aditya Agrawat | Digital Marketing & Business Enquiries',
    description:
      'Get in touch with Aditya Agrawat for digital marketing campaigns, website development, applications, SEO, content, and digital business collaborations.',
    canonical: `${BASE_URL}/contact`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['ContactPage', 'WebPage'],
          '@id': `${BASE_URL}/contact#webpage`,
          url: `${BASE_URL}/contact`,
          name: 'Contact Aditya Agrawat | Digital Marketing & Business Enquiries',
          description:
            'Get in touch with Aditya Agrawat for digital marketing campaigns, website development, applications, SEO, content, and digital business collaborations.',
          publisher: {
            '@id': `${BASE_URL}/#person`,
          },
          isPartOf: {
            '@id': `${BASE_URL}/#website`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/contact#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/contact#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contact',
              item: `${BASE_URL}/contact`,
            },
          ],
        },
      ],
    },
  },
  '/faq': {
    title: 'Aditya Agrawat FAQ | Digital Marketing, Websites & Digital Projects',
    description:
      'Frequently asked questions about Aditya Agrawat, his work across digital marketing, websites, apps, SEO, digital products, and his 48+ member team.',
    canonical: `${BASE_URL}/faq`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/faq#webpage`,
          url: `${BASE_URL}/faq`,
          name: 'Aditya Agrawat FAQ | Digital Marketing, Websites & Digital Projects',
          description:
            'Frequently asked questions about Aditya Agrawat, his work across digital marketing, websites, apps, SEO, digital products, and his 48+ member team.',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Who is Aditya Agrawat?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Aditya Agrawat is an Indian digital marketer, entrepreneur and digital builder who operates at the intersection of digital marketing, technology, content and online businesses with a 48+ member team.',
              },
            },
            {
              '@type': 'Question',
              name: 'What does Aditya Agrawat do?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Aditya Agrawat directs digital initiatives combining digital marketing campaigns, bespoke website development, application engineering, SEO content strategy, video media distribution, and commercial digital products.',
              },
            },
            {
              '@type': 'Question',
              name: 'What digital services does Aditya Agrawat offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Aditya offers six primary digital services: Digital Marketing, Website Development, App Development, SEO & Content, Social Media & YouTube Promotion, and Digital Products.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does Aditya Agrawat work on websites and applications?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Aditya directs the engineering of modern websites and applications built with contemporary full-stack technologies like TypeScript, React, and modular cloud architectures.',
              },
            },
            {
              '@type': 'Question',
              name: 'How can I contact Aditya Agrawat?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can contact Aditya Agrawat directly via email at adityaagrawatofficial@gmail.com or through the online inquiry form at https://aditya-agrawat.onrender.com/contact.',
              },
            },
          ],
          breadcrumb: {
            '@id': `${BASE_URL}/faq#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/faq#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'FAQ',
              item: `${BASE_URL}/faq`,
            },
          ],
        },
      ],
    },
  },
  '/digital-marketing': {
    title: 'Digital Marketing Services | Aditya Agrawat',
    description:
      'Performance marketing, paid search acquisition, conversion funnels, and analytics tracking directed by Aditya Agrawat and his 48+ member team.',
    canonical: `${BASE_URL}/digital-marketing`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/digital-marketing#webpage`,
          url: `${BASE_URL}/digital-marketing`,
          name: 'Digital Marketing Services | Aditya Agrawat',
          description:
            'Performance marketing, paid search acquisition, conversion funnels, and analytics tracking directed by Aditya Agrawat and his 48+ member team.',
          publisher: {
            '@id': `${BASE_URL}/#person`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/digital-marketing#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/digital-marketing#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${BASE_URL}/services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Digital Marketing',
              item: `${BASE_URL}/digital-marketing`,
            },
          ],
        },
      ],
    },
  },
  '/website-development': {
    title: 'Website Development Services | Aditya Agrawat',
    description:
      'High-performance, bespoke websites, responsive portals, and modern web architecture engineered by Aditya Agrawat.',
    canonical: `${BASE_URL}/website-development`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/website-development#webpage`,
          url: `${BASE_URL}/website-development`,
          name: 'Website Development Services | Aditya Agrawat',
          description:
            'High-performance, bespoke websites, responsive portals, and modern web architecture engineered by Aditya Agrawat.',
          publisher: {
            '@id': `${BASE_URL}/#person`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/website-development#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/website-development#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${BASE_URL}/services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Website Development',
              item: `${BASE_URL}/website-development`,
            },
          ],
        },
      ],
    },
  },
  '/app-development': {
    title: 'App Development Services | Aditya Agrawat',
    description:
      'Architecture and full-stack development of practical web and mobile applications engineered to resolve concrete business needs by Aditya Agrawat.',
    canonical: `${BASE_URL}/app-development`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/app-development#webpage`,
          url: `${BASE_URL}/app-development`,
          name: 'App Development Services | Aditya Agrawat',
          description:
            'Architecture and full-stack development of practical web and mobile applications engineered to resolve concrete business needs by Aditya Agrawat.',
          publisher: {
            '@id': `${BASE_URL}/#person`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/app-development#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/app-development#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${BASE_URL}/services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'App Development',
              item: `${BASE_URL}/app-development`,
            },
          ],
        },
      ],
    },
  },
  '/seo-content': {
    title: 'SEO & Content Strategy Services | Aditya Agrawat',
    description:
      'Topical search authority, Schema.org structured data, and high-retention editorial publishing strategies directed by Aditya Agrawat.',
    canonical: `${BASE_URL}/seo-content`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/seo-content#webpage`,
          url: `${BASE_URL}/seo-content`,
          name: 'SEO & Content Strategy Services | Aditya Agrawat',
          description:
            'Topical search authority, Schema.org structured data, and high-retention editorial publishing strategies directed by Aditya Agrawat.',
          publisher: {
            '@id': `${BASE_URL}/#person`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/seo-content#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/seo-content#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${BASE_URL}/services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'SEO & Content',
              item: `${BASE_URL}/seo-content`,
            },
          ],
        },
      ],
    },
  },
  '/social-media-promotion': {
    title: 'Social Media & YouTube Promotion Services | Aditya Agrawat',
    description:
      'Video packaging, long-form YouTube programming, and cross-channel organic distribution systems directed by Aditya Agrawat.',
    canonical: `${BASE_URL}/social-media-promotion`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/social-media-promotion#webpage`,
          url: `${BASE_URL}/social-media-promotion`,
          name: 'Social Media & YouTube Promotion Services | Aditya Agrawat',
          description:
            'Video packaging, long-form YouTube programming, and cross-channel organic distribution systems directed by Aditya Agrawat.',
          publisher: {
            '@id': `${BASE_URL}/#person`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/social-media-promotion#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/social-media-promotion#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${BASE_URL}/services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Social Media & YouTube',
              item: `${BASE_URL}/social-media-promotion`,
            },
          ],
        },
      ],
    },
  },
  '/digital-products': {
    title: 'Digital Products & Venture Incubation | Aditya Agrawat',
    description:
      'Ideation, rapid MVP prototyping, and monetization strategies for digital products and online platforms by Aditya Agrawat.',
    canonical: `${BASE_URL}/digital-products`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/digital-products#webpage`,
          url: `${BASE_URL}/digital-products`,
          name: 'Digital Products & Venture Incubation | Aditya Agrawat',
          description:
            'Ideation, rapid MVP prototyping, and monetization strategies for digital products and online platforms by Aditya Agrawat.',
          publisher: {
            '@id': `${BASE_URL}/#person`,
          },
          breadcrumb: {
            '@id': `${BASE_URL}/digital-products#breadcrumb`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/digital-products#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${BASE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${BASE_URL}/services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Digital Products',
              item: `${BASE_URL}/digital-products`,
            },
          ],
        },
      ],
    },
  },
};
