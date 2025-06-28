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
    "title": "AI Revolutionizes Climate Change Predictions",
    "description": "A groundbreaking AI model has been developed to make more accurate climate change predictions. This new technology could revolutionize the way we understand and combat global warming.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 21, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots Transforming E-commerce Warehouse Operations",
    "description": "AI-powered robots are being employed in warehouses, elevating efficiency in the e-commerce industry. The advanced technology ensures faster order fulfillment and reduces human effort.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 21, 2022",
    "category": "Business"
  },
  {
    "title": "AI to Detect Mental Health Disorders in Social Media Posts",
    "description": "A new AI tool has been developed that can detect signs of mental health disorders from social media posts. The technology may provide early intervention opportunities and could change mental health management.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 21, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Ethics Guidelines Released by International Tech Consortium",
    "description": "An international tech consortium has released comprehensive guidelines for AI ethics. These guidelines aim to ensure that AI technologies are developed and used responsibly and ethically.",
    "url": "#",
    "source": "BBC News",
    "date": "September 21, 2022",
    "category": "Ethics"
  },
  {
    "title": "DeepMind Launches New AI Tool for Protein Folding",
    "description": "DeepMind has launched a new AI tool that predicts protein folding structures. This tool could significantly speed up drug discovery processes and advance our understanding of diseases.",
    "url": "#",
    "source": "Nature",
    "date": "September 21, 2022",
    "category": "Tools"
  }
];
