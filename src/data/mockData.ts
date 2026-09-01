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
    "title": "AI Breakthrough: Machine Learning Used to Predict Alzheimer's Years in Advance",
    "description": "Researchers have developed a groundbreaking AI model that can predict Alzheimer's disease years before symptoms appear. The technology could revolutionize early detection and treatment approaches.",
    "url": "#",
    "source": "Nature Neuroscience",
    "date": "November 22, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Invests Billions in AI to Streamline Operations",
    "description": "A leading tech corporation has announced a major investment in AI to improve its internal operations. The company aims to leverage machine learning to optimize efficiency and productivity.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 22, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: The Urgent Need for AI Regulation",
    "description": "As AI continues to evolve, industry experts are calling for more robust regulations. The goal is to ensure responsible AI use and to prevent misuse of the technology.",
    "url": "#",
    "source": "The Verge",
    "date": "November 22, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Unveiling New AI Tool that Simplifies Data Analysis",
    "description": "A new AI tool has been launched that simplifies complex data analysis. The tool uses machine learning to provide actionable insights, with the potential to transform data-driven decision making.",
    "url": "#",
    "source": "AI Magazine",
    "date": "November 22, 2021",
    "category": "Tools"
  },
  {
    "title": "Groundbreaking AI Technology Powers Self-Driving Cars",
    "description": "New advancements in AI technology are driving the development of self-driving cars. The technology is expected to revolutionize the transportation industry by offering safer and more efficient alternatives to human-driven vehicles.",
    "url": "#",
    "source": "WIRED",
    "date": "November 22, 2021",
    "category": "Technology"
  }
];
