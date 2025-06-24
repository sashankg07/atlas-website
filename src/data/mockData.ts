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
    "title": "AI Breakthrough: DeepMind's New System Solves Protein Structures",
    "description": "DeepMind's recent AI model, AlphaFold, has shown an unprecedented level of accuracy in solving the structure of proteins, which could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "Nature",
    "date": "November 24, 2022",
    "category": "Research"
  },
  {
    "title": "MIT's New AI Predicts Future Cancer Risk",
    "description": "MIT researchers have developed a machine learning model that can predict a patient's risk of developing breast cancer as much as five years in advance.",
    "url": "#",
    "source": "MIT News",
    "date": "November 24, 2022",
    "category": "Technology"
  },
  {
    "title": "OpenAI Launches GPT-4: Next Generation Language Model",
    "description": "OpenAI has announced the launch of its latest AI model, GPT-4, which is even more powerful in understanding and generating human-like text.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 24, 2022",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Startup Cerebras Raises $250M in Series E Funding",
    "description": "Cerebras Systems, an AI hardware startup, bagged $250 million in a Series E round to accelerate the development and deployment of its AI supercomputers.",
    "url": "#",
    "source": "Bloomberg",
    "date": "November 24, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics: China Unveils New Law to Regulate AI Applications",
    "description": "China has introduced a new law to regulate the ethical issues related to AI applications, focusing on user privacy and data security.",
    "url": "#",
    "source": "South China Morning Post",
    "date": "November 24, 2022",
    "category": "Ethics"
  }
];
