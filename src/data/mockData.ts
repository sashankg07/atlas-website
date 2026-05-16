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
    "title": "AI beats human doctors in diagnosing certain diseases",
    "description": "According to recent studies, Artificial Intelligence has shown more accurate results than human doctors in diagnosing certain diseases. The technology is poised to revolutionize the medical field and improve patient outcomes.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "Major tech firm announces AI-powered coding assistant",
    "description": "A major tech firm has released an AI-powered coding assistant designed to help developers write better code. The tool uses machine learning to suggest improvements and identify potential errors.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI transforms the global supply chain",
    "description": "Artificial Intelligence is revolutionizing the global supply chain by helping businesses predict demand, optimize logistics, and manage inventories. This could potentially save companies millions of dollars in operational costs.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical considerations in AI face recognition technology",
    "description": "As AI technology advances, ethical considerations are becoming increasingly important. Recent debates have focused on the use of AI in face recognition technology and the potential impacts on privacy.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI toolset released for building intelligent bots",
    "description": "A new suite of AI tools has been released for building intelligent bots. The tools aim to make it easier for developers to build, test, and deploy AI-powered bots.",
    "url": "#",
    "source": "Wired",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
