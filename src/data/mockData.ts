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
    "title": "AI Breakthrough: DeepMind's AI Models Weather Patterns",
    "description": "Google's DeepMind has developed a new AI that can accurately predict weather patterns, a monumental step in tackling climate change. The AI model can forecast potential weather disasters with impressive accuracy.",
    "url": "#",
    "source": "BBC News",
    "date": "November 02, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: European Union Proposes Stricter Regulations on AI Use",
    "description": "The European Union has proposed new regulations aimed at governing the use of AI in the region. A focus has been placed on high-risk applications, with violations potentially leading to hefty penalties.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 02, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI in Business: Amazon Unveils New AI Tools for AWS",
    "description": "Amazon has unveiled new AI tools for its cloud service, AWS. These tools aim to simplify AI accessibility for businesses, aiding in tasks ranging from data analysis to customer service.",
    "url": "#",
    "source": "Bloomberg",
    "date": "November 02, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Technology: NVIDIA's AI Creates Realistic Virtual Worlds",
    "description": "NVIDIA has unveiled an AI that can generate highly realistic virtual worlds. This technology could revolutionize the gaming industry and potentially offer new tools for architects and planners.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 02, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Research: Stanford Scientists Develop AI to Detect Heart Disease",
    "description": "Scientists at Stanford University have developed an AI system that can diagnose heart disease with high accuracy. This AI could revolutionize healthcare and save countless lives.",
    "url": "#",
    "source": "Stanford News",
    "date": "November 02, 2021",
    "category": "Research"
  }
];
