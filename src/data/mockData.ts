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
    "title": "Groundbreaking AI Model Predicts Alzheimer's with Unprecedented Accuracy",
    "description": "Researchers have developed a cutting-edge AI model that can predict Alzheimer's disease years before symptoms occur. This breakthrough could revolutionize the early detection and treatment of the disease.",
    "url": "#",
    "source": "Nature",
    "date": "October 12, 2021",
    "category": "Research"
  },
  {
    "title": "Google's New AI-Powered Search Engine Change Promises Improved Accuracy",
    "description": "Google has announced major changes to its search algorithms, using AI technology to understand the context and intent behind search queries more accurately. This will result in more relevant search results for users.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 12, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100 Million in Series A Funding Round",
    "description": "AI startup, FutureAI, has successfully raised $100 million in its series A funding round. The company aims to develop advanced AI systems to automate various business processes.",
    "url": "#",
    "source": "Forbes",
    "date": "October 12, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Over Facial Recognition Technology Intensify",
    "description": "The increasing use of AI-driven facial recognition technology in surveillance cameras has sparked ethical debates. Critics argue it poses significant risks to privacy and civil liberties.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 12, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning Process",
    "description": "Tech giant, IBM, has launched a new AI tool designed to make machine learning more accessible. The tool simplifies the process, allowing even those without a background in data science to create powerful AI models.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 12, 2021",
    "category": "Tools"
  }
];
