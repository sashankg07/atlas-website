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
    "title": "Revolutionizing Healthcare with AI: A New Era",
    "description": "AI advancements continue to transform the healthcare industry, from diagnosis to patient care and beyond. The latest innovations promise to make healthcare more personalized, accurate, and accessible.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Breakthrough: DeepMind's New AI Can Predict Weather Patterns",
    "description": "DeepMind, Google's AI subsidiary, has unveiled a new AI model capable of predicting weather patterns more accurately than ever before. This could revolutionize climate science and disaster forecasting.",
    "url": "#",
    "source": "BBC News",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Retail: The Future of Shopping",
    "description": "Artificial Intelligence is reshaping the retail landscape, making shopping experiences more personalized and efficient. This piece explores how AI is influencing the future of retail.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: The Challenge of Bias in Machine Learning",
    "description": "As AI becomes a more integral part of society, the issue of bias in machine learning algorithms is gaining attention. This article discusses recent developments and potential solutions to this complex issue.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: New Release of TensorFlow Boosts Machine Learning Capabilities",
    "description": "Google's TensorFlow 2.6 offers a range of new features and improvements, boosting machine learning capabilities. It's a must-try for anyone in data science and AI development.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
