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
    "title": "New AI breakthrough in cancer detection",
    "description": "Researchers have developed an AI system that can accurately detect cancer cells in real time, potentially revolutionizing healthcare. The system, developed by a leading tech company, uses machine learning algorithms to identify and classify cancer cells with unprecedented accuracy.",
    "url": "#",
    "source": "New York Times",
    "date": "October 14, 2022",
    "category": "Research"
  },
  {
    "title": "AI-driven tech startup raises $200M in Series B",
    "description": "AI-driven tech startup, DeepTech, has raised $200 million in Series B funding. The startup aims to use the funding to accelerate the development and deployment of its groundbreaking AI technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 14, 2022",
    "category": "Business"
  },
  {
    "title": "AI and Ethics: The ongoing debate",
    "description": "As AI technology continues to evolve, so does the debate around its ethical implications. Experts are calling for clear regulations and guidelines to ensure that AI is developed and used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 14, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI tool promises to simplify data analysis",
    "description": "Tech giant, DataGen, has launched a new AI tool aimed at simplifying the process of data analysis. The tool uses machine learning algorithms to analyze and interpret complex data sets, saving businesses valuable time and resources.",
    "url": "#",
    "source": "Forbes",
    "date": "October 14, 2022",
    "category": "Tools"
  },
  {
    "title": "The future of AI in autonomous vehicles",
    "description": "As the race for autonomous driving heats up, AI is playing a crucial role. Recent advancements in AI technology are paving the way for safer and more efficient autonomous vehicles.",
    "url": "#",
    "source": "Wired",
    "date": "October 14, 2022",
    "category": "Technology"
  }
];
