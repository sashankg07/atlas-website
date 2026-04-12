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
    "title": "AI Revolutionizes Predictive Analysis in Healthcare",
    "description": "Artificial Intelligence is leading a revolution in predictive analysis in healthcare, providing unprecedented accuracy in disease detection and prevention. With AI, healthcare providers can now make more informed decisions, effectively saving lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 13, 2021",
    "category": "Technology"
  },
  {
    "title": "How AI is Redefining the World of Finance",
    "description": "Artificial intelligence is rapidly changing the landscape of finance, with advanced algorithms making real-time market predictions and automated trading systems becoming increasingly prevalent.",
    "url": "#",
    "source": "Financial Times",
    "date": "October 13, 2021",
    "category": "Business"
  },
  {
    "title": "Ethical Considerations in AI: A Growing Conversation",
    "description": "As AI continues to permeate society, ethical considerations are increasingly coming into the spotlight. Experts are urging for stronger regulations to ensure AI systems are used fairly and responsibly.",
    "url": "#",
    "source": "BBC Technology",
    "date": "October 13, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tools Promote Accessibility in Tech",
    "description": "Innovative AI tools are being developed to promote accessibility in technology, making digital spaces more inclusive for people with disabilities. From voice recognition to predictive text, AI is at the forefront of accessibility solutions.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 13, 2021",
    "category": "Tools"
  },
  {
    "title": "Groundbreaking Research in AI Enhances Climate Change Predictions",
    "description": "New research has leveraged artificial intelligence to enhance the accuracy of climate change predictions. This breakthrough could help policymakers make more informed decisions to combat global warming.",
    "url": "#",
    "source": "Nature",
    "date": "October 13, 2021",
    "category": "Research"
  }
];
