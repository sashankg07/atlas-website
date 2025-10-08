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
    "title": "AI Breakthrough: Machine Learning Model Predicts Alzheimer's with Outstanding Accuracy",
    "description": "Scientists have developed an artificial intelligence model that can predict the onset of Alzheimer's disease with over 95% accuracy. This breakthrough could pave the way for early detection and treatment.",
    "url": "#",
    "source": "Nature",
    "date": "October 28, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Launches AI-powered Cybersecurity System",
    "description": "A leading technology company has unveiled a new cybersecurity system powered by AI. The system can identify and neutralize threats with unprecedented speed, significantly bolstering network security.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 28, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100 Million in Series A Funding",
    "description": "A promising AI start-up has secured a whopping $100 million in its Series A funding round. The capital will be used to enhance the company's machine learning capabilities and expand its global presence.",
    "url": "#",
    "source": "Forbes",
    "date": "October 28, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: New Guidelines for Fair AI Practices Released",
    "description": "A global tech ethics body has released a comprehensive guide to developing and deploying AI ethically. The move addresses growing concerns about biases and fairness in AI systems.",
    "url": "#",
    "source": "The Verge",
    "date": "October 28, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Text to High-quality Images",
    "description": "A novel AI tool that can convert textual descriptions into high-quality images has been launched. The tool uses advanced machine learning algorithms to generate realistic images from text inputs.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 28, 2021",
    "category": "Tools"
  }
];
