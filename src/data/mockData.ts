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
    "title": "AI Outperforms Humans in Complex Game",
    "description": "In a breakthrough for artificial intelligence, a new AI model has outperformed humans in a complex multiplayer game. This development could have implications for real-world tasks like self-driving cars and climate modeling.",
    "url": "#",
    "source": "New York Times",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI Transforms Business Analytics",
    "description": "Artificial intelligence is revolutionizing business analytics, enabling companies to process large amounts of data with unprecedented accuracy and speed. This trend is expected to drive significant growth in the AI market over the next decade.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "September 30, 2022",
    "category": "Business"
  },
  {
    "title": "AI Tools Revolutionize Healthcare Diagnostics",
    "description": "Innovative AI tools are transforming healthcare diagnostics, allowing doctors to detect diseases earlier and with greater accuracy. These technologies could significantly improve patient outcomes and reduce healthcare costs.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: A Growing Concern",
    "description": "As artificial intelligence becomes increasingly integrated into our lives, questions about its ethical implications are becoming more urgent. Policymakers and technologists alike are grappling with how to ensure that AI is used responsibly and fairly.",
    "url": "#",
    "source": "BBC News",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Helps Fight Climate Change",
    "description": "A new AI tool is helping scientists better understand and combat climate change. The tool can analyze large amounts of climate data and predict future trends with remarkable accuracy.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
