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
    "title": "AI Revolutionizes Medical Imaging with Deep Learning Algorithms",
    "description": "Artificial Intelligence is set to transform the field of medical imaging with the introduction of deep learning algorithms capable of diagnosing diseases with unprecedented accuracy. This breakthrough promises to significantly improve healthcare outcomes.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 28, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Race to Develop AI-Powered Voice Assistants",
    "description": "Leading technology companies are in a fierce competition to develop the most advanced AI-powered voice assistants. These digital companions are becoming increasingly sophisticated, transforming the way we interact with technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 28, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises Millions in Series B Funding",
    "description": "An AI startup specializing in automated customer service solutions has successfully raised millions in its latest funding round. This innovative company aims to revolutionize customer interactions with AI.",
    "url": "#",
    "source": "Forbes",
    "date": "September 28, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate Intensifies in Wake of Latest Developments",
    "description": "The debate surrounding the ethics of AI is gaining momentum as the technology continues to advance. Critics call for stronger regulatory frameworks to address potential misuse and bias in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 28, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A new AI tool promises to simplify data analysis, allowing businesses to extract valuable insights from their data more efficiently. This tool uses machine learning to automate complex analytical tasks.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 28, 2021",
    "category": "Tools"
  }
];
