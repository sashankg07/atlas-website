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
    "title": "Using AI for Climate Change Mitigation: A Breakthrough",
    "description": "Scientists have developed a new AI model that accurately predicts the impacts of climate change, allowing for more effective mitigation strategies. This breakthrough highlights the growing role of AI in environmental conservation.",
    "url": "#",
    "source": "Nature AI Journal",
    "date": "March 12, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots Transforming the Retail Industry",
    "description": "AI-powered robots are revolutionizing the retail industry, driving efficiency and improving customer experiences. These robots can restock shelves, manage inventory, and even provide customer service.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 12, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M in Series B Funding",
    "description": "AI startup, DataMind, has raised $100 million in Series B funding to further develop its machine learning algorithms. This funding round highlights the increasing interest of venture capitalists in AI technologies.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "March 12, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Debate Over AI Ethics Intensifies",
    "description": "As AI continues to evolve, so do concerns about its ethical implications. The debate over the use and potential misuse of AI is intensifying, with calls for stricter regulations and more transparency.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 12, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool for Accurate Disease Diagnosis",
    "description": "MedTech has launched a new AI tool that enhances the accuracy of disease diagnosis. This tool uses machine learning algorithms to analyze patient data and provide diagnosis in real-time.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "March 12, 2022",
    "category": "Tools"
  }
];
