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
    "title": "Robotic Process Automation Gets a Boost with AI",
    "description": "New advancements in AI technologies have significantly improved the efficiency of Robotic Process Automation (RPA). This development has helped businesses streamline their operations and increase productivity.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "DeepMind's AI Models Predict Protein Structures with Unprecedented Accuracy",
    "description": "DeepMind's recent breakthrough with AlphaFold, an AI model, has shown it can predict protein structures with exceptional accuracy. This could revolutionize medical research and drug discovery.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "AI Helps Financial Institutions Detect Fraud in Real-Time",
    "description": "AI technology is being utilized by financial institutions to detect fraudulent activity in real time. This has resulted in significant cost savings and improved customer trust.",
    "url": "#",
    "source": "Bloomberg",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "OpenAI's New Sentiment Analysis Tool Raises Ethical Questions",
    "description": "OpenAI's new sentiment analysis tool has sparked a debate about the ethical implications of AI in assessing human emotions and the potential misuse of such technology.",
    "url": "#",
    "source": "Wired",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "Microsoft Releases New AI Debugging Tool",
    "description": "Microsoft has launched a new AI debugging tool aimed at helping developers diagnose and fix problems with their AI models more efficiently and effectively.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
