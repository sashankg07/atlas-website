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
    "title": "AI Surpasses Human Performance in Protein Folding Prediction",
    "description": "A new AI algorithm developed by DeepMind has outperformed humans in predicting protein structures. This could revolutionize drug discovery and biological research.",
    "url": "#",
    "source": "Nature",
    "date": "November 23, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Helps Predict Climate Change Patterns",
    "description": "IBM has unveiled a powerful new AI tool that can predict climate change patterns with unprecedented accuracy. This could aid in the design of more effective climate policies.",
    "url": "#",
    "source": "The Verge",
    "date": "November 23, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $50 Million for AI-Powered Customer Service",
    "description": "AI startup, Servo, has raised $50 million in Series B funding for its AI-powered customer service platform. The platform uses AI to automate customer inquiries, drastically reducing response times.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 23, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise Over AI's Role in Job Recruitment",
    "description": "As AI continues to play a larger role in job recruitment, concerns about bias and fairness have come to the forefront. Experts are calling for more transparency and regulation.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 23, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Introduces New AI Tool to Detect Internet Outages",
    "description": "Google has introduced a new AI tool that can detect internet outages worldwide in real-time. This tool could help improve internet reliability and performance.",
    "url": "#",
    "source": "Wired",
    "date": "November 23, 2021",
    "category": "Tools"
  }
];
