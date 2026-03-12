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
    "title": "AI Breakthrough: Machine Learning Algorithms Predict Alzheimer's with 90% Accuracy",
    "description": "Researchers have developed an AI model capable of predicting Alzheimer's disease with remarkable accuracy. This breakthrough could revolutionize early detection and treatment strategies.",
    "url": "#",
    "source": "Science Daily",
    "date": "February 18, 2023",
    "category": "Research"
  },
  {
    "title": "Tech Giants Google and Microsoft Battle for AI Supremacy",
    "description": "Google and Microsoft are locked in a fierce competition to dominate the AI market. Recent developments show both are making significant strides in AI and machine learning capabilities.",
    "url": "#",
    "source": "TechCrunch",
    "date": "February 18, 2023",
    "category": "Business"
  },
  {
    "title": "AI Ethics: The Challenge of Ensuring Fairness in Machine Learning",
    "description": "As AI continues to influence every aspect of our lives, the question of fairness and bias in machine learning algorithms becomes more pressing. Experts are calling for more transparency and regulation in the sector.",
    "url": "#",
    "source": "Wired",
    "date": "February 18, 2023",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-Powered Tools Transforming the Healthcare Industry",
    "description": "AI is set to revolutionize healthcare with tools that can analyze medical images, predict patient outcomes, and even assist in surgeries. The potential for AI in healthcare seems limitless.",
    "url": "#",
    "source": "Medical News Today",
    "date": "February 18, 2023",
    "category": "Technology"
  },
  {
    "title": "New AI Tool Helps Detect Deepfakes with Unprecedented Accuracy",
    "description": "A team of researchers has developed an AI tool that can detect deepfakes with 99% accuracy, a significant step in the fight against misinformation.",
    "url": "#",
    "source": "The Verge",
    "date": "February 18, 2023",
    "category": "Tools"
  }
];
