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
    "title": "DeepMind's New AI Tool Predicts Protein Structures with Unprecedented Accuracy",
    "description": "DeepMind's latest AI tool, AlphaFold, is revolutionizing biochemistry by accurately predicting protein structures. This breakthrough could expedite drug discovery and disease understanding.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 12, 2021",
    "category": "Research"
  },
  {
    "title": "IBM Unveils AI Model That Mimics the Human Brain",
    "description": "IBM has developed a new AI model capable of mimicking the human brain's cognitive functions. This development is a significant stride towards creating more human-like AI systems.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 12, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Cerebras Systems Raises $250M in Series E Funding",
    "description": "AI hardware startup Cerebras Systems has raised $250 million in a series E funding round. The funds will be used to scale production and meet growing demand for its AI supercomputers.",
    "url": "#",
    "source": "Bloomberg",
    "date": "November 12, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Facebook's AI Ethics Research In Question",
    "description": "Facebook's commitment to AI ethics research is under scrutiny following recent controversies. Critics argue the company needs to prioritize ethical considerations in its AI developments.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 12, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Launches Vertex AI, a New Managed Machine Learning Platform",
    "description": "Google has launched Vertex AI, a new managed machine learning platform. The tool aims to help companies build, deploy, and scale AI models more efficiently.",
    "url": "#",
    "source": "TechRadar",
    "date": "November 12, 2021",
    "category": "Tools"
  }
];
