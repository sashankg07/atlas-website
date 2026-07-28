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
    "title": "Revolutionizing Healthcare: AI Predicts Heart Attacks with Stunning Accuracy",
    "description": "A groundbreaking AI model can now predict heart attacks years in advance with unprecedented precision. This breakthrough could revolutionize how we approach cardiovascular health.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 18, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Business: IBM Unveils New AI Suite for Supply Chain Management",
    "description": "IBM has unveiled a new AI suite designed to optimize supply chain management. The application uses machine learning to forecast demand, manage inventory, and streamline logistics.",
    "url": "#",
    "source": "Forbes",
    "date": "October 18, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics: The Debate on AI Facial Recognition Continues",
    "description": "The ethical debate surrounding AI facial recognition has reignited after a man was wrongfully arrested due to a misidentification. This has prompted calls for stricter regulation on AI technologies.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 18, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "DeepMind's Latest AI Can Write Code and Fix Bugs",
    "description": "DeepMind's new AI model, Codex, can write code in response to a human prompt and even fix bugs. This could drastically speed up programming tasks and reduce human error.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 18, 2022",
    "category": "Technology"
  },
  {
    "title": "TensorFlow 2.7.0: New Features and Updates",
    "description": "Google has released TensorFlow 2.7.0, the latest version of its open-source machine learning library. The update includes enhancements in debugging, model building, and TensorFlow Lite.",
    "url": "#",
    "source": "The Verge",
    "date": "October 18, 2022",
    "category": "Tools"
  }
];
