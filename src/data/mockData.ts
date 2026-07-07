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
    "title": "AI Pioneers Launch Groundbreaking Computer Vision Algorithm",
    "description": "Researchers have developed a new algorithm that significantly improves computer vision capabilities. The algorithm, which mimics human visual perception, could revolutionize fields from autonomous vehicles to robotic surgery.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Next-Gen AI Chip",
    "description": "A leading technology company has unveiled its latest AI chip, promising unparalleled processing speed and efficiency. The chip is expected to accelerate AI advancements across industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100 Million in Series B Funding",
    "description": "An innovative AI startup has secured $100 million in funding, setting a new record for AI investments. The funds will be used to advance the company's cutting-edge machine learning technologies.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Proposed",
    "description": "A global consortium has proposed a new set of ethical guidelines for AI development and use. The guidelines emphasize fairness, transparency, and accountability in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A groundbreaking AI tool has been launched, transforming the way businesses analyze and interpret data. The tool uses advanced machine learning algorithms to provide actionable insights in real-time.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
