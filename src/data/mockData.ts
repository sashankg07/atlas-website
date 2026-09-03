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
    "title": "AI Now Capable of Predicting Heart Disease with Unheard-of Accuracy",
    "description": "Researchers have developed an AI model that can predict heart disease with greater precision than ever before. The tool is expected to revolutionize preventative cardiology.",
    "url": "#",
    "source": "Nature Biomedical Engineering",
    "date": "December 15, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Technology Powers Self-Driving Cars to Navigate Without GPS",
    "description": "A new AI system was unveiled recently, endowed with the capability to navigate self-driving cars without relying on GPS. This breakthrough can potentially transform the autonomous vehicle industry.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 15, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $200 Million for Expansion",
    "description": "In a Series C funding round, AI start-up has raised $200 million to expand its operations globally. The company specializes in AI solutions for healthcare.",
    "url": "#",
    "source": "Forbes",
    "date": "December 15, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Considerations of AI in Law Enforcement",
    "description": "With AI increasingly used in law enforcement, questions about its ethical implications are growing. Critics argue that bias and lack of transparency are major concerns.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 15, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Model API",
    "description": "OpenAI has released a new API for its cutting-edge language model. The tool is expected to drastically improve natural language processing capabilities.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "December 15, 2021",
    "category": "Tools"
  }
];
