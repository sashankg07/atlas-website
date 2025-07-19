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
    "title": "AI Breakthrough: Machine Learning Models Now Understand Contextual Nuances",
    "description": "In a major advancement for natural language processing, AI models are now capable of understanding complex contextual nuances. This could revolutionize tasks ranging from personal assistants to automated customer support.",
    "url": "#",
    "source": "The AI Journal",
    "date": "September 29, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Retail: The Future of Personalized Shopping",
    "description": "Major retailers are leveraging AI to personalize the shopping experience. By analyzing customer data, AI can predict preferences and make personalized product recommendations.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tool Can Predict Climate Change Impacts",
    "description": "Researchers have developed an AI tool that can accurately predict the impacts of climate change. This tool could help governments and organizations make more informed decisions about climate policy.",
    "url": "#",
    "source": "Nature",
    "date": "September 29, 2022",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Striking the Balance Between Innovation and Privacy",
    "description": "As AI continues to evolve, the conversation around ethical implications is growing. Striking a balance between innovation and privacy is crucial to building trust with consumers.",
    "url": "#",
    "source": "Wired",
    "date": "September 29, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Chip Market Sees Rapid Growth as Demand for AI Hardware Rises",
    "description": "The AI chip market is seeing massive growth as more companies invest in hardware to support their AI operations. This trend signifies the increasing integration of AI in various industries.",
    "url": "#",
    "source": "Forbes",
    "date": "September 29, 2022",
    "category": "Technology"
  }
];
