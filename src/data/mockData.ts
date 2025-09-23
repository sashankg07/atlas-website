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
    "title": "New Breakthrough in AI Predicts Heart Disease",
    "description": "Researchers have developed an AI model that can predict the onset of heart disease with unprecedented accuracy. This technology will revolutionize preventive care and save countless lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 03, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils AI-Driven Virtual Assistant",
    "description": "A major tech company has launched a new AI-driven virtual assistant that can manage schedules, answer emails, and even make phone calls. The technology is set to redefine productivity in the digital age.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 03, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100 Million in Series B Funding",
    "description": "A promising AI startup has raised $100 million in a Series B funding round. The funds will be used to accelerate the development and deployment of their innovative machine learning platform.",
    "url": "#",
    "source": "Forbes",
    "date": "October 03, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Committee Releases New Guidelines",
    "description": "The International Committee on AI Ethics has released new guidelines to ensure the responsible development and use of artificial intelligence. The guidelines stress transparency, fairness, and accountability in AI applications.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 03, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A new AI tool promises to streamline data analysis, making it easier for businesses to gain insights from large datasets. The tool leverages machine learning to automate and optimize data processing.",
    "url": "#",
    "source": "Wired",
    "date": "October 03, 2022",
    "category": "Tools"
  }
];
