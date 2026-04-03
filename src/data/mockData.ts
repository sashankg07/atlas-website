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
    "description": "Artificial Intelligence technology is now being used to generate more accurate climate change predictions. Researchers have created a model that predicts climate patterns with unprecedented accuracy.",
    "url": "#",
    "source": "Nature",
    "date": "September 29, 2023",
    "category": "Research"
  },
  {
    "title": "Tech Giant Releases AI-Powered Virtual Assistant",
    "description": "Tech giant has released a new AI-powered virtual assistant that promises to revolutionize user interaction. The assistant is capable of understanding and responding to complex queries with a human-like understanding.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2023",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $50M in Series B Funding",
    "description": "A promising AI startup has just raised $50 million in Series B funding. The company aims to use the funding to further develop their innovative machine learning platforms.",
    "url": "#",
    "source": "Forbes",
    "date": "September 29, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI Facial Recognition",
    "description": "Recent developments in AI facial recognition technology have raised significant ethical concerns. Critics argue that the technology, if misused, could lead to unprecedented invasions of privacy.",
    "url": "#",
    "source": "The Economist",
    "date": "September 29, 2023",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Text into Visualizations",
    "description": "A newly-released AI tool can transform written text into complex visualizations, aiding in data analysis. The tool opens up new possibilities for researchers and data scientists.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 29, 2023",
    "category": "Tools"
  }
];
