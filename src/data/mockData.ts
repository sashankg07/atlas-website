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
    "title": "DeepMind's AI Tackles Protein Folding Problem",
    "description": "DeepMind's AI algorithm, AlphaFold, has solved the 50-year-old problem of protein folding, revolutionizing the field of biology. The breakthrough could have far-reaching implications in drug discovery and disease understanding.",
    "url": "#",
    "source": "BBC News",
    "date": "January 21, 2023",
    "category": "Research"
  },
  {
    "title": "AI Helps in Early Detection of Alzheimer's",
    "description": "Researchers have developed an AI model that can predict the onset of Alzheimer's disease with over 90% accuracy. The technology could be a game-changer in the early diagnosis and treatment of the disease.",
    "url": "#",
    "source": "The Guardian",
    "date": "January 21, 2023",
    "category": "Technology"
  },
  {
    "title": "OpenAI Releases GPT-4, the Latest AI Language Model",
    "description": "OpenAI has released GPT-4, the most advanced AI language model to date. The new model can generate even more coherent and contextually accurate text, expanding potential use-cases across industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "January 21, 2023",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Controversy at Major Tech Firm",
    "description": "A leading tech firm faces backlash over its dismissal of a prominent AI ethicist. The incident has sparked a broader conversation about the ethical implications of AI development and deployment.",
    "url": "#",
    "source": "The New York Times",
    "date": "January 21, 2023",
    "category": "Ethics"
  },
  {
    "title": "AI Startup Acquired for $1B in Landmark Deal",
    "description": "In a landmark deal, a leading tech company has acquired a promising AI startup for $1 billion. The deal underscores the growing business value of AI and machine learning technologies.",
    "url": "#",
    "source": "Bloomberg",
    "date": "January 21, 2023",
    "category": "Business"
  }
];
