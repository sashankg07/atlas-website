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
    "title": "Revolutionizing Medicine Through AI-Driven Diagnosis",
    "description": "Researchers have developed a new AI system capable of accurately diagnosing diseases, paving the way for a future of AI-driven healthcare. The system is already outperforming human doctors in some areas.",
    "url": "#",
    "source": "Science Daily",
    "date": "June 24, 2022",
    "category": "Research"
  },
  {
    "title": "AI Predicts Climate Change Impact with Unprecedented Accuracy",
    "description": "Scientists have used artificial intelligence to predict the impact of climate change with greater precision than ever before. The AI model can accurately predict changes in weather patterns, offering new hope for climate change mitigation strategies.",
    "url": "#",
    "source": "Nature",
    "date": "June 24, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Company Raises $100M in Series C Funding",
    "description": "A leading AI technology company has secured $100M in Series C funding, highlighting the growing investor interest in artificial intelligence. The funding will be used to further develop their advanced AI solutions.",
    "url": "#",
    "source": "VentureBeat",
    "date": "June 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Exploring the Ethical Implications of AI in Law Enforcement",
    "description": "As AI technology becomes increasingly integrated into law enforcement, concerns are being raised about the ethical implications. Critics argue the need for clear regulation to prevent misuse and ensure transparency.",
    "url": "#",
    "source": "The Guardian",
    "date": "June 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Text into Realistic Speech",
    "description": "A new AI tool has been developed that can turn text into lifelike speech, offering potential applications in audiobooks, voice assistants, and more. The tool uses advanced machine learning techniques to generate human-like speech patterns.",
    "url": "#",
    "source": "TechCrunch",
    "date": "June 24, 2022",
    "category": "Tools"
  }
];
