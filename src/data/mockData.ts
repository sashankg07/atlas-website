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
    "title": "AI Breakthrough: Deep Learning Model Predicts Alzheimer's Disease with Unprecedented Accuracy",
    "description": "Researchers at Stanford University have developed a deep learning model that can predict Alzheimer's disease with 94% accuracy, a significant improvement over previous methods. The model analyzes MRI scans to identify subtle patterns that human doctors might miss.",
    "url": "#",
    "source": "Stanford University News",
    "date": "October 06, 2021",
    "category": "Research"
  },
  {
    "title": "AI-powered Robots Revolutionize Warehouse Management",
    "description": "Technology giant, Google, has rolled out a new line of AI-powered robots that optimize warehouse processes, promising to drastically cut down on labor costs and improve efficiency. These robots use machine learning to adapt and improve their performance over time.",
    "url": "#",
    "source": "The Verge",
    "date": "October 06, 2021",
    "category": "Technology"
  },
  {
    "title": "IBM Acquires AI Startup to Bolster Cloud Services",
    "description": "IBM announced today its acquisition of AI startup, Cloudint, aiming to bolster its cloud services. This move is part of IBM's ongoing strategy to integrate more AI into its cloud-based solutions.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "October 06, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: Guidelines for Responsible AI Development",
    "description": "The AI Ethics Institute at Harvard University released a new set of guidelines for the responsible development and use of AI. The guidelines aim to ensure that AI technology develops in a way that is ethically sound and socially beneficial.",
    "url": "#",
    "source": "Harvard Gazette",
    "date": "October 06, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning Model Training",
    "description": "DeepMind has launched a new AI tool, called AutoML-Zero, which automates the process of training machine learning models. The tool is designed to make it easier for developers to build and refine AI models without requiring extensive knowledge of machine learning theory.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 06, 2021",
    "category": "Tools"
  }
];
