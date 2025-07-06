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
    "title": "Revolutionizing Healthcare: AI Identifies Cancerous Cells More Accurately",
    "description": "A groundbreaking AI model has been developed that can identify cancerous cells with unprecedented accuracy. This could potentially revolutionize cancer diagnosis and improve patient outcomes.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 07, 2021",
    "category": "Research"
  },
  {
    "title": "AI Tech Startup Raises $50M in Series B Funding",
    "description": "AI-focused startup, IntelliAI, has secured $50M in Series B funding. The funds will be used to enhance their AI capabilities and expand their global footprint.",
    "url": "#",
    "source": "Business Insider",
    "date": "December 07, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Streamlines Content Creation Process",
    "description": "ContentGen, a new AI tool, promises to simplify the content creation process by automatically generating high-quality written content. This could be a game-changer for marketers and writers alike.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 07, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Striking a Balance Between Innovation and Regulation",
    "description": "As AI continues to evolve, ethical considerations and regulatory frameworks are becoming increasingly critical. Experts call for a balance between innovation and regulation to ensure responsible AI deployment.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 07, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Breakthrough: Computers Now Understand Sarcasm",
    "description": "In a significant breakthrough, researchers have developed an AI model that can understand sarcasm in text. This could have far-reaching implications for sentiment analysis and natural language processing.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 07, 2021",
    "category": "Technology"
  }
];
