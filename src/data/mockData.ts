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
    "title": "AI Redefines Space Exploration: NASA's Latest AI Project",
    "description": "NASA has unveiled a new AI project aiming to advance space exploration. The AI system will help in analyzing vast amounts of data from the cosmos, speeding up discoveries.",
    "url": "#",
    "source": "The Space Review",
    "date": "November 22, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes Healthcare: Predicting Heart Attacks with Machine Learning",
    "description": "A groundbreaking research project has utilized AI to accurately predict heart attacks, potentially saving countless lives. The study shows the power of machine learning in healthcare.",
    "url": "#",
    "source": "Medical News Today",
    "date": "November 22, 2021",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup to Boost Cloud Computing Power",
    "description": "Microsoft has acquired a leading AI startup to enhance its cloud computing capabilities. This move is part of a larger trend of tech giants investing heavily in AI.",
    "url": "#",
    "source": "Bloomberg",
    "date": "November 22, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Framework for AI: Balancing Innovation and Privacy",
    "description": "A new ethical framework for AI has been proposed to balance the need for innovation and privacy. It aims to guide AI development in a way that respects individual rights and freedoms.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 22, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI Tools for Developers",
    "description": "Google has launched a suite of new AI tools for developers. These tools aim to make AI development more accessible and efficient, encouraging more innovation in the field.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 22, 2021",
    "category": "Tools"
  }
];
