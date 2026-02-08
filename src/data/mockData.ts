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
    "title": "AI Revolutionizes Healthcare with Predictive Analysis",
    "description": "Artificial Intelligence is making strides in the healthcare sector with predictive analysis capabilities. It's now possible to foresee health risks and provide proactive care, potentially saving millions of lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 10, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Research Aims to Enhance Natural Language Processing",
    "description": "A team of scientists have developed a groundbreaking AI model to improve Natural Language Processing. This model can better understand and generate human-like text, promising improvements in communication technology.",
    "url": "#",
    "source": "Science Daily",
    "date": "October 10, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Business: Innovative Solutions for Retail Industries",
    "description": "New AI tools are assisting retail businesses in inventory management, customer service, and predictive sales analysis. These advancements are propelling the retail industry into a new era of efficiency.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 10, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Implications of AI: A Global Conversation",
    "description": "As AI continues to evolve, ethical questions arise. A global conversation on AI ethics has begun, focusing on privacy, bias, and the potential implications of AI decision-making.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 10, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Transforming the Landscape of Data Analysis",
    "description": "Cutting-edge AI tools are changing the way businesses handle data. These tools offer superior data analysis, leading to more informed business decisions and strategies.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 10, 2021",
    "category": "Tools"
  }
];
