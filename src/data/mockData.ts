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
    "title": "AI Breakthrough: Machine Learning Cracks Quantum Physics",
    "description": "A revolutionary AI model has successfully solved complex quantum physics problems that have puzzled scientists for years. This opens the door for AI to tackle even more complex scientific challenges.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 26, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: New Algorithm Reduces Bias in AI",
    "description": "Researchers have developed an algorithm that can significantly reduce biases in AI systems. This innovation is expected to improve fairness in machine learning applications across industries.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 26, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI in Business: AI Forecasting Improves Supply Chain Management",
    "description": "Companies are increasingly relying on AI to forecast supply chain disruptions and manage risks. This trend is driving transformation in the global logistics industry.",
    "url": "#",
    "source": "Forbes",
    "date": "October 26, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Technology: Next-Gen AI Chip Revolutionizes Data Processing",
    "description": "A breakthrough AI chip has been unveiled, promising to dramatically increase the speed of data processing while reducing energy consumption. This could revolutionize AI applications in IoT devices.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 26, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Tools: New Machine Learning Framework Simplifies AI Development",
    "description": "A new open-source machine learning framework has been launched, aiming to simplify the development and deployment of AI models. This tool could democratize access to AI for developers worldwide.",
    "url": "#",
    "source": "Wired",
    "date": "October 26, 2021",
    "category": "Tools"
  }
];
