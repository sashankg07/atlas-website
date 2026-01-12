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
    "title": "AI Breaks New Ground in Disease Diagnosis",
    "description": "Recent breakthroughs in AI technology have led to unprecedented accuracy in diagnosing a range of diseases. The technology is expected to be a game-changer in the healthcare industry.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 04, 2021",
    "category": "Research"
  },
  {
    "title": "Revolutionizing Business with AI: The New Normal",
    "description": "AI is being adopted at an ever-increasing rate in the business sector, leading to significant changes in how companies operate and strategize.",
    "url": "#",
    "source": "Forbes",
    "date": "November 04, 2021",
    "category": "Business"
  },
  {
    "title": "Evolving AI Ethics: Key Considerations for Future Development",
    "description": "As AI technology becomes more integrated into our daily lives, critical questions about ethics and fairness in AI usage have come to the forefront.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 04, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tools Transforming the Landscape of Data Analysis",
    "description": "New AI software is making it easier than ever to analyze and interpret large data sets, unlocking new potential for research and development across various fields.",
    "url": "#",
    "source": "Wired",
    "date": "November 04, 2021",
    "category": "Tools"
  },
  {
    "title": "Next-Gen AI: The New Frontier in Tech Innovation",
    "description": "The world of tech is abuzz with the latest advancements in AI, from machine learning to neural networks, promising a future of exciting innovation and progress.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 04, 2021",
    "category": "Technology"
  }
];
