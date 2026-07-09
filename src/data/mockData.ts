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
    "title": "AI System Outperforms Humans in Protein Folding Challenge",
    "description": "Google's DeepMind has developed an AI capable of predicting the 3D structures of proteins, a breakthrough that could revolutionize the field of biomedicine. The AI model, AlphaFold, has outperformed its human counterparts in a global competition.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "June 15, 2022",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes Predictive Maintenance in Manufacturing",
    "description": "IBM has unveiled a new AI system that can predict machine failures with unprecedented accuracy. The advancement could save billions in maintenance costs for the manufacturing industry.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "June 15, 2022",
    "category": "Technology"
  },
  {
    "title": "Amazon's Latest AI Tool Aims to Improve Customer Experience",
    "description": "Amazon has introduced a new AI tool that provides personalized recommendations to customers based on their shopping behavior. The move is expected to significantly boost sales and customer satisfaction.",
    "url": "#",
    "source": "TechCrunch",
    "date": "June 15, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Debate Heats up on AI Ethics and Privacy Concerns",
    "description": "As AI adoption increases, so do concerns about ethics and privacy. Experts are calling for more transparency and regulation to ensure AI technologies are used responsibly.",
    "url": "#",
    "source": "The New York Times",
    "date": "June 15, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI's New Language Model GPT-4 Shakes Up the AI World",
    "description": "OpenAI has released GPT-4, its latest language model that can generate remarkably human-like text. The tool is expected to have wide-ranging applications, from content creation to customer service.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "June 15, 2022",
    "category": "Tools"
  }
];
