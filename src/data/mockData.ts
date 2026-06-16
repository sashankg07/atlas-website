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
    "title": "Breakthrough in AI Language Processing: Computers Now Understand Sarcasm",
    "description": "Researchers have developed an AI model capable of understanding sarcasm, marking a significant breakthrough in natural language processing. This could lead to more nuanced and effective communication between humans and AI.",
    "url": "#",
    "source": "The New York Times",
    "date": "March 22, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: Revolutionizing Patient Care",
    "description": "AI-driven technologies are transforming the healthcare sector, from diagnosis to patient care and follow-ups. The use of AI promises to improve precision and efficiency in healthcare.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "March 22, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M to Democratize Machine Learning",
    "description": "AI startup, AlphaTech, has raised $100 million in Series C funding. The funds will be used to make machine learning accessible to businesses of all sizes.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 22, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: Balancing Innovation with Accountability",
    "description": "As AI continues to evolve, ethical concerns are coming to the forefront. The industry is grappling with questions of accountability, transparency, and the potential misuse of AI.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 22, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A new AI tool can predict the impact of climate change with unprecedented accuracy. The tool could be instrumental in planning and decision-making processes globally.",
    "url": "#",
    "source": "BBC News",
    "date": "March 22, 2022",
    "category": "Tools"
  }
];
