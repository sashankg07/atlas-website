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
    "description": "A novel AI model has been developed to predict Alzheimer's disease with an astounding 99% accuracy. The model leverages deep learning algorithms to analyze MRI scans, paving the way for early detection and intervention.",
    "url": "#",
    "source": "Nature Neuroscience",
    "date": "October 11, 2021",
    "category": "Research"
  },
  {
    "title": "IBM Unveils AI-Driven Quantum Computing Breakthrough",
    "description": "IBM has made a significant leap in quantum computing, with the help of AI. The new technology promises to increase the speed and efficiency of quantum calculations, bringing us closer to the quantum advantage.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 11, 2021",
    "category": "Technology"
  },
  {
    "title": "Google's DeepMind Explores AI Ethics in Latest Report",
    "description": "DeepMind, Google's AI subsidiary, has published a comprehensive report on the ethical implications of artificial intelligence. The report underscores the importance of transparency, accountability, and human rights in AI development.",
    "url": "#",
    "source": "The Verge",
    "date": "October 11, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "OpenAI Unveils New Tools for AI Language Models",
    "description": "OpenAI has released a new set of tools designed to improve the transparency and interpretability of AI language models. The tools allow users to understand and control the outputs of these models more effectively.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 11, 2021",
    "category": "Tools"
  },
  {
    "title": "Salesforce Acquires AI Startup Servicetrace",
    "description": "Salesforce has acquired Servicetrace, a startup specializing in robotic process automation (RPA). The acquisition aligns with Salesforce's ongoing investment in AI and automation capabilities.",
    "url": "#",
    "source": "Forbes",
    "date": "October 11, 2021",
    "category": "Business"
  }
];
