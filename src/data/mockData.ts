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
    "title": "Groundbreaking AI Algorithm Solves Long-standing Biological Mystery",
    "description": "Researchers have designed an AI tool that can predict protein structures with an unprecedented level of accuracy. The breakthrough could revolutionize medical research and drug discovery.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Empowers Climate Change Solutions",
    "description": "Artificial Intelligence is playing a key role in tackling climate change by optimizing energy usage, predicting weather patterns, and monitoring deforestation.",
    "url": "#",
    "source": "BBC News",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "Tesla Unveils Full Self-driving Beta",
    "description": "Tesla has recently launched a beta version of its full self-driving technology. The new update brings the company closer to its goal of complete vehicle autonomy.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics under Scrutiny: Are We Doing Enough?",
    "description": "As AI continues to evolve, the ethical implications of its use are being closely examined. This includes concerns about privacy, bias, and accountability.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "Adobe Introduces AI-powered Design Tools",
    "description": "Adobe has unveiled a suite of AI-powered tools within its Creative Cloud, aiming to streamline the design process and enhance creativity.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
