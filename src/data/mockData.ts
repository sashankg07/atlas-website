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
    "title": "AI Transforms Drug Discovery Landscape",
    "description": "Recent advancements in AI are revolutionizing the pharmaceutical industry. Machine learning models are now capable of predicting drug interactions and side effects, speeding up the drug discovery process.",
    "url": "#",
    "source": "The New York Times",
    "date": "March 02, 2023",
    "category": "Research"
  },
  {
    "title": "AI-powered Robots Transforming Supply Chain Management",
    "description": "With AI-powered robots, businesses can streamline their supply chain processes. These robots can operate 24/7, significantly reducing operation time and costs.",
    "url": "#",
    "source": "Forbes",
    "date": "March 02, 2023",
    "category": "Business"
  },
  {
    "title": "AI Breakthrough: Machines Master Emotion Recognition",
    "description": "In a ground-breaking study, AI has successfully learned to identify human emotions. This could have far-reaching implications for improving human-computer interaction.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 02, 2023",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Ethics Framework Launches",
    "description": "A global consortium has unveiled a new framework for AI ethics, aimed at ensuring AI is used responsibly. The framework emphasizes transparency, accountability, and fairness in AI development and use.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 02, 2023",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Predicts Climate Change Patterns",
    "description": "A new AI tool can accurately predict climate change patterns years in advance. The tool uses machine learning to analyze past climate data and make future projections.",
    "url": "#",
    "source": "Nature",
    "date": "March 02, 2023",
    "category": "Tools"
  }
];
