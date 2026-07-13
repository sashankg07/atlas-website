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
    "title": "AI Breaks Ground in Predicting Climate Change",
    "description": "Researchers have developed a new AI model that can predict the effects of climate change with unprecedented accuracy. The system uses machine learning to analyze complex simulations faster and more accurately than traditional methods.",
    "url": "#",
    "source": "Nature",
    "date": "November 03, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes the Healthcare Industry",
    "description": "Artificial Intelligence is playing a crucial role in the fight against COVID-19, with new AI tools assisting in diagnosing and treating patients. This technology is set to revolutionize healthcare as we know it.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 03, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI Startups",
    "description": "A leading tech company has announced a multi-billion dollar investment in AI startups. The move signals a growing interest in AI solutions within the business sector and will likely spur further innovation.",
    "url": "#",
    "source": "Forbes",
    "date": "November 03, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Innovation and Regulation",
    "description": "As AI technology continues to advance, experts call for greater focus on ethical considerations. The challenge lies in balancing the need for innovation with the importance of regulation to prevent misuse.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 03, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A new AI tool is making waves in the world of data analysis. The tool uses machine learning to interpret complex data sets and has the potential to revolutionize many industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 03, 2021",
    "category": "Tools"
  }
];
