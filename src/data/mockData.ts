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
    "title": "AI Revolutionizing Healthcare: New Breakthroughs",
    "description": "In a leap forward for medical science, AI has begun reshaping healthcare by diagnosing diseases and predicting patient outcomes more accurately than ever before. This could potentially revolutionize healthcare and save countless lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 26, 2021",
    "category": "Technology"
  },
  {
    "title": "AI and Ethics: The Crucial Conversation",
    "description": "As AI continues to advance, the debate around its ethical implications intensifies. Experts are calling for comprehensive regulations to ensure AI technologies are developed and used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 26, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Redefining the Future of Content Creation",
    "description": "Content creators are increasingly turning to AI tools to streamline their workflow and enhance creativity. With the assistance of AI, producing high-quality content is becoming easier and more efficient.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 26, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in the Business World: A Game Changer",
    "description": "AI continues to transform the world of business by streamlining operations, enhancing customer experience, and generating insights from data. Industries across the board are profiting from its implementation.",
    "url": "#",
    "source": "Forbes",
    "date": "October 26, 2021",
    "category": "Business"
  },
  {
    "title": "AI Research: Exploring the Frontiers of Artificial Intelligence",
    "description": "AI research is pushing the boundaries of what's possible, with exciting new developments in machine learning and neural networks. These advances could unlock unprecedented capabilities in AI systems.",
    "url": "#",
    "source": "Science Daily",
    "date": "October 26, 2021",
    "category": "Research"
  }
];
