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
    "title": "Revolutionary AI Predicts Climate Change Impact",
    "description": "Scientists have developed a new AI model capable of predicting climate change patterns with unprecedented accuracy. This breakthrough could significantly aid in global warming mitigation efforts.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 01, 2022",
    "category": "Research"
  },
  {
    "title": "AI-powered Cybersecurity Tools Reshape the Industry",
    "description": "Rapid advancements in AI are transforming the cybersecurity landscape. These intelligent tools can swiftly detect, analyze, and neutralize potential threats.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 01, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI for Business Operations",
    "description": "A leading tech company has announced a multi-billion dollar investment in AI to streamline business operations. The investment underscores the growing importance of AI in modern business strategy.",
    "url": "#",
    "source": "Forbes",
    "date": "October 01, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised over AI in Law Enforcement",
    "description": "The use of AI in law enforcement has sparked a vigorous debate. Critics argue that without proper regulation, AI could potentially infringe on civil liberties.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 01, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Healthcare Diagnostics",
    "description": "A groundbreaking AI tool has been developed that can diagnose various health conditions with remarkable accuracy. The tool is expected to revolutionize healthcare diagnostics and treatment.",
    "url": "#",
    "source": "BBC News",
    "date": "October 01, 2022",
    "category": "Tools"
  }
];
