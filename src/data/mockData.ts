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
    "title": "Revolutionizing Medicine: AI Diagnoses Disease with Unprecedented Accuracy",
    "description": "A groundbreaking AI model has been developed with the capability to diagnose diseases with higher accuracy than ever before. This innovation could transform healthcare as we know it.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 08, 2021",
    "category": "Research"
  },
  {
    "title": "AI-powered Cybersecurity: The Future of Online Safety",
    "description": "Advancements in AI technology are paving the way for a new era in cybersecurity. With AI algorithms, threats can be detected and neutralized in real-time.",
    "url": "#",
    "source": "The Washington Post",
    "date": "October 08, 2021",
    "category": "Technology"
  },
  {
    "title": "Business Intelligence: How AI is Driving Smarter Decision Making",
    "description": "Companies worldwide are harnessing the power of AI to streamline their decision-making processes. AI-driven insights are leading to increased efficiency and profitability.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 08, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Innovation and Responsibility",
    "description": "As AI continues to evolve, the ethical implications of its applications are becoming more apparent. Experts call for clear policies and regulations to ensure responsible use of AI.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 08, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Promise to Reinvent Creative Industries",
    "description": "Emerging AI tools are breaking barriers in the creative sector, offering artists novel ways to express their creativity and opening up new possibilities for innovation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 08, 2021",
    "category": "Tools"
  }
];
