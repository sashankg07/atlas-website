export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  source: string;
  date: string;
  category: string;
}

export const featuredArticles: NewsArticle[] = [
  {
    "title": "AI Revolutionizes Medical Diagnosis",
    "description": "Recent developments in AI technology have led to groundbreaking improvements in medical diagnosis. Researchers have created an AI model that can predict diseases with unprecedented accuracy.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 14, 2021",
    "category": "Research"
  },
  {
    "title": "AI Start-up Raises $100 Million in Series B Funding",
    "description": "Innovative AI startup, DeepThink, has secured $100 million in its latest funding round. This clearly indicates the growing investor interest in AI-based solutions.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 14, 2021",
    "category": "Business"
  },
  {
    "title": "Google's New AI Ethics Policies Sparks Debate",
    "description": "Google has recently released its updated AI ethics guidelines, sparking widespread debate in the tech community. Critics argue that the policies do not do enough to prevent misuse of AI.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 14, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-powered Tool Streamlines Supply Chain Management",
    "description": "A new AI-powered tool is transforming supply chain management by providing real-time tracking and predictive analytics. The tool aims to make supply chains more efficient and adaptable.",
    "url": "#",
    "source": "Bloomberg",
    "date": "November 14, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Breakthrough in Climate Change Modelling",
    "description": "Scientists have used AI to create more accurate models of climate change. The new models are capable of predicting localized impacts of climate change with greater precision than ever before.",
    "url": "#",
    "source": "Nature",
    "date": "November 14, 2021",
    "category": "Research"
  }
];
