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
    "title": "AI Breaks New Ground in Drug Discovery",
    "description": "Artificial Intelligence is revolutionizing drug discovery by predicting the success of novel drugs. This could significantly shorten the time to market for new life-saving treatments.",
    "url": "#",
    "source": "New York Times",
    "date": "November 27, 2021",
    "category": "Research"
  },
  {
    "title": "AI-powered Drones Change the Game in Environmental Conservation",
    "description": "A new breed of AI-enabled drones provides an unprecedented level of accuracy in environmental monitoring, opening up new possibilities for conservation efforts.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 27, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startups Continue to Attract Record Investment in 2021",
    "description": "Despite global economic uncertainties, AI startups continue to attract record levels of investment, highlighting the growing importance of AI in the business world.",
    "url": "#",
    "source": "Forbes",
    "date": "November 27, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Guidelines for AI: A Growing Concern",
    "description": "As AI continues to evolve and permeate our lives, the need for ethical guidelines becomes increasingly apparent. Governments and organizations are now working to address this pressing issue.",
    "url": "#",
    "source": "The Washington Post",
    "date": "November 27, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Transforming the World of Design",
    "description": "AI tools are bringing about a paradigm shift in the design industry, enabling designers to automate tedious tasks and focus more on creativity.",
    "url": "#",
    "source": "The Verge",
    "date": "November 27, 2021",
    "category": "Tools"
  }
];
