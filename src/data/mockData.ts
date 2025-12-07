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
    "title": "AI Breaks New Ground in Cancer Diagnosis",
    "description": "Researchers have developed a new AI model that can predict the types of genetic mutations in tumors with high accuracy. This could revolutionize the way doctors diagnose and treat cancer.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 17, 2022",
    "category": "Research"
  },
  {
    "title": "Ethics in AI: Striking a Balance Between Innovation and Responsibility",
    "description": "As AI continues to evolve, ethical concerns are more relevant than ever. Experts are calling for comprehensive guidelines to ensure responsible use of AI technologies.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 17, 2022",
    "category": "Ethics"
  },
  {
    "title": "Microsoft Unveils New AI-Powered Cybersecurity Tools",
    "description": "Microsoft has announced a suite of new AI-powered tools designed to help businesses improve their cybersecurity defenses and respond to threats more effectively.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 17, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Startup Raises $100m for Expansion",
    "description": "A leading AI startup has secured $100 million in Series C funding, signaling strong investor confidence in the future of AI technologies and their potential to transform industries.",
    "url": "#",
    "source": "Financial Times",
    "date": "October 17, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning Process",
    "description": "A new AI tool promises to simplify the machine learning process, allowing even non-technical users to train and deploy AI models with ease.",
    "url": "#",
    "source": "Wired",
    "date": "October 17, 2022",
    "category": "Tools"
  }
];
