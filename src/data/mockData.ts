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
    "title": "AI Transforms Healthcare: A New Era of Diagnosis",
    "description": "Researchers have developed an AI that can predict health risks with unprecedented accuracy. The model uses personal health data to forecast potential future complications, revolutionizing the healthcare industry.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 24, 2021",
    "category": "Research"
  },
  {
    "title": "Leading Tech Firm Unveils Next-Gen AI Chip",
    "description": "A prominent tech firm has revealed its latest AI chip, promising a significant leap in processing power. The chip is set to redefine the capabilities of AI applications across various industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 24, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $50M in Series B Funding",
    "description": "An AI startup specializing in autonomous driving technology has successfully raised $50 million in Series B funding. The funding will boost the startup's efforts to roll out its technology on a global scale.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 24, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines for AI Ethics Proposed",
    "description": "In response to growing concerns over AI misuse, a leading ethics authority has proposed new guidelines. These aim to provide a framework for ethical AI development and use.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 24, 2021",
    "category": "Ethics"
  },
  {
    "title": "Innovative AI Tool Streamlines Data Analysis",
    "description": "An innovative AI tool has been launched that drastically simplifies data analysis. The tool uses machine learning to provide accurate and efficient analysis, promising to save businesses vast amounts of time and resources.",
    "url": "#",
    "source": "Forbes",
    "date": "October 24, 2021",
    "category": "Tools"
  }
];
