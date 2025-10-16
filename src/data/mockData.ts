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
    "title": "AI Breaks New Ground in Disease Prediction",
    "description": "Researchers have developed an AI capable of predicting the likelihood of diseases. This breakthrough could revolutionize the healthcare industry by allowing for more personalized and timely treatments.",
    "url": "#",
    "source": "The AI Times",
    "date": "April 10, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Tool Automates Code Review",
    "description": "A new AI-powered tool is set to change the game in software development. It automates the code review process, thereby improving productivity and reducing errors.",
    "url": "#",
    "source": "Tech Insider",
    "date": "April 10, 2022",
    "category": "Tools"
  },
  {
    "title": "Major Tech Company Invests Billions in AI",
    "description": "A leading tech company has announced a multi-billion dollar investment in AI research and development. This move signifies the growing importance and potential of AI in the technology industry.",
    "url": "#",
    "source": "Business Weekly",
    "date": "April 10, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Dilemmas in AI: A Closer Look",
    "description": "As AI continues to advance, it brings with it a host of ethical dilemmas. Experts are calling for a comprehensive approach to addressing these concerns.",
    "url": "#",
    "source": "The AI Observer",
    "date": "April 10, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Revolutionizes Self-Driving Car Technology",
    "description": "Recent advancements in AI technology are paving the way for a new era of self-driving cars. These improvements promise safer, more efficient, and more comfortable rides.",
    "url": "#",
    "source": "AutoTech News",
    "date": "April 10, 2022",
    "category": "Technology"
  }
];
