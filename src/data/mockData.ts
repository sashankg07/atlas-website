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
    "title": "AI Model Predicts Future of Global Climate Change",
    "description": "Researchers have devised an AI model that can accurately predict future patterns in global climate change. The model uses historical climate data and current trends to predict future changes, making it a vital tool for climate scientists.",
    "url": "#",
    "source": "Nature",
    "date": "November 09, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: Revolutionizing Patient Care",
    "description": "AI is transforming the healthcare industry by enabling early detection of diseases and personalized treatment plans. The technology is also helping in the development of telemedicine, a growing trend in the healthcare sector.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 09, 2021",
    "category": "Technology"
  },
  {
    "title": "Startup Raises $100M to Develop AI-Based Marketing Tools",
    "description": "A tech startup has raised $100 million in Series B funding to develop AI-powered marketing tools. The tools aim to help businesses maximize their marketing efforts by utilizing AI to predict consumer behaviour.",
    "url": "#",
    "source": "Forbes",
    "date": "November 09, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Ethics Guidelines Released to Govern AI Development",
    "description": "New guidelines have been released to govern the ethical development and use of AI. The guidelines aim to ensure that AI is developed and used responsibly, and that it does not exacerbate existing societal inequalities.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 09, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New AI Coding Tool",
    "description": "OpenAI has released a new AI-powered coding tool. The tool is designed to help developers write code more efficiently by predicting what they want to type next.",
    "url": "#",
    "source": "The Verge",
    "date": "November 09, 2021",
    "category": "Tools"
  }
];
