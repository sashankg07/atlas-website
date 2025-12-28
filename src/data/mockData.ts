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
    "title": "Groundbreaking AI Tool Predicts Climate Change Impact",
    "description": "New AI technology has been developed that can predict the impact of climate change with remarkable accuracy. The tool uses machine learning algorithms to analyze patterns and trends, providing valuable data to climate scientists.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 22, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes Healthcare with Personalized Treatment Plans",
    "description": "AI is transforming the healthcare industry by developing personalized treatment plans for patients. The technology uses data analysis and predictive modeling to determine the most effective treatment options.",
    "url": "#",
    "source": "BBC News",
    "date": "November 22, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI for Business Innovation",
    "description": "A leading technology company has announced a multi-billion dollar investment in AI. The company aims to leverage AI for innovative business solutions, driving efficiency and growth.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 22, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Exploring the Ethical Implications of AI in Law Enforcement",
    "description": "As AI becomes increasingly prevalent in law enforcement, concerns are being raised about its ethical implications. Experts are calling for clear guidelines and regulations to ensure the technology is used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 22, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Software Development Process",
    "description": "A new AI tool has been launched that promises to streamline the software development process. The tool uses machine learning to automate tasks, increasing productivity and reducing errors.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 22, 2021",
    "category": "Tools"
  }
];
