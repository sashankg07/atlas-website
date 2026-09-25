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
    "title": "AI Breakthrough: A Machine that Understands Human Emotions",
    "description": "Researchers have developed an AI capable of understanding human emotions. This could revolutionize industries from customer service to mental health.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 17, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Business: How AI is Streamlining Supply Chains",
    "description": "AI applications are transforming supply chain management, making it more efficient and responsive to market changes.",
    "url": "#",
    "source": "Business Insider",
    "date": "November 17, 2021",
    "category": "Business"
  },
  {
    "title": "Ethical Dilemma: AI and Privacy Concerns",
    "description": "As AI technologies advance, they pose new challenges to personal privacy. Are existing regulations enough to handle this emerging problem?",
    "url": "#",
    "source": "The Guardian",
    "date": "November 17, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tool Spotlight: New Machine Learning Tool Accelerates Data Analysis",
    "description": "A new tool leveraging AI capabilities is set to speed up data analysis, allowing businesses to make quicker decisions based on data insights.",
    "url": "#",
    "source": "ZDNet",
    "date": "November 17, 2021",
    "category": "Tools"
  },
  {
    "title": "AI in Healthcare: Novel AI System Improves Cancer Detection",
    "description": "A groundbreaking AI system has been developed to detect cancer at early stages, potentially saving millions of lives.",
    "url": "#",
    "source": "Medical News Today",
    "date": "November 17, 2021",
    "category": "Technology"
  }
];
