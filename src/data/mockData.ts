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
    "title": "IBM Unveils Breakthrough in Quantum Computing",
    "description": "IBM has achieved a significant milestone in quantum computing. The company's quantum computer has successfully solved a problem that classical computers cannot.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 28, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Predicts Climate Change Effects More Accurately",
    "description": "Researchers have leveraged artificial intelligence to predict the effects of climate change with unprecedented accuracy. The AI model could provide critical insights for future environmental policies.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 28, 2021",
    "category": "Research"
  },
  {
    "title": "Google's DeepMind Solves 50-Year-Old Biology Challenge",
    "description": "Google's AI lab, DeepMind, has cracked a five-decade-old challenge in biology. The AI's ability to predict protein folding could revolutionize drug design.",
    "url": "#",
    "source": "BBC News",
    "date": "September 28, 2021",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Ethics Guidelines Released by IEEE",
    "description": "The Institute of Electrical and Electronics Engineers (IEEE) has released a new set of guidelines for AI ethics. The guidelines aim to promote transparency, accountability, and user autonomy in AI systems.",
    "url": "#",
    "source": "IEEE Spectrum",
    "date": "September 28, 2021",
    "category": "Ethics"
  },
  {
    "title": "Nvidia's New AI Tools Transform 2D Images into 3D Models",
    "description": "Nvidia has introduced a suite of AI tools that can transform 2D images into 3D models. The breakthrough could have wide-ranging applications in gaming, virtual reality, and design.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 28, 2021",
    "category": "Tools"
  }
];
