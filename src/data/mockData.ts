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
    "title": "Revolutionary AI Predicts Climate Change Effects",
    "description": "A new AI model by scientists at the University of Cambridge can precisely predict the impact of climate change. The model uses AI algorithms to analyze a vast array of data and predict future climate patterns.",
    "url": "#",
    "source": "Nature",
    "date": "October 27, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots Transforming the Manufacturing Industry",
    "description": "AI technology is leading a revolution in the manufacturing sector, with AI-powered robots enhancing efficiency and productivity. These advancements promise to redefine industry standards.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 27, 2021",
    "category": "Technology"
  },
  {
    "title": "Google Invests in AI-Based Healthcare Startups",
    "description": "Google is supporting AI-based healthcare startups to transform patient care. The tech giant's move signals a growing interest in AI's potential within the healthcare industry.",
    "url": "#",
    "source": "Forbes",
    "date": "October 27, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Arise from AI Surveillance Tools",
    "description": "The increasing use of AI surveillance tools has sparked a debate over privacy and ethical implications. Advocates urge for regulatory measures to prevent potential misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 27, 2021",
    "category": "Ethics"
  },
  {
    "title": "NVIDIA Unveils New AI Tools for Game Developers",
    "description": "NVIDIA has introduced new AI tools for game developers, promising to enhance gaming experiences. The new tools utilize deep learning to deliver realistic graphics and immersive environments.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 27, 2021",
    "category": "Tools"
  }
];
