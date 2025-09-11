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
    "description": "Researchers have developed an AI model capable of predicting climate change patterns with unprecedented accuracy. This breakthrough could greatly assist in formulating proactive strategies to combat global warming.",
    "url": "#",
    "source": "Nature",
    "date": "October 25, 2021",
    "category": "Research"
  },
  {
    "title": "AI-driven Customer Service Bots Revolutionize Retail Industry",
    "description": "With the advent of sophisticated AI technologies, customer service bots are transforming the retail industry. Retailers are now able to provide personalized, 24/7 customer service, dramatically enhancing customer experience.",
    "url": "#",
    "source": "Forbes",
    "date": "October 25, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics Guidelines Need to Tackle Real-World Problems",
    "description": "In the wake of rapidly evolving AI technologies, experts argue that AI ethics guidelines need to address pressing real-world issues, such as privacy, bias, and transparency, to ensure responsible AI development and use.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 25, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Beats Humans at Popular Strategy Game",
    "description": "A new AI model has achieved a milestone by outperforming humans in a popular strategy video game. This achievement represents a significant step forward in the development of AI capabilities.",
    "url": "#",
    "source": "The Verge",
    "date": "October 25, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning Process",
    "description": "A newly developed AI tool promises to simplify the machine learning process, enabling even beginners to leverage AI. This tool has the potential to democratize access to AI technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 25, 2021",
    "category": "Tools"
  }
];
