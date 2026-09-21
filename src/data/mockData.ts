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
    "title": "AI Breaks New Ground in Disease Diagnosis",
    "description": "Researchers have developed an AI model capable of diagnosing diseases with higher accuracy than human doctors. This breakthrough could revolutionize healthcare, making diagnosis faster and more reliable.",
    "url": "#",
    "source": "The Medical Journal",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils AI-Powered Virtual Assistant",
    "description": "A leading technology company has launched a new AI-powered virtual assistant that promises to redefine user experience. The assistant leverages AI to understand and anticipate user needs more accurately.",
    "url": "#",
    "source": "Tech Insider",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M in Series B Funding",
    "description": "An AI startup focusing on autonomous vehicles has raised $100 million in its latest funding round. The funds will be used to accelerate the development and deployment of their technology.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Legislation Addresses AI Ethics Concerns",
    "description": "New legislation has been proposed to tackle the ethical implications of AI use. The bill aims to set guidelines on AI use to ensure it is developed and applied in a manner respecting human rights and privacy.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "Latest AI Tools Transforming Data Analysis",
    "description": "The new wave of AI-powered tools is revolutionizing data analysis, enabling businesses to interpret vast amounts of data more swiftly and accurately, thus providing valuable insights to drive decision-making.",
    "url": "#",
    "source": "Data Science Weekly",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
