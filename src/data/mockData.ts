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
    "title": "AI Revolutionizes Medical Diagnosis with Unprecedented Accuracy",
    "description": "Recent developments in AI technology have led to breakthroughs in medical diagnostics, with machine learning algorithms able to identify diseases with an accuracy rate previously unattainable. This could represent a significant shift in healthcare, making early and accurate detection of various conditions more accessible.",
    "url": "#",
    "source": "The AI Health Journal",
    "date": "December 18, 2021",
    "category": "Technology"
  },
  {
    "title": "DeepMind's 'AlphaCode': A Leap Forward in AI Programming",
    "description": "DeepMind's latest AI model, 'AlphaCode', demonstrates the ability to write software code that meets professional human standards. This pioneering research could have far-reaching implications for the software industry.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 18, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics Debate: Balancing Innovation and Responsibility",
    "description": "As AI continues to evolve, the conversation around ethical implications intensifies. Experts underline the importance of establishing regulations that ensure safety, fairness and transparency in AI, without stifering innovation.",
    "url": "#",
    "source": "The AI Ethics Journal",
    "date": "December 18, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Startups Continue to Draw Massive Investments",
    "description": "Investors continue to show strong interest in AI startups, with unprecedented levels of funding being reported. The trend underscores the belief in AI's potential to revolutionize various sectors.",
    "url": "#",
    "source": "Forbes",
    "date": "December 18, 2021",
    "category": "Business"
  },
  {
    "title": "OpenAI's GPT-4: The Next Generation of Language AI Tools",
    "description": "OpenAI is reportedly developing GPT-4, a new version of its language prediction model. This could potentially result in a tool capable of understanding and generating human-like text with even greater accuracy.",
    "url": "#",
    "source": "The Verge",
    "date": "December 18, 2021",
    "category": "Tools"
  }
];
