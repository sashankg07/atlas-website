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
    "title": "New AI Algorithm Predicts Alzheimer's with Unprecedented Accuracy",
    "description": "Researchers have developed a new AI algorithm capable of predicting the onset of Alzheimer's disease with an accuracy rate of over 99%. This groundbreaking technology could revolutionize early detection and treatment planning.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 19, 2021",
    "category": "Research"
  },
  {
    "title": "AI Beats Human Experts in Spotting Crop Diseases",
    "description": "A new AI system developed by agritech firms outperforms human experts in identifying crop diseases, promising to significantly improve global food security.",
    "url": "#",
    "source": "BBC News",
    "date": "October 19, 2021",
    "category": "Technology"
  },
  {
    "title": "Leading Tech Firm Launches AI-powered Customer Service Solution",
    "description": "In a significant business move, a leading tech giant has launched an AI-powered customer service solution that promises to revolutionize the customer experience by providing quicker, more accurate responses.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "October 19, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: A Growing Concern in the Tech World",
    "description": "As AI continues to evolve, ethical considerations about its use are coming to the forefront. Experts are calling for regulations and guidelines to ensure AI is used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 19, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Sketches into Photorealistic Landscapes",
    "description": "A new AI tool promises to redefine digital art by transforming simple sketches into stunning, photorealistic landscapes. The tool could change the way artists work, making digital art more accessible to everyone.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 19, 2021",
    "category": "Tools"
  }
];
