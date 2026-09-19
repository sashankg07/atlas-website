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
    "title": "AI Revolutionizes Cancer Detection",
    "description": "A ground-breaking development in AI technology has made early detection of cancer more accurate and efficient. This innovative tool will significantly aid in the battle against this pervasive disease.",
    "url": "#",
    "source": "The New Yorker",
    "date": "March 14, 2023",
    "category": "Research"
  },
  {
    "title": "Google's New AI Assistant Surpasses Human Intelligence",
    "description": "Google's cutting-edge AI assistant now boasts cognitive abilities that surpass human intelligence. This development is a leap forward in the quest for superior AI-driven services.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 14, 2023",
    "category": "Technology"
  },
  {
    "title": "AI's Impact on the Global Economy",
    "description": "A recent study reveals that AI technology has substantially contributed to the global economy. Future projections indicate a steep rise in AI's economic influence.",
    "url": "#",
    "source": "The Economist",
    "date": "March 14, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Questions Surrounding AI Surveillance",
    "description": "The increased use of AI-powered surveillance systems is raising serious ethical questions. Advocates call for stricter regulation to ensure privacy rights are protected.",
    "url": "#",
    "source": "BBC News",
    "date": "March 14, 2023",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Simplifies Complex Data Analysis",
    "description": "A new AI tool promises to simplify complex data analysis, enabling businesses to make more informed decisions. The tool offers user-friendly interfaces and high precision results.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 14, 2023",
    "category": "Tools"
  }
];
