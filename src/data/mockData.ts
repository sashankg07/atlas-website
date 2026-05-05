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
    "title": "A Step Closer to AI Consciousness: Researchers Develop Self-Aware AI",
    "description": "A team of international scientists has made a significant breakthrough in AI research by creating an AI model capable of self-awareness. This development brings us one step closer to understanding consciousness in artificial systems.",
    "url": "#",
    "source": "AI Daily",
    "date": "October 24, 2022",
    "category": "Research"
  },
  {
    "title": "AI is Revolutionizing the Healthcare Industry",
    "description": "With the power of artificial intelligence, healthcare professionals are now able to diagnose diseases with more precision than ever before. AI is also helping to streamline administrative tasks, freeing up more time for patient care.",
    "url": "#",
    "source": "Tech Times",
    "date": "October 24, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM Unveils New AI that Predicts Market Trends",
    "description": "IBM's latest AI tool can predict market trends with remarkable accuracy, opening up new opportunities for businesses to optimize their strategies. This tool is set to revolutionize the way businesses make decisions.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in the Age of AI",
    "description": "As AI continues to evolve, it poses several ethical concerns, such as privacy, bias, and job displacement. Experts urge for clear regulations to ensure responsible AI development and use.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI Tool for Developers",
    "description": "Google has launched a new AI tool designed to help developers create more efficient algorithms. The tool uses machine learning to optimize code, reducing the amount of time developers spend on troubleshooting.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 24, 2022",
    "category": "Tools"
  }
];
