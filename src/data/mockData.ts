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
    "title": "AI Breakthrough Heralds Next-gen Quantum Computing",
    "description": "Researchers have made monumental strides in enhancing quantum computing through artificial intelligence. The cutting-edge technology promises unprecedented data processing speeds and capabilities.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 25, 2021",
    "category": "Research"
  },
  {
    "title": "AI Transforms Retail: The Future of Personalized Shopping",
    "description": "Artificial intelligence is revolutionizing the retail industry by offering highly personalized shopping experiences. Leading businesses are leveraging AI to understand customer behavior and tailor their services accordingly.",
    "url": "#",
    "source": "Forbes",
    "date": "November 25, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Navigating the Pitfalls of AI Bias",
    "description": "As AI systems become more integrated into society, concerns about AI bias and its implications are on the rise. Experts are calling for robust ethical guidelines to ensure fairness and transparency.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 25, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A groundbreaking new AI tool promises to revolutionize data analysis, offering powerful insights and predictive capabilities. The software leverages machine learning algorithms to process complex datasets with ease.",
    "url": "#",
    "source": "Wired",
    "date": "November 25, 2021",
    "category": "Tools"
  },
  {
    "title": "AI in Healthcare: A Game-Changer for Disease Diagnosis",
    "description": "AI is proving to be a game-changer in healthcare, with new developments offering improved disease diagnosis and treatment options. The technology is set to revolutionize patient care and outcomes.",
    "url": "#",
    "source": "Medical News Today",
    "date": "November 25, 2021",
    "category": "Technology"
  }
];
