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
    "title": "AI Breakthrough: Neural Networks Predict Natural Disasters",
    "description": "Researchers have developed a new AI system capable of predicting natural disasters. Utilizing neural networks, it may revolutionize the disaster management sector.",
    "url": "#",
    "source": "The AI Times",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: Revolutionizing Early Disease Detection",
    "description": "Artificial intelligence is transforming the healthcare sector with its potential for early disease detection. Innovations in AI algorithms are making it possible to diagnose conditions before they become severe.",
    "url": "#",
    "source": "AI Today",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $50M for AI-Powered Customer Service",
    "description": "A new AI startup has raised $50M in series B funding. The company uses AI to enhance customer service, promising a more efficient and personalized experience for users.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: Balancing Privacy and Innovation",
    "description": "As AI continues to evolve, so do concerns about privacy. Experts are grappling with how to strike a balance between AI innovation and the need to protect individual privacy.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool: Transforming Data Analysis",
    "description": "A new AI tool promises to revolutionize data analysis. The tool uses machine learning algorithms to analyze and interpret large data sets more efficiently and accurately.",
    "url": "#",
    "source": "The Verge",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
