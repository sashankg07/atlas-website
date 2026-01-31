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
    "title": "AI Outperforms Humans in Diagnosing Heart Disease",
    "description": "In a groundbreaking study, artificial intelligence has been found to more accurately diagnose heart disease than human doctors. The system uses machine learning algorithms to analyze cardiovascular images and detect abnormalities.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 01, 2021",
    "category": "Research"
  },
  {
    "title": "New AI System Revolutionizes E-commerce",
    "description": "A newly developed AI system is transforming the landscape of e-commerce by predicting consumer behavior with unprecedented accuracy. This high-tech tool can analyze a customer's shopping habits and tailor personalized recommendations.",
    "url": "#",
    "source": "Forbes",
    "date": "October 01, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics Concerns Rise Amid Increased Use",
    "description": "As AI technology becomes more pervasive, ethical concerns over its use are growing. Experts are calling for increased transparency and regulation to prevent potential misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 01, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tools Help Predict Climate Change Impact",
    "description": "Researchers are using AI tools to predict the impact of climate change more accurately. These systems can analyze vast amounts of data to make highly accurate predictions about future weather patterns, aiding in disaster prevention efforts.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 01, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Breakthrough in Language Processing",
    "description": "A new AI model has achieved a breakthrough in understanding and generating human language. This innovative technology could revolutionize areas such as customer service, translation services, and even creative writing.",
    "url": "#",
    "source": "Wired",
    "date": "October 01, 2021",
    "category": "Research"
  }
];
