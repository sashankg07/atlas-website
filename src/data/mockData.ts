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
    "title": "AI Defeats Human Champion in Strategic Game",
    "description": "In a remarkable display of artificial intelligence prowess, a new AI system has defeated a world champion in a complex strategy game. This breakthrough showcases the rapid advancements in machine learning and game theory.",
    "url": "#",
    "source": "The AI Times",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "Revolutionizing Healthcare with AI: A New Paradigm",
    "description": "Researchers have developed an AI algorithm that accurately predicts patient health risks, opening up a new frontier in personalized medicine. The tool will help doctors make better-informed decisions regarding treatment plans.",
    "url": "#",
    "source": "Healthcare Tech News",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI Startup Raises $100m in Series B Funding",
    "description": "A promising AI startup, specializing in autonomous vehicle technology, has successfully raised $100 million in its latest funding round. This investment underscores the growing interest in AI applications within the automotive industry.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Framework for AI Ethics Announced",
    "description": "A leading tech firm has announced a new framework for AI ethics, emphasizing transparency, fairness, and accountability. This sets a new standard for ethical considerations in AI development and use.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Transforming the Landscape of Graphic Design",
    "description": "New AI-based graphic design tools are making it easier for designers to create stunning visuals. These tools leverage machine learning algorithms to automate and enhance the design process.",
    "url": "#",
    "source": "Design Magazine",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
