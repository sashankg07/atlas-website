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
    "title": "AI Breakthrough: New Deep Learning Technique Surpasses Human Accuracy",
    "description": "Researchers have developed a deep learning technique that is demonstrating unprecedented levels of accuracy, surpassing human abilities in certain tasks. This revolutionary development is set to transform industries ranging from healthcare to transportation.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: Predicting Disease Progression with Unprecedented Precision",
    "description": "A new AI model, trained on vast datasets, is now capable of predicting disease progression with remarkable precision. This could lead to timely interventions and improved patient outcomes.",
    "url": "#",
    "source": "The Lancet",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Revolutionizes the Retail Industry: Personalized Shopping Experience",
    "description": "AI is transforming the retail industry by providing personalized shopping experiences. Using machine learning algorithms, retailers can now anticipate customer needs and recommend products accurately.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Implications of AI in Surveillance",
    "description": "As AI becomes more prevalent in surveillance technology, concerns over privacy and ethical implications are on the rise. Experts call for regulations to ensure responsible use of the technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New AI Training Toolkit",
    "description": "OpenAI has released a new AI training toolkit that allows developers to train models more efficiently. This tool is set to democratize AI by making it accessible to a wider range of developers.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
