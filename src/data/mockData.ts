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
    "title": "Revolutionizing Healthcare: AI-Powered Predictive Models",
    "description": "Artificial Intelligence is reshaping the healthcare industry. Scientists developed an AI model that can predict the onset of diseases, helping in early detection and treatment.",
    "url": "#",
    "source": "New York Times",
    "date": "September 26, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Surpasses Human Performance in Granular Material Simulations",
    "description": "In a recent study, AI-based algorithms outperformed traditional physics-based models in predicting the behavior of granular materials, which could have significant implications in various industries.",
    "url": "#",
    "source": "Science Daily",
    "date": "September 26, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: Balancing Innovation and Responsibility",
    "description": "As AI technologies evolve, ethical challenges are emerging. Experts emphasize the need for regulatory frameworks to ensure responsible AI development and use.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 26, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Tech Giant Unveils New AI-Based Business Intelligence Tools",
    "description": "A major tech company has launched a suite of AI-powered tools designed to help businesses gain insights from their data and improve decision making.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 26, 2021",
    "category": "Business"
  },
  {
    "title": "AI Breakthrough: Machine Learning Models Predict Climate Change Impact",
    "description": "Researchers have used machine learning to predict the impact of climate change. The model accurately forecasts potential changes in weather patterns and their effects on the environment.",
    "url": "#",
    "source": "Nature",
    "date": "September 26, 2021",
    "category": "Research"
  }
];
