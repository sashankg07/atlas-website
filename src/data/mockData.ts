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
    "title": "AI Breakthrough: Controlling Quantum Computers Through AI",
    "description": "In a revolutionary development, researchers have successfully used AI to control quantum computers. The breakthrough will open up new possibilities in quantum computing.",
    "url": "#",
    "source": "Scientific American",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: Predicting Patient Outcomes",
    "description": "Scientists have developed an AI model that can accurately predict patient outcomes. The new tool could revolutionize patient care and personalize medicine.",
    "url": "#",
    "source": "HealthTech Magazine",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startups on the Rise: Record Investments in 2021",
    "description": "Investors are pumping more money into AI startups than ever before. The trend underscores the growing importance of AI in our economy.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: Balancing Innovation and Fairness",
    "description": "As AI becomes more prevalent, the conversation around ethical AI is more crucial than ever. Experts call for guidelines to ensure fairness in AI applications.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: Democratizing AI with Open Source Software",
    "description": "Open source AI tools are making AI accessible to more people. The trend could foster innovation and drive the AI industry forward.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
