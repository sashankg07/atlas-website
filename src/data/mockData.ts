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
    "title": "AI Powers New Breakthrough in Cancer Detection",
    "description": "Researchers have developed a new AI system capable of detecting certain types of cancer up to a year earlier than current methods. This breakthrough could revolutionize early cancer detection and treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 29, 2021",
    "category": "Research"
  },
  {
    "title": "The Era of AI-Powered Robots: Trends and Developments",
    "description": "Innovations in AI are powering advanced robotic technologies that can learn, adapt, and perform tasks with unprecedented efficiency. This article explores the latest trends and developments in AI-powered robotics.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Transforming the Retail Sector",
    "description": "AI is increasingly being used in the retail sector for inventory management, customer service, and personalized marketing, leading to increased efficiency and customer engagement.",
    "url": "#",
    "source": "Bloomberg",
    "date": "November 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding the Use of Facial Recognition AI",
    "description": "As facial recognition AI becomes more prevalent, concerns about privacy and misidentification are growing. Experts discuss the ethical implications and call for comprehensive regulation.",
    "url": "#",
    "source": "BBC News",
    "date": "November 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Promises to Speed Up Data Analysis",
    "description": "A newly developed AI tool aims to drastically reduce the time taken for data analysis, offering a significant boon for researchers and businesses dealing with large data sets.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 29, 2021",
    "category": "Tools"
  }
];
