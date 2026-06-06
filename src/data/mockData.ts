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
    "title": "New AI Algorithm Predicts Alzheimer's with Remarkable Accuracy",
    "description": "Scientists have developed a new AI algorithm that can predict the onset of Alzheimer's disease with over 95% accuracy. This breakthrough could revolutionize early detection and treatment strategies.",
    "url": "#",
    "source": "The New York Times",
    "date": "February 28, 2022",
    "category": "Research"
  },
  {
    "title": "AI-powered Drone Technology Transforms the Agriculture Industry",
    "description": "Startups are leveraging AI to develop smart drone technology for precision agriculture. These AI drones can detect diseases, monitor crop health, and optimize irrigation systems.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "February 28, 2022",
    "category": "Technology"
  },
  {
    "title": "Google's New AI Tool helps Developers Code Smarter",
    "description": "Google has launched a new AI-powered coding assistant that can predict and suggest code snippets as developers type. This tool aims to increase productivity and code quality.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "February 28, 2022",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "IBM Introduces AI Ethics Board to Oversee Transparency and Fairness",
    "description": "IBM has announced the establishment of an AI Ethics Board to ensure transparency, fairness, and accountability in its AI developments. This move shows IBM’s commitment to ethical AI practices.",
    "url": "#",
    "source": "Forbes",
    "date": "February 28, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Startup RapidAI Secures $100M in Series C Funding",
    "description": "RapidAI, a leading AI startup specializing in healthcare solutions, has secured $100 million in Series C funding. The funding will be used to expand its AI-driven products and services globally.",
    "url": "#",
    "source": "Business Insider",
    "date": "February 28, 2022",
    "category": "Business"
  }
];
