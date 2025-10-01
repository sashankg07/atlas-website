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
    "title": "Revolutionary AI Algorithm Predicts Climate Change Impact",
    "description": "A groundbreaking AI model developed by scientists accurately predicts the impact of climate change on a global scale. The technology is set to play a pivotal role in helping policymakers make informed decisions.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 24, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots Transforming the Retail Industry",
    "description": "As the holiday season nears, retailers are turning to AI-powered robots to manage inventory and streamline operations. These robots are set to reshape the future of the retail industry.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 24, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Detects Deepfakes with 96% Accuracy",
    "description": "A new tool harnessing the power of AI can detect deepfake content with an accuracy rate of 96%. This development is a major step forward in the fight against digital disinformation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 24, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: Ensuring Fairness in Machine Learning",
    "description": "Recent discussions focus on the ethical implications of AI, particularly in ensuring fairness and transparency in machine learning models. Experts call for robust regulations to prevent bias and discrimination.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 24, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tech Pioneers New Breakthrough in Cancer Diagnosis",
    "description": "A newly developed AI technology promises a breakthrough in early cancer diagnosis, potentially saving millions of lives. The AI system can detect cancer cells at an early stage with remarkable accuracy.",
    "url": "#",
    "source": "Washington Post",
    "date": "November 24, 2021",
    "category": "Technology"
  }
];
