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
    "title": "AI Breakthrough: Deep Learning Models Can Now Predict Earthquakes",
    "description": "A team of researchers has developed new AI models capable of predicting earthquakes, potentially saving countless lives. The model uses deep learning algorithms to analyze seismic data and predict geological events.",
    "url": "#",
    "source": "Nature",
    "date": "November 23, 2021",
    "category": "Research"
  },
  {
    "title": "IBM Unveils AI-Driven Cloud Platform for Business",
    "description": "IBM has launched a new AI-driven cloud platform aimed at helping businesses streamline operations. The platform leverages AI to automate processes and provide valuable insights.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "November 23, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: The Urgency of Regulating Facial Recognition",
    "description": "As facial recognition technology becomes more pervasive, calls for regulatory measures are growing louder. Experts argue that AI ethics should be at the forefront of technological development to prevent misuse and ensure privacy.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 23, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "NVIDIA Unveils New Tools for AI Developers",
    "description": "NVIDIA has announced a suite of new tools for AI developers to optimize machine learning models. The tools will enable developers to create more efficient and accurate AI systems.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 23, 2021",
    "category": "Tools"
  },
  {
    "title": "AI in Healthcare: Predicting Patient Outcomes with Deep Learning",
    "description": "A recent study showcased the potential of AI in predicting patient outcomes in intensive care units. The AI system uses deep learning to analyze patient data and make predictions about health outcomes.",
    "url": "#",
    "source": "Healthcare IT News",
    "date": "November 23, 2021",
    "category": "Technology"
  }
];
