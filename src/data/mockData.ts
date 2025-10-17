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
    "title": "AI Breakthrough: New Algorithm Redefines Machine Learning Limits",
    "description": "Researchers have developed a groundbreaking algorithm that pushes the boundaries of machine learning. The technology is set to revolutionize various industries, including healthcare and finance.",
    "url": "#",
    "source": "The AI Journal",
    "date": "October 10, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Titan Google Announces Massive AI Infrastructure Upgrade",
    "description": "Google has announced a major overhaul of its AI infrastructure. The upgrade will significantly enhance the company's machine learning capabilities, fostering innovation across multiple sectors.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 10, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM Acquires AI Startup to Boost Cloud Computing Offerings",
    "description": "IBM has acquired an AI startup specializing in cloud-based machine learning. The move is set to bolster IBM's position in the cloud computing market.",
    "url": "#",
    "source": "Forbes",
    "date": "October 10, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: New Guidelines for Fairness and Transparency",
    "description": "An international committee has released a comprehensive set of guidelines aimed at ensuring fairness and transparency in AI. The guidelines will help developers create responsible and ethical AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 10, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Effects with Unprecedented Accuracy",
    "description": "A new AI tool is enabling scientists to predict the effects of climate change with unparalleled precision. This breakthrough could be instrumental in shaping global climate policies.",
    "url": "#",
    "source": "Nature",
    "date": "October 10, 2022",
    "category": "Tools"
  }
];
