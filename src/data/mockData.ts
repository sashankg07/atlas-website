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
    "title": "Revolutionizing Healthcare: AI Diagnoses Lung Cancer with 97% Accuracy",
    "description": "Researchers have created an AI that can diagnose lung cancer with a 97% accuracy rate, surpassing human radiologists. This revolutionary technology aims to improve early detection and treatment procedures.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 20, 2022",
    "category": "Research"
  },
  {
    "title": "AI in the Sky: Drones Use Machine Learning to Protect Endangered Species",
    "description": "A new drone technology uses AI and machine learning to monitor and protect endangered species. The technology can identify specific animals and track their movements, providing invaluable data to conservation efforts.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 20, 2022",
    "category": "Technology"
  },
  {
    "title": "Big Tech Acquisition: Google Buys AI Startup DeepMind for $500 Million",
    "description": "Google has acquired AI startup DeepMind for $500 million. The acquisition is expected to bolster Google's AI capabilities and influence the future of machine learning.",
    "url": "#",
    "source": "Bloomberg",
    "date": "September 20, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Call for Transparency: AI Ethics Movement Gains Momentum",
    "description": "More tech companies are being urged to be transparent about their AI algorithms. The movement is being driven by concerns about bias and the impact of AI on society.",
    "url": "#",
    "source": "BBC News",
    "date": "September 20, 2022",
    "category": "Ethics"
  },
  {
    "title": "Building AI Made Easier: Google Launches New AI Tools for Developers",
    "description": "Google has launched a suite of new AI tools designed to make it easier for developers to build and deploy artificial intelligence systems. The tools aim to simplify the process and make AI more accessible.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 20, 2022",
    "category": "Tools"
  }
];
