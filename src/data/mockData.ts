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
    "title": "AI Model Predicts Wildfire Paths with Unprecedented Accuracy",
    "description": "A newly developed AI model is now able to predict the paths of wildfires with unprecedented accuracy. This breakthrough could revolutionize how we handle such natural disasters in the future.",
    "url": "#",
    "source": "AI Today",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Advanced AI Chip for Edge Computing",
    "description": "A leading technology firm has announced the release of a new AI chip designed specifically for edge computing. This could significantly enhance processing power and efficiency in a variety of fields.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Retail: The Future of Personalized Shopping",
    "description": "AI is set to revolutionize the retail industry by offering highly personalized shopping experiences. Major retailers are already investing in AI-driven technologies to stay ahead.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Over AI's Role in Surveillance",
    "description": "Increasing use of AI in surveillance technologies is raising serious ethical questions about privacy and consent. Experts call for regulations to ensure responsible use.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Accelerates Drug Discovery",
    "description": "A new AI-powered tool is set to expedite the drug discovery process, potentially saving millions of dollars and countless hours in research.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
