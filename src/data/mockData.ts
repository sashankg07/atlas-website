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
    "title": "AI Outperforms Radiologists in Identifying Lung Cancer",
    "description": "A recent study indicates that AI systems can now identify lung cancer with far greater accuracy than human radiologists. This breakthrough could pave the way for improved early detection and treatment.",
    "url": "#",
    "source": "Nature Journal",
    "date": "September 25, 2022",
    "category": "Research"
  },
  {
    "title": "DeepMind's AI Masters Protein Folding",
    "description": "DeepMind's AlphaFold has made a breakthrough in predicting protein structures, a complex task that has stumped scientists for decades. This could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 25, 2022",
    "category": "Technology"
  },
  {
    "title": "New AI Startup Raises $100M for Business Automation",
    "description": "AI startup, AutomaTech, has raised $100 million in Series A funding to further develop its business process automation capabilities. This illustrates the growing market interest in AI-driven business solutions.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 25, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Concerns Rise with Facial Recognition Misuse",
    "description": "Concerns over the ethical use of AI technology are rising as reports of misuse of facial recognition software increase. Regulating bodies around the world are being urged to establish stricter rules and guidelines.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 25, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Processing Tool",
    "description": "OpenAI has released a new language processing tool that can generate human-like text. The tool is expected to have a wide range of applications, from content creation to customer service automation.",
    "url": "#",
    "source": "Wired",
    "date": "September 25, 2022",
    "category": "Tools"
  }
];
