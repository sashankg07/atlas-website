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
    "title": "AI Beats Human Experts at Spotting Lung Cancer",
    "description": "Researchers have developed an AI model that outperforms human radiologists in diagnosing lung cancer. The model, trained on a large dataset of CT scans, could significantly improve early detection rates.",
    "url": "#",
    "source": "The New York Times",
    "date": "August 20, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Chip Revolutionizes Edge Computing",
    "description": "A new AI chip, designed for edge devices, promises to bring powerful machine learning capabilities to everyday gadgets. The chip could transform how AI is applied in home automation, wearables, and IoT devices.",
    "url": "#",
    "source": "Wired",
    "date": "August 20, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M to Democratize Machine Learning",
    "description": "The AI software startup, AI Labs, has secured $100 million in funding. The company plans to use the funds to make machine learning more accessible to businesses of all sizes.",
    "url": "#",
    "source": "TechCrunch",
    "date": "August 20, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise as AI Predicts Criminal Behavior",
    "description": "The increasing use of AI in predicting criminal behavior has sparked ethical debates. Critics argue the technology could lead to biased policing and unjust sentencing. ",
    "url": "#",
    "source": "The Guardian",
    "date": "August 20, 2022",
    "category": "Ethics"
  },
  {
    "title": "New Open-Source Tool Simplifies AI Model Training",
    "description": "A new open-source tool, AI Trainer, aims to simplify the process of training AI models. The tool’s user-friendly interface could help more developers utilize machine learning in their projects.",
    "url": "#",
    "source": "InfoWorld",
    "date": "August 20, 2022",
    "category": "Tools"
  }
];
