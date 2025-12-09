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
    "title": "AI Breaks Ground in Early Disease Detection",
    "description": "Researchers have developed an AI model capable of predicting the onset of diseases earlier than traditional methods. This groundbreaking advancement could revolutionize healthcare diagnostics and treatment plans.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 23, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Chip Revolutionizes Tech Industry",
    "description": "A tech company has unveiled a new AI chip that offers unprecedented processing power. This development could significantly enhance AI application capabilities and performance across various industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 23, 2022",
    "category": "Technology"
  },
  {
    "title": "AI in Business: A Game Changer for Data Analytics",
    "description": "Businesses are increasingly leveraging AI technologies for data analytics to gain deeper insights and drive strategic decision-making. This trend is transforming the landscape of business intelligence.",
    "url": "#",
    "source": "Forbes",
    "date": "September 23, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Benefits and Risks",
    "description": "As AI becomes more integrated into our lives, ethical implications arise. Addressing these concerns effectively is of paramount importance to ensure the responsible use of AI.",
    "url": "#",
    "source": "BBC News",
    "date": "September 23, 2022",
    "category": "Ethics"
  },
  {
    "title": "Innovative AI Tools Transforming Content Creation",
    "description": "New AI-powered tools are revolutionizing content creation, offering capabilities from generating written content to creating visual designs. These tools are making content production more efficient and accessible.",
    "url": "#",
    "source": "Wired",
    "date": "September 23, 2022",
    "category": "Tools"
  }
];
