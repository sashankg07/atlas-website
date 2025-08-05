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
    "title": "AI Breaks New Ground in Predicting Alzheimer's",
    "description": "Artificial intelligence has achieved a major breakthrough in predicting Alzheimer's years before symptoms appear. This could revolutionize early detection and treatment strategies.",
    "url": "#",
    "source": "The New York Times",
    "date": "February 14, 2023",
    "category": "Research"
  },
  {
    "title": "AI-Driven Robots Join Warehouse Workforce",
    "description": "In a recent technological advancement, AI-powered robots are being used in warehouses to increase efficiency and productivity, shaping the future of the logistics industry.",
    "url": "#",
    "source": "BBC News",
    "date": "February 14, 2023",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Raises $100M in Series B Funding",
    "description": "AI start-up, Neuralink, has secured $100 million in its recent Series B funding round. The funds will be used to accelerate the development of advanced AI solutions.",
    "url": "#",
    "source": "Forbes",
    "date": "February 14, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Guidelines for AI Use in Healthcare Released",
    "description": "A set of ethical guidelines for the use of AI in healthcare has been released, aiming to ensure the responsible use of technology while maximizing its benefits.",
    "url": "#",
    "source": "The Guardian",
    "date": "February 14, 2023",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI Development Tools",
    "description": "Google has launched a set of new AI development tools aimed at making AI accessible to developers with varying expertise levels, democratizing the field.",
    "url": "#",
    "source": "TechCrunch",
    "date": "February 14, 2023",
    "category": "Tools"
  }
];
