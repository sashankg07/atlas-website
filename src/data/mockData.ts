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
    "title": "AI System Outperforms Experts in Breast Cancer Detection",
    "description": "A new artificial intelligence system developed by a team of researchers surpasses radiologists in detecting breast cancer. The system is expected to significantly improve diagnostic accuracy and patient outcomes.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "March 20, 2023",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots Revolutionize the Supply Chain Industry",
    "description": "Leading logistics companies are integrating AI-powered robots into their supply chains. These robots are transforming the industry by increasing efficiency and reducing human error.",
    "url": "#",
    "source": "Business Insider",
    "date": "March 20, 2023",
    "category": "Business"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A groundbreaking AI tool can now predict the impact of climate change with unprecedented accuracy. This development could play a critical role in shaping future environmental policies.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 20, 2023",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Issues Surrounding AI in Healthcare",
    "description": "Despite the potential benefits of AI in healthcare, there are growing concerns about ethical issues such as data privacy and algorithmic bias. Experts call for comprehensive guidelines to address these challenges.",
    "url": "#",
    "source": "The New York Times",
    "date": "March 20, 2023",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Helps Detect Deepfakes With High Accuracy",
    "description": "A new AI tool offers a promising solution to the increasing problem of deepfakes. The software uses advanced machine learning algorithms to detect manipulated images and videos with impressive accuracy.",
    "url": "#",
    "source": "Wired",
    "date": "March 20, 2023",
    "category": "Tools"
  }
];
