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
    "title": "Revolutionizing Healthcare: AI to Provide Remote Diagnosis",
    "description": "Researchers have developed a new AI system capable of diagnosing health conditions remotely. The breakthrough could revolutionize healthcare, particularly in remote and underserved areas.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 07, 2022",
    "category": "Research"
  },
  {
    "title": "AI and Ethics: Navigating the Challenges of AI in Law Enforcement",
    "description": "As AI becomes increasingly utilized in law enforcement, ethical debates are heating up. Key concerns include privacy, accuracy, and the potential for bias.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 07, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI-Powered Robot Farmers: The Future of Agriculture",
    "description": "A start-up has launched an AI-powered farming robot, promising to increase yields and reduce environmental impact. The move signals a significant shift towards tech-driven agriculture.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 07, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Transforms Text to Lifelike Speech",
    "description": "A new AI tool has been developed that can convert text to speech with unprecedented accuracy, offering significant potential for applications such as audiobooks and virtual assistants.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 07, 2022",
    "category": "Tools"
  },
  {
    "title": "AI Startup Raises $100M to Bring Machine Learning to Businesses",
    "description": "A promising AI startup has raised $100 million in Series B funding. The company aims to democratize machine learning, making it accessible and useful for businesses of all sizes.",
    "url": "#",
    "source": "Forbes",
    "date": "October 07, 2022",
    "category": "Business"
  }
];
