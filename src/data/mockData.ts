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
    "title": "AI-Driven Drug Discovery Sees Unprecedented Breakthrough",
    "description": "AI technology has successfully created a new drug compound ready for human trials. This is a significant milestone in the field of AI-driven drug discovery.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 10, 2021",
    "category": "Research"
  },
  {
    "title": "Google's New AI Tool Predicts Weather with Unmatched Accuracy",
    "description": "Google’s AI division, DeepMind, has developed an AI model that can predict weather patterns with unprecedented precision, potentially revolutionising meteorology.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 10, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100 Million in Series C Funding",
    "description": "AI start-up, DeepVision, has secured $100 million in its latest funding round, reflecting growing investor interest in AI technology and its potential.",
    "url": "#",
    "source": "Forbes",
    "date": "October 10, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Growing Concern",
    "description": "As AI technology advances, so do the ethical considerations. Experts are calling for stricter regulations to prevent misuse and bias in AI systems.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 10, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Helps Developers Build More Efficient Machine Learning Models",
    "description": "A new AI tool, known as OptiML, is helping developers optimize machine learning algorithms, resulting in more efficient and powerful AI systems.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 10, 2021",
    "category": "Tools"
  }
];
