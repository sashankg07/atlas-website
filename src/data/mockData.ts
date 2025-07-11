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
    "title": "AI Breaks New Ground in Predicting Alzheimer's",
    "description": "Researchers have developed an AI capable of predicting the onset of Alzheimer's disease years in advance. This breakthrough could revolutionize early detection and treatment approaches.",
    "url": "#",
    "source": "Nature Neuroscience",
    "date": "October 18, 2022",
    "category": "Research"
  },
  {
    "title": "AI Drives Innovation in Green Energy",
    "description": "A new report highlights how AI is paving the way for clean energy solutions, from optimizing renewable energy production to forecasting energy demand.",
    "url": "#",
    "source": "The Economist",
    "date": "October 18, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100 Million in Funding",
    "description": "An AI startup, focusing on developing cognitive automation solutions, has raised a whopping $100 million in Series B funding. The funds will be used to expand the company's AI capabilities.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 18, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Implications of AI in Warfare",
    "description": "A new study explores the ethical concerns surrounding the increasing use of AI in military operations, shedding light on the potential risks and challenges.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 18, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Customer Service",
    "description": "A groundbreaking AI tool is transforming the customer service industry by providing real-time transcription and sentiment analysis during customer interactions.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 18, 2022",
    "category": "Tools"
  }
];
