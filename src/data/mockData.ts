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
    "title": "Groundbreaking AI Software Transforms Healthcare Diagnostics",
    "description": "New artificial intelligence software is revolutionizing healthcare diagnostics, drastically reducing the time taken to process patient data. The AI system can analyze and interpret complex medical data in seconds, contributing to faster and more accurate diagnoses.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 11, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Ethics: Striking a Balance Between Innovation and Regulation",
    "description": "As AI technologies become more advanced, questions about ethical implications grow. Policymakers and technologists are grappling to strike the right balance between innovation and ethical considerations.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 11, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Research Breakthrough Achieves Human-like Learning Abilities",
    "description": "A significant development in artificial intelligence research has led to an AI model that mimics human learning abilities. The model can understand context, adapt to new situations, and even learn from its mistakes.",
    "url": "#",
    "source": "Nature",
    "date": "October 11, 2021",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Start-up Acquired for $1.5 Billion: A New Era in Business",
    "description": "In a landmark deal, a leading AI start-up has been acquired for a staggering $1.5 billion, signaling a new era for business and AI integration. The acquisition highlights the growing value of AI in the business world.",
    "url": "#",
    "source": "Forbes",
    "date": "October 11, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tools Transforming Data Analysis",
    "description": "Cutting-edge AI tools are transforming the way companies handle data. These tools allow for more efficient data processing, predictive analytics, and generating actionable insights from raw data.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 11, 2021",
    "category": "Tools"
  }
];
