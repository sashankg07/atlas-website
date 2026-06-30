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
    "title": "Groundbreaking AI Software Predicts Climate Change Impact",
    "description": "A team of scientists have developed an AI model that accurately predicts the impact of climate change. The model combines historical data and advanced machine learning algorithms to provide a comprehensive view of future climate scenarios.",
    "url": "#",
    "source": "The New York Times",
    "date": "August 05, 2022",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes E-commerce with Personalized Shopping Experiences",
    "description": "AI is transforming the e-commerce landscape by providing highly personalized shopping experiences. By analyzing user behavior and preferences, AI can suggest products that consumers are more likely to purchase.",
    "url": "#",
    "source": "Forbes",
    "date": "August 05, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tool Detects Deepfakes with 97% Accuracy",
    "description": "Researchers have developed a new AI tool that can detect deepfakes with 97% accuracy. This breakthrough could be a major step in combating the spread of disinformation and fake news.",
    "url": "#",
    "source": "TechCrunch",
    "date": "August 05, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing the Benefits and Risks of AI in Healthcare",
    "description": "As AI continues to transform healthcare, ethical considerations are becoming increasingly important. Experts discuss the need for regulations to ensure the safe and fair use of AI in healthcare settings.",
    "url": "#",
    "source": "The Guardian",
    "date": "August 05, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI in Education: New Tools Enhance Remote Learning",
    "description": "With the rise of remote learning, AI-based tools are playing a crucial role in enhancing online education. These tools are improving accessibility and personalizing learning for students worldwide.",
    "url": "#",
    "source": "EdTech Magazine",
    "date": "August 05, 2022",
    "category": "Tools"
  }
];
