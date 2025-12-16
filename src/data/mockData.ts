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
    "title": "AI Breakthrough: New Algorithm Mimics Human Intelligence",
    "description": "Researchers have developed a groundbreaking AI algorithm that closely mimics human intelligence. The algorithm opens new possibilities for AI in various fields including healthcare, robotics, and autonomous vehicles.",
    "url": "#",
    "source": "The Tech Journal",
    "date": "November 18, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Business: Leveraging Machine Learning for Customer Engagement",
    "description": "Businesses are increasingly utilizing AI and machine learning technologies to enhance customer engagement. This trend is transforming the business landscape, offering personalized customer experiences.",
    "url": "#",
    "source": "Business Insider",
    "date": "November 18, 2022",
    "category": "Business"
  },
  {
    "title": "Ethical Dilemma: Balancing AI Innovation and Privacy Concerns",
    "description": "As AI continues to evolve, so do the ethical debates surrounding its implementation. Balancing technological progression with privacy and security remains a major concern.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 18, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Latest AI tool: TensorFlow 2.7 Released with Exciting New Features",
    "description": "The new version of the popular AI tool, TensorFlow 2.7, has been released. It includes a number of new features that enhance machine learning capabilities and overall performance.",
    "url": "#",
    "source": "The Verge",
    "date": "November 18, 2022",
    "category": "Tools"
  },
  {
    "title": "Artificial Intelligence Revolutionizing Healthcare Technology",
    "description": "AI is playing a crucial role in the advancement of healthcare technology. From predicting diseases to personalizing treatments, AI is transforming the medical landscape like never before.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 18, 2022",
    "category": "Technology"
  }
];
