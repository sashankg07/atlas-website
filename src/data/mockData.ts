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
    "title": "AI Breaks Ground in Early Cancer Detection",
    "description": "Researchers have developed a new AI tool that accurately identifies early-stage cancers with remarkable precision. The breakthrough could revolutionize cancer diagnosis and treatment.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 12, 2022",
    "category": "Research"
  },
  {
    "title": "Groundbreaking AI Technology Improves Climate Change Predictions",
    "description": "Combining AI and climate science, researchers have developed a sophisticated model that predicts the impact of climate change more accurately than ever before.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 12, 2022",
    "category": "Technology"
  },
  {
    "title": "Major Tech Firm Acquires AI Startup",
    "description": "In a recent business move, a leading tech company has acquired an AI startup specializing in machine learning. The acquisition aims to bolster the tech giant's AI capabilities.",
    "url": "#",
    "source": "Forbes",
    "date": "October 12, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Debate Over AI Ethics Intensifies",
    "description": "As AI continues to permeate our lives, the conversation around its ethical implications grows. Experts call for comprehensive regulations to ensure AI is used responsibly.",
    "url": "#",
    "source": "BBC News",
    "date": "October 12, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Enables Real-time Language Translation",
    "description": "A new AI tool offers instant, accurate language translation, breaking down language barriers and fostering effective international communication.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 12, 2022",
    "category": "Tools"
  }
];
