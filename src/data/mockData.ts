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
    "title": "AI Breakthrough: DeepMind Solves Protein Folding Mystery",
    "description": "DeepMind's AlphaFold, an AI system, has made a monumental breakthrough by solving the 50-year-old challenge of protein folding. This advancement could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "BBC News",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "IBM Unveils AI Model That Predicts Climate Change Impact",
    "description": "IBM has developed a new AI model capable of predicting the future impact of climate change with unprecedented accuracy. This tool will help researchers and policy makers in strategic planning and mitigation efforts.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "Facebook's OpenAI Collaboration: Building Responsible AI",
    "description": "Facebook has partnered with OpenAI to promote the development of AI systems that are fair, safe, and beneficial for all. The initiative aims to address ethical concerns in AI application.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Google Acquires AI Startup DeepMind for $500 Million",
    "description": "Google has made a significant investment in AI by acquiring startup DeepMind. The acquisition will bolster Google's capabilities in machine learning and data analytics.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 30, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tool Speeds Up Deep Learning Development",
    "description": "A new AI tool developed by Microsoft promises to significantly reduce the time and resources required for deep learning model development. This tool will enable developers to create more efficient AI systems.",
    "url": "#",
    "source": "Wired",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
