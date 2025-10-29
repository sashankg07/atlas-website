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
    "title": "Groundbreaking AI Predicts Alzheimer's Years in Advance",
    "description": "A novel AI system has been developed capable of predicting Alzheimer's disease several years before diagnosis. The breakthrough could revolutionize early detection and treatment approaches.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 29, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizing the World of E-commerce",
    "description": "E-commerce is experiencing a transformation as artificial intelligence applications streamline operations and enhance customer experience. Experts predict AI will redefine online shopping in the coming years.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 29, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Navigating the Grey Areas",
    "description": "As AI continues to permeate every aspect of life, ethical considerations are becoming increasingly important. New guidelines and regulations are being established to ensure responsible AI usage.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 29, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-Driven Facial Recognition: A Game-Changer for Security",
    "description": "A new wave of AI-powered facial recognition technology is enhancing security measures worldwide. However, privacy concerns are also rising alongside the technological advancements.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 29, 2021",
    "category": "Technology"
  },
  {
    "title": "OpenAI’s New Tool: AI for Code Generation",
    "description": "OpenAI has introduced a revolutionary tool that uses AI for code generation, promising to accelerate software development and potentially reshaping the industry.",
    "url": "#",
    "source": "Wired",
    "date": "October 29, 2021",
    "category": "Tools"
  }
];
