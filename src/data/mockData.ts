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
    "title": "Revolutionizing Medicine with AI: New Breakthrough in Drug Discovery",
    "description": "Scientists have made a significant breakthrough in drug discovery using AI. The new development is poised to revolutionize medical research and treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 08, 2022",
    "category": "Research"
  },
  {
    "title": "AI Tools Streamline Business Operations Amid Pandemic",
    "description": "In the wake of COVID-19, businesses are turning to AI tools for streamlined operations. The move is seen as a necessary adjustment to the new normal.",
    "url": "#",
    "source": "Forbes",
    "date": "October 08, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released: Balancing Innovation and Privacy",
    "description": "The release of new AI ethics guidelines aims to balance technological advancement and privacy concerns. Experts believe this move is a step in the right direction.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 08, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Next-Gen AI Models Transforming Weather Forecasting",
    "description": "The use of advanced AI models in weather forecasting is leading to more accurate predictions. This could have wide-ranging implications for disaster response and climate studies.",
    "url": "#",
    "source": "BBC News",
    "date": "October 08, 2022",
    "category": "Technology"
  },
  {
    "title": "Unveiling AI-Powered Tools for Enhanced Cybersecurity",
    "description": "The launch of new AI-powered cybersecurity tools promises to bolster defense against cyber threats. This marks a significant step forward in the fight against cybercrime.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 08, 2022",
    "category": "Tools"
  }
];
