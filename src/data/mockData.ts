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
    "title": "AI breakthrough: DeepMind Solves 50-year-old Biology Challenge",
    "description": "Google's AI subsidiary, DeepMind, has utilized its AI system, AlphaFold, to predict protein structures with unparalleled accuracy, a problem puzzling scientists for half a century. This breakthrough could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "BBC News",
    "date": "March 30, 2023",
    "category": "Research"
  },
  {
    "title": "AI in Space: NASA's Perseverance Rover Uses AI for Mars Exploration",
    "description": "NASA's Perseverance Rover is using artificial intelligence to navigate the complex Martian terrain. The rover's autonomous systems are helping scientists discover more about the red planet than ever before.",
    "url": "#",
    "source": "Space.com",
    "date": "March 30, 2023",
    "category": "Technology"
  },
  {
    "title": "Microsoft Launches New AI-Powered Cloud Services",
    "description": "Microsoft has announced a suite of new AI-powered cloud services. These tools are designed to help businesses improve customer service, streamline workflows, and make data-driven decisions.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 30, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: EU Proposes First Legal Framework for AI",
    "description": "The European Union has proposed the world's first legal framework to regulate AI, focusing on high-risk AI systems. The move is seen as a major step in addressing AI's ethical and privacy implications.",
    "url": "#",
    "source": "Financial Times",
    "date": "March 30, 2023",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Model GPT-4",
    "description": "OpenAI has released GPT-4, its latest language model. This version is said to be more powerful, understanding context better and generating even more human-like text.",
    "url": "#",
    "source": "The Verge",
    "date": "March 30, 2023",
    "category": "Tools"
  }
];
