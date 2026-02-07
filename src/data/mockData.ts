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
    "title": "Major Breakthrough in AI Research: Quantum Computing Meets Artificial Intelligence",
    "description": "In a groundbreaking research project, scientists have successfully integrated quantum computing with AI. This quantum leap could revolutionize AI's problem-solving capabilities.",
    "url": "#",
    "source": "The New York Times",
    "date": "August 11, 2022",
    "category": "Research"
  },
  {
    "title": "Artificial Intelligence is Shaping the Future of E-commerce",
    "description": "Leading tech companies are utilizing AI to revolutionize e-commerce. From personalized product recommendations to innovative payment solutions, AI is transforming online shopping.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "August 11, 2022",
    "category": "Business"
  },
  {
    "title": "Google's New AI Tool Can Predict Weather Patterns with Unprecedented Accuracy",
    "description": "Google's latest AI tool is a game-changer for meteorology, offering highly accurate weather predictions. This technology could potentially save lives and property by providing early warnings.",
    "url": "#",
    "source": "TechCrunch",
    "date": "August 11, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: A Rising Concern Amidst Rapid AI Advancements",
    "description": "As AI continues to advance, ethical concerns are increasingly coming to the forefront. Discussions around AI's potential impacts on privacy, job security, and decision-making are growing in importance.",
    "url": "#",
    "source": "The Guardian",
    "date": "August 11, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Launches New AI Language Model: GPT-4",
    "description": "OpenAI has announced the release of GPT-4, the latest iteration of its language prediction model. It's expected to vastly improve AI's natural language processing capabilities.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "August 11, 2022",
    "category": "Tools"
  }
];
