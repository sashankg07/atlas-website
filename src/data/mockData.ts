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
    "title": "AI Breaks New Ground in Early Cancer Detection",
    "description": "A revolutionary artificial intelligence model has been developed that can detect early signs of certain types of cancer, potentially saving millions of lives. The AI model promises to significantly improve early detection and treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 31, 2021",
    "category": "Research"
  },
  {
    "title": "AI Now Powers the World's Largest Hedge Fund",
    "description": "Bridgewater Associates, the largest hedge fund in the world, is now using artificial intelligence to predict market trends. The firm believes that AI will drastically reduce human error and increase profitability.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "October 31, 2021",
    "category": "Business"
  },
  {
    "title": "Tech Giants in Race for AI Supremacy",
    "description": "Google, Apple, and Amazon are investing billions into AI research and development. The tech giants are in a fierce competition to lead the next wave of AI technology.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 31, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Dilemma of AI in Combat Scenarios",
    "description": "As military forces around the world increasingly incorporate AI into their arsenals, ethical questions are being raised about the potential consequences. Critics worry about the lack of human oversight and the potential for misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 31, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Design Industry",
    "description": "A new AI-powered tool promises to revolutionize the design industry by automating complex tasks. The tool uses machine learning to understand user preferences and generate unique designs.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 31, 2021",
    "category": "Tools"
  }
];
