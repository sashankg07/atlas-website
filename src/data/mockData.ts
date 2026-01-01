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
    "title": "Disrupting Healthcare: AI's Role in Disease Prediction",
    "description": "Cutting-edge AI technology is being leveraged to predict diseases before they strike. This revolutionary development has the potential to save millions of lives worldwide.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 20, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Retail: A New Era of Personalized Shopping",
    "description": "AI is transforming the retail industry by providing personalized shopping experiences. This new technology is significantly boosting customer engagement and sales.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "December 20, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Striving for Transparency and Accountability",
    "description": "As AI continues to evolve, ethical considerations are becoming increasingly important. AI developers are now focusing on creating transparent and accountable systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 20, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Unveiling TensorFlow 2.6: A Powerful Tool for AI Developers",
    "description": "The latest update to TensorFlow, the popular open-source machine learning library, includes several new features designed to enhance the development of AI applications.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 20, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Revolutionizes Astrophysics: Unraveling the Mysteries of the Universe",
    "description": "Artificial intelligence is aiding astrophysicists in their quest to understand the universe. AI algorithms are now capable of analyzing vast amounts of astronomical data faster and more accurately than ever before.",
    "url": "#",
    "source": "Nature",
    "date": "December 20, 2021",
    "category": "Technology"
  }
];
