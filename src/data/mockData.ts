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
    "title": "Revolutionary AI Algorithm Predicts Climate Change Impact",
    "description": "Researchers have developed a new AI algorithm that can accurately predict the impact of climate change. The system can model potential outcomes with unprecedented precision, contributing significantly to global climate studies.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "October 24, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils AI-Powered Virtual Assistant",
    "description": "A leading tech company has unveiled an AI-powered virtual assistant that understands and responds to natural human language more accurately than ever before. The breakthrough could redefine the way we interact with technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 24, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100 Million in Series B Funding",
    "description": "A promising AI start-up has secured $100 million in Series B funding. The company plans to use the funds to accelerate the development and deployment of its innovative machine learning solutions.",
    "url": "#",
    "source": "Forbes",
    "date": "October 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: New Guidelines for Fairness and Transparency",
    "description": "A renowned global committee has released new guidelines focusing on ethics in AI, highlighting the importance of fairness, accountability and transparency in AI systems. The move aims to ensure that AI technologies are developed and used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A new AI tool is set to revolutionize data analysis, enabling businesses to interpret and utilize their data more effectively. The tool uses machine learning to identify patterns and trends, providing valuable insights for decision-making.",
    "url": "#",
    "source": "MIT News",
    "date": "October 24, 2022",
    "category": "Tools"
  }
];
