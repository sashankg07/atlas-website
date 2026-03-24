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
    "title": "Revolutionizing Healthcare: AI Detects Heart Disease from Eye Scans",
    "description": "Researchers have developed an AI model capable of detecting early signs of heart disease through retinal scans, potentially transforming preventative healthcare. The model uses deep learning to analyze images and identify patterns associated with heart disease.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Startup Hike.ai Raises $50M in Series B Funding",
    "description": "AI startup Hike.ai has secured $50 million in Series B funding to accelerate the development of its machine learning platform. The funding will enable the company to expand its team and scale its operations.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Establishing Fairness in Algorithmic Decision Making",
    "description": "A new report has highlighted the need for fairness in algorithmic decision-making. It discusses the ethical implications of AI and offers recommendations for ensuring equitable outcomes.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-Powered Drones: The Future of Delivery Services",
    "description": "AI-powered drones are revolutionizing the delivery industry, offering faster and more efficient services. These autonomous drones are expected to be the future of package delivery.",
    "url": "#",
    "source": "CNN Business",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis Process",
    "description": "A new AI tool promises to streamline the data analysis process, making it more accessible to non-technical users. This tool uses machine learning to automate the data interpretation process, providing insights in real time.",
    "url": "#",
    "source": "Wired",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
