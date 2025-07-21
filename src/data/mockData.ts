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
    "title": "AI Breaks New Ground in Disease Prediction",
    "description": "Researchers have developed an AI model capable of predicting the progression of genetic diseases. This breakthrough could revolutionize the medical field, enabling more accurate diagnostics and personalized treatment plans.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "Major Tech Firm Launches AI-Based Customer Service Tool",
    "description": "A leading tech firm has launched an AI-powered tool aimed at improving customer service experiences. The tool utilizes machine learning algorithms to predict customer needs and provide personalized responses.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Secures $100M in Funding",
    "description": "An AI start-up, specializing in autonomous driving technology, has just secured $100 million in Series B funding. This investment underscores the growing interest in AI-driven technologies in the automotive industry.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines Push for Ethical AI Development",
    "description": "In light of recent controversies, a group of researchers and policy makers have released new guidelines for ethical AI development. The guidelines emphasize transparency, accountability, and the avoidance of bias in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Streamlines Data Analysis",
    "description": "A newly released AI tool promises to streamline data analysis, making it more accessible to non-tech professionals. The tool uses machine learning algorithms to automate complex data processing tasks.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
