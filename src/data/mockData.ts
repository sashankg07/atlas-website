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
    "title": "AI Breaks New Ground in Climate Change Predictions",
    "description": "Researchers have developed an advanced AI model that accurately predicts climate changes. The breakthrough could significantly improve our understanding of global warming trends.",
    "url": "#",
    "source": "Nature",
    "date": "March 22, 2023",
    "category": "Research"
  },
  {
    "title": "Revolutionizing Healthcare: AI in Disease Diagnosis",
    "description": "A new artificial intelligence tool has shown promising results in diagnosing diseases at their early stages, potentially saving millions of lives and revolutionizing healthcare.",
    "url": "#",
    "source": "The New York Times",
    "date": "March 22, 2023",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Unveils AI-powered Virtual Assistant",
    "description": "A leading tech company has unveiled a new AI-powered virtual assistant that promises to redefine customer service. The assistant can understand and respond to complex inquiries in real time.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 22, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Criminal Justice: Ethical Implications",
    "description": "The rise of AI in criminal justice has sparked significant ethical debates. Critics argue the technology could exacerbate systemic biases, while supporters highlight its potential to improve efficiency.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 22, 2023",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Streamlines Software Development Process",
    "description": "A new AI tool is making waves in the tech industry by streamlining the software development process. The tool uses machine learning to automate and optimize various aspects of coding.",
    "url": "#",
    "source": "Wired",
    "date": "March 22, 2023",
    "category": "Tools"
  }
];
