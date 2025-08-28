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
    "title": "Revolutionizing Healthcare with AI: A New Era Begins",
    "description": "Artificial Intelligence is poised to make significant strides in the healthcare sector. From diagnosis to treatment, AI's role is becoming increasingly crucial.",
    "url": "#",
    "source": "The AI Journal",
    "date": "November 14, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Breakthrough: Machine Learning Models Predicting Climate Change",
    "description": "Researchers have successfully developed machine learning models that can predict the impact of climate change with unprecedented accuracy.",
    "url": "#",
    "source": "The AI Times",
    "date": "November 14, 2021",
    "category": "Research"
  },
  {
    "title": "Ethical Dilemmas in AI: Navigating the Uncharted Territory",
    "description": "As AI continues to evolve, it brings up new ethical challenges. Experts are calling for more regulations to ensure ethical use of AI.",
    "url": "#",
    "source": "AI Ethics Weekly",
    "date": "November 14, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Retail: How Machine Learning is Powering Business Decisions",
    "description": "AI is transforming the retail industry by enabling businesses to make data-driven decisions, improving customer experience and increasing sales.",
    "url": "#",
    "source": "AI Business Insider",
    "date": "November 14, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tools for Developers: Simplifying Machine Learning",
    "description": "New AI tools are making it easier for developers to create and deploy machine learning models, democratizing access to AI technologies.",
    "url": "#",
    "source": "AI Developer's Guide",
    "date": "November 14, 2021",
    "category": "Tools"
  }
];
