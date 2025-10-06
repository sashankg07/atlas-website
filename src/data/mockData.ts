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
    "title": "Revolutionary AI Model Predicts Future Climate Patterns",
    "description": "Researchers have developed a novel AI model that can predict future climate patterns with unprecedented accuracy. This could provide critical insights for mitigating climate change.",
    "url": "#",
    "source": "Nature",
    "date": "July 08, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Advanced AI Chip",
    "description": "A leading technology company has unveiled a new AI chip, set to significantly increase processing speed and power efficiency. The chip is predicted to transform the fields of machine learning and data science.",
    "url": "#",
    "source": "The Verge",
    "date": "July 08, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100 million in Series B Funding",
    "description": "An AI startup specializing in healthcare solutions has raised $100 million in Series B funding. The funding will be used to enhance its cutting-edge machine learning algorithms and expand its global reach.",
    "url": "#",
    "source": "TechCrunch",
    "date": "July 08, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Development Proposed",
    "description": "A global consortium of AI researchers has proposed a new set of ethical guidelines for AI development. The guidelines aim to address issues of transparency, bias, and privacy in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "July 08, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Toolkit for Deep Learning Released",
    "description": "A new AI toolkit for deep learning has been released. The toolkit offers several innovative features that simplify the process of developing and training neural networks.",
    "url": "#",
    "source": "Wired",
    "date": "July 08, 2022",
    "category": "Tools"
  }
];
