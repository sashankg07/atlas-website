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
    "title": "AI Revolutionizes Medical Diagnostics",
    "description": "A new AI system has been developed that can diagnose diseases with higher accuracy than human doctors. This breakthrough could revolutionize the medical field, enabling quicker and more accurate patient care.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 06, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots: The Future of Manufacturing",
    "description": "AI-powered robots are transforming the manufacturing industry by increasing efficiency and reducing errors. These robots are capable of learning and adapting to new tasks, making them a game changer in the industry.",
    "url": "#",
    "source": "Forbes",
    "date": "November 06, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Finance: The Next Big Wave of Innovation",
    "description": "Financial institutions are increasingly turning to AI to improve their services and operations. From risk assessment to customer service, AI is proving to be a disruptive force in the finance sector.",
    "url": "#",
    "source": "Financial Times",
    "date": "November 06, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Implications of AI in Surveillance",
    "description": "As AI becomes more prevalent in surveillance systems, there are growing concerns about privacy and consent. Experts are calling for regulations to prevent misuse and protect individual rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 06, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transforming the Creative Industry",
    "description": "AI tools are providing creatives with unprecedented capabilities, from AI-assisted design to content generation. These tools are not only enhancing creativity but also transforming the creative process itself.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 06, 2021",
    "category": "Tools"
  }
];
