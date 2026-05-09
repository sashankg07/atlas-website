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
    "title": "Revolutionary AI Algorithm Predicts Climate Change Impact",
    "description": "Researchers have developed an AI algorithm capable of accurately predicting the impact of climate change. This breakthrough could help policymakers make informed decisions to combat climate change.",
    "url": "#",
    "source": "Nature AI Journal",
    "date": "July 24, 2022",
    "category": "Research"
  },
  {
    "title": "AI Helps Identify New Potential Drug for COVID-19",
    "description": "A novel AI system has identified a potential drug for COVID-19, accelerating the race for treatment. This application of AI in healthcare demonstrates its potential to revolutionize the medical field.",
    "url": "#",
    "source": "The AI Times",
    "date": "July 24, 2022",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup to Bolster Cloud Services",
    "description": "Microsoft has acquired a promising AI startup to enhance its cloud services. The deal underscores the growing importance of AI in the business and tech world.",
    "url": "#",
    "source": "Forbes",
    "date": "July 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: Balancing Benefits and Potential Harm",
    "description": "As AI continues to evolve, ethical considerations are becoming increasingly important. Experts are calling for more regulation to ensure AI technology is developed and used responsibly.",
    "url": "#",
    "source": "The Ethics of AI Journal",
    "date": "July 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tool 'DeepFake' Raises Concerns Over Misuse",
    "description": "The rise of DeepFake, an AI tool capable of creating hyper-realistic fake videos, has raised concerns over potential misuse. Researchers are urging for precautions to prevent the technology from being exploited.",
    "url": "#",
    "source": "Technology Review",
    "date": "July 24, 2022",
    "category": "Tools"
  }
];
