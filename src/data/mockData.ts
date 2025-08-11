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
    "title": "AI System Breaks New Ground in Protein Folding Mystery",
    "description": "Google's DeepMind has made a significant leap in protein folding prediction with their AI system, AlphaFold. This could revolutionize biotechnology and drug discovery.",
    "url": "#",
    "source": "Nature News",
    "date": "September 29, 2022",
    "category": "Research"
  },
  {
    "title": "AI-driven Robots Redefining the Future of Farming",
    "description": "As the world grapples with food security issues, AI-driven robots are stepping in to transform the future of farming. They are improving crop yield and reducing waste, promising a sustainable future.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2022",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup to Boost Azure Capabilities",
    "description": "Microsoft continues to bolster its cloud capabilities by acquiring an AI startup specializing in machine learning and data analysis. The move is expected to enhance Azure's AI offerings.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "September 29, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surround AI's Role in Hiring Practices",
    "description": "AI is increasingly being used in hiring practices, leading to concerns about bias and fairness. Experts call for stricter regulations and transparency to ensure ethical use.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Launches New AI Language Model Tools",
    "description": "OpenAI has released a new set of tools for training AI language models. These tools promise to make AI language training more accessible and efficient.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 29, 2022",
    "category": "Tools"
  }
];
