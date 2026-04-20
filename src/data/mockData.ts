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
    "title": "AI Decodes Ancient Language Lost to History",
    "description": "Researchers have used artificial intelligence to decipher a long-forgotten language, opening up new possibilities for historical linguistics. The AI model could be adapted to interpret other lost languages as well.",
    "url": "#",
    "source": "The AI Times",
    "date": "April 18, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: Predicting Patient Deterioration",
    "description": "A new AI model has been developed that can predict patient deterioration in hospitals with remarkable accuracy. This tool could revolutionize patient care and save countless lives.",
    "url": "#",
    "source": "Healthcare AI News",
    "date": "April 18, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Acquires Promising AI Startup",
    "description": "A global tech leader has acquired an AI startup specializing in machine learning solutions. The move is expected to bolster the tech giant's AI capabilities and offerings.",
    "url": "#",
    "source": "Business Tech Insider",
    "date": "April 18, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Development Proposed",
    "description": "A leading AI ethics committee has proposed a set of new guidelines for AI development, aiming to address concerns about bias and transparency. The guidelines stress the importance of creating AI systems that are fair, accountable, and trustworthy.",
    "url": "#",
    "source": "AI Ethics Journal",
    "date": "April 18, 2022",
    "category": "Ethics"
  },
  {
    "title": "Next-Gen AI Tools for Data Analysis Launched",
    "description": "A software company has launched a set of advanced AI tools for data analysis. These tools leverage machine learning to provide deeper insights and more accurate predictions.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "April 18, 2022",
    "category": "Tools"
  }
];
