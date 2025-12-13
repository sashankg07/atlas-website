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
    "title": "AI Breakthrough: New Algorithm Predicts Climate Change Impact with Incredible Accuracy",
    "description": "Researchers have developed a groundbreaking AI model that can predict the future impact of climate change with unprecedented precision. The new model could revolutionize how scientists forecast environmental changes and devise strategies to mitigate them.",
    "url": "#",
    "source": "Nature",
    "date": "February 26, 2023",
    "category": "Research"
  },
  {
    "title": "Revolutionizing Healthcare: AI Tool Enables Early Detection of Heart Disease",
    "description": "An AI-powered tool capable of detecting early signs of heart disease has been unveiled. This breakthrough technology could drastically improve patient outcomes and reduce healthcare costs globally.",
    "url": "#",
    "source": "The Lancet",
    "date": "February 26, 2023",
    "category": "Technology"
  },
  {
    "title": "AI in Business: How AI is Streamlining Supply Chain Management",
    "description": "A new report highlights how AI is being utilized to optimize supply chain management. Companies are leveraging AI to predict demand, manage inventory and reduce operational costs, leading to increased efficiency and profitability.",
    "url": "#",
    "source": "Forbes",
    "date": "February 26, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Conundrum: The Debate on AI's Role in Decision-Making Intensifies",
    "description": "As AI continues to permeate every aspect of our lives, the ethical debate around its role in decision-making is heating up. Experts argue for the need for transparency, accountability, and human oversight in AI-driven processes.",
    "url": "#",
    "source": "The Guardian",
    "date": "February 26, 2023",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: New Deep Learning Framework Simplifies AI Model Training",
    "description": "A newly released deep learning framework is set to make the training of AI models simpler and more accessible. This development is expected to accelerate AI research and application across various fields.",
    "url": "#",
    "source": "TechCrunch",
    "date": "February 26, 2023",
    "category": "Tools"
  }
];
