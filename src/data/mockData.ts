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
    "title": "New AI Algorithm Transforms Healthcare Diagnostics",
    "description": "Researchers have developed a groundbreaking AI algorithm capable of predicting disease outcomes with unprecedented accuracy. This development could revolutionize the healthcare industry by enhancing early detection and treatment planning.",
    "url": "#",
    "source": "The AI Journal",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots Set to Transform Manufacturing Industry",
    "description": "AI technology is being integrated into industrial robots, promising a surge in productivity and efficiency in manufacturing sectors. This is anticipated to reshape workflows and redefine industry standards.",
    "url": "#",
    "source": "AI Daily",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Secures $100 Million Investment for Expansion",
    "description": "An AI start-up specializing in autonomous vehicles has recently secured a $100 million investment. The funding will be used to scale operations and explore new markets, marking a significant step in the company's growth.",
    "url": "#",
    "source": "AI Business News",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI's Role in Law Enforcement",
    "description": "Recent use of AI technology in law enforcement has sparked a debate about privacy and fairness. Critics argue that without proper checks and balances, AI could lead to potential bias and misuse.",
    "url": "#",
    "source": "AI Ethics Weekly",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "New Open-Source AI Tool Aims to Simplify Machine Learning",
    "description": "A new open-source tool designed to simplify the process of building and deploying machine learning models has been launched. This tool will make AI technology more accessible and easier to implement across different sectors.",
    "url": "#",
    "source": "AI Tools Review",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
