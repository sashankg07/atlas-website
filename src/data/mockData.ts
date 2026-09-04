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
    "title": "Quantum Computing and AI: A Technological Union Set to Accelerate Breakthroughs",
    "description": "Researchers are merging quantum computing and AI, creating a powerful tool that's expediting groundbreaking developments. The union promises to revolutionize sectors from healthcare to finance.",
    "url": "#",
    "source": "The AI Times",
    "date": "September 25, 2022",
    "category": "Research"
  },
  {
    "title": "Google's New AI Language Model BERT Optimizes Search Results",
    "description": "BERT, Google's new AI language model, is enabling more accurate search results by better understanding the nuances of language. This development is expected to significantly improve user experience.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 25, 2022",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires OpenAI: A Strategic Move in the AI Battle",
    "description": "Microsoft has acquired OpenAI, a leading AI research lab. This move is expected to bolster Microsoft's position in the global AI race, enabling cutting-edge developments.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 25, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: A Growing Concern in the Digital Age",
    "description": "As AI becomes increasingly integrated into daily life, ethical considerations are becoming paramount. Experts emphasize the need for clear guidelines to prevent misuse and ensure responsible AI development.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 25, 2022",
    "category": "Ethics"
  },
  {
    "title": "TensorFlow 2.0: The Latest Tools for AI Developers",
    "description": "Google has released TensorFlow 2.0, featuring a host of new tools to facilitate AI development. It promises to make machine learning more accessible and efficient for developers.",
    "url": "#",
    "source": "The Verge",
    "date": "September 25, 2022",
    "category": "Tools"
  }
];
