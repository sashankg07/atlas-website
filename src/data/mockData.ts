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
    "title": "AI Detects Rare Diseases With High Accuracy",
    "description": "Researchers have developed an AI model capable of diagnosing rare diseases with a high level of accuracy. The development is a significant breakthrough in medical AI technology.",
    "url": "#",
    "source": "Nature",
    "date": "September 06, 2023",
    "category": "Research"
  },
  {
    "title": "AI-Driven Robot Revolutionizes Warehouse Operations",
    "description": "A new AI-driven robot has been developed that can increase efficiency in warehouses. The robot uses AI to autonomously navigate and sort items, potentially transforming the logistics industry.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 06, 2023",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI Startups",
    "description": "A leading technology company has announced a multi-billion dollar investment in AI startups. This move underlines the growing importance of AI in the global business landscape.",
    "url": "#",
    "source": "Forbes",
    "date": "September 06, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise Over AI Surveillance",
    "description": "As AI surveillance technologies become more prevalent, ethical concerns are being raised about privacy and consent. Experts call for clear legislation to safeguard individuals' rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 06, 2023",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "Scientists have created a new AI tool that accurately predicts the impact of climate change. This tool could be instrumental in shaping future environmental policies.",
    "url": "#",
    "source": "National Geographic",
    "date": "September 06, 2023",
    "category": "Tools"
  }
];
