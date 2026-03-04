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
    "title": "AI Breaks New Ground in Earthquake Prediction",
    "description": "Artificial Intelligence has made significant strides in predicting seismic activities, potentially saving lives and resources. The technology can identify patterns humans can't, making the prediction more accurate.",
    "url": "#",
    "source": "Nature",
    "date": "December 05, 2021",
    "category": "Research"
  },
  {
    "title": "AI Gets Creative with Artistic Endeavors",
    "description": "AI is stepping into the creative world with algorithms generating impactful visual arts. This could revolutionize how we understand and create art.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 05, 2021",
    "category": "Technology"
  },
  {
    "title": "Ethics in AI: A Growing Concern",
    "description": "As AI continues to permeate every part of our lives, ethical considerations are becoming increasingly important. Experts call for clear policies to ensure responsible use of AI.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 05, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-powered Cybersecurity: The Future of Online Safety",
    "description": "In the face of evolving digital threats, AI-based cybersecurity solutions are proving to be a game changer. The technology enables proactive threat detection and prevention.",
    "url": "#",
    "source": "Wired",
    "date": "December 05, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startups: New Investment Frontier",
    "description": "Investment in AI startups has surged in recent years, reflecting growing business interest in AI applications. This trend is set to continue, given AI's transformative potential across industries.",
    "url": "#",
    "source": "Financial Times",
    "date": "December 05, 2021",
    "category": "Business"
  }
];
