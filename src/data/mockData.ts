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
    "title": "AI Outperforms Radiologists in Identifying Breast Cancer",
    "description": "A recent study indicates that an Artificial Intelligence system has shown superior performance in identifying breast cancer, surpassing a panel of expert radiologists. This significant breakthrough could lead to more accurate, timely and efficient diagnosis in the future.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 31, 2022",
    "category": "Research"
  },
  {
    "title": "IBM Unveils AI-Driven Quantum Computing Breakthrough",
    "description": "IBM revealed a significant breakthrough in quantum computing, leveraging AI to enhance the performance and speed of quantum computers. The new system is expected to revolutionize various industries.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 31, 2022",
    "category": "Technology"
  },
  {
    "title": "Google's New AI Tool Addresses Privacy Concerns",
    "description": "Google has developed a novel AI tool aimed at addressing concerns about data privacy. The tool uses advanced algorithms to ensure user data is anonymized and secure.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 31, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Microsoft Acquires AI Startup for $1 Billion",
    "description": "Microsoft announced the acquisition of an AI startup for $1 billion, aiming to bolster its cloud and AI capabilities. The move is part of Microsoft's strategy to compete in the growing AI market.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 31, 2022",
    "category": "Business"
  },
  {
    "title": "OpenAI's New Language Model Transforms Coding",
    "description": "OpenAI has released a new language model that is helping developers write code more efficiently. The AI tool, which auto-generates code, is set to transform the software development process.",
    "url": "#",
    "source": "Wired",
    "date": "October 31, 2022",
    "category": "Tools"
  }
];
