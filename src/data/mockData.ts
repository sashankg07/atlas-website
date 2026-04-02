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
    "title": "Neural Networks Unlock New Possibilities in Drug Discovery",
    "description": "Researchers have developed a new AI system that utilizes advanced neural networks to accelerate drug discovery. The breakthrough could potentially revolutionize the pharmaceutical industry.",
    "url": "#",
    "source": "Nature",
    "date": "October 31, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots Transforming E-commerce Warehouses",
    "description": "A new breed of AI-powered robots is revolutionizing the supply chain industry, with major e-commerce companies employing them to optimize warehouse operations.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 31, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in Artificial Intelligence Startups",
    "description": "In a bid to boost its AI capabilities, a renowned tech giant has invested billions in promising AI startups. The move signifies the growing business interest in AI technologies.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 31, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Bias: A Growing Ethical Concern",
    "description": "As AI systems become more prevalent in society, concerns about AI bias and its potential implications are growing. Experts call for more transparency and ethical guidelines in AI development.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 31, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Set to Revamp Customer Service",
    "description": "A newly launched AI tool promises to transform customer service, using advanced machine learning algorithms to better understand and respond to customer needs.",
    "url": "#",
    "source": "The Verge",
    "date": "October 31, 2021",
    "category": "Tools"
  }
];
