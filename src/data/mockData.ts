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
    "title": "Groundbreaking AI Algorithm Predicts Climate Change Patterns",
    "description": "Scientists have developed a revolutionary AI algorithm capable of predicting climate change patterns with unprecedented accuracy. The new model could significantly aid in the fight against global warming.",
    "url": "#",
    "source": "Nature",
    "date": "November 24, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils AI-Powered Cybersecurity System",
    "description": "A leading tech company has launched a state-of-the-art cybersecurity system powered by artificial intelligence. The system promises to fend off cyber-threats with greater efficiency.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 24, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100 Million in Series B Funding",
    "description": "An AI start-up specializing in healthcare solutions has raised $100 million in a Series B funding round. The funds will be used to expand its AI capabilities and reach.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 24, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Development Released",
    "description": "A renowned global organization has released a comprehensive set of ethical guidelines for AI development. The guidelines aim to ensure AI technology is developed and used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 24, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Transforms Text to Code",
    "description": "A new artificial intelligence tool that converts simple English commands into code is set to revolutionize the programming landscape, making it more accessible to non-programmers.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 24, 2021",
    "category": "Tools"
  }
];
