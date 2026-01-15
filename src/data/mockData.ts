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
    "title": "AI Powers a New Wave of Drug Discovery",
    "description": "Artificial intelligence is revolutionizing the pharmaceutical industry by accelerating drug discovery and development. This technology can analyze vast amounts of data, identify new targets, and predict successful drug candidates with unprecedented speed and accuracy.",
    "url": "#",
    "source": "The Verge",
    "date": "November 08, 2021",
    "category": "Research"
  },
  {
    "title": "AI Helps Astronomers Uncover Hidden Galaxies",
    "description": "Astronomers are using artificial intelligence to uncover hidden galaxies and better understand the universe. The AI model uses machine learning algorithms to analyze telescope data and detect faint galaxy signals that were previously unnoticed.",
    "url": "#",
    "source": "Scientific American",
    "date": "November 08, 2021",
    "category": "Technology"
  },
  {
    "title": "Artificial Intelligence to Drive Future Business Decision-making",
    "description": "As businesses increasingly adopt AI, decision-making processes are becoming more data-driven and less reliant on intuition. Companies are leveraging AI for predictive analysis, risk management, and operational efficiency.",
    "url": "#",
    "source": "Harvard Business Review",
    "date": "November 08, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Questions Surface in AI's Role in Hiring",
    "description": "The use of AI in hiring raises ethical questions about bias and fairness. Critics argue that AI algorithms can perpetuate human biases, while supporters believe they can help eliminate human bias from the hiring process.",
    "url": "#",
    "source": "New York Times",
    "date": "November 08, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Model GPT-4",
    "description": "OpenAI has released its latest language model, GPT-4, promising even more accurate text generation. GPT-4 is expected to drive advancements in natural language processing and understanding.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 08, 2021",
    "category": "Tools"
  }
];
