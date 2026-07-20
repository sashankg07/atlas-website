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
    "title": "AI Revolutionizes Medical Diagnostics",
    "description": "New AI technology has been developed to drastically improve the accuracy and speed of medical diagnostics. This breakthrough could save countless lives by enabling earlier detection of diseases.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 11, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Driven Solutions Transforming the Retail Industry",
    "description": "AI is now being leveraged by retailers to offer personalized experiences to customers. This trend is set to redefine the future of shopping.",
    "url": "#",
    "source": "Forbes",
    "date": "October 11, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Balancing Innovation with Responsibility",
    "description": "As AI becomes increasingly prevalent, experts call for clear ethical guidelines to ensure it is used responsibly. The debate on AI ethics continues to gain momentum.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 11, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Simplifies Data Analysis",
    "description": "A groundbreaking AI tool has been developed that simplifies complex data analysis, making it accessible to more businesses. This development could democratize AI and data science.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 11, 2022",
    "category": "Tools"
  },
  {
    "title": "AI and the Future of Autonomous Vehicles",
    "description": "AI advancements are driving the development of autonomous vehicles, bringing us closer to a future where self-driving cars are the norm.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 11, 2022",
    "category": "Technology"
  }
];
