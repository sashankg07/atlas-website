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
    "title": "Revolutionizing Medicine: AI Predicts Heart Failure Risk",
    "description": "A groundbreaking AI model developed by researchers is now capable of predicting the risk of heart failure with remarkable accuracy. This pioneering technology could change the future of cardiology.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 20, 2022",
    "category": "Research"
  },
  {
    "title": "AI Helps Solve Climate Crisis: Breakthrough in Carbon Capture Technology",
    "description": "In a world-first, scientists have used AI to develop an efficient and cost-effective carbon capture solution. The technology could drastically cut greenhouse gas emissions and help combat global warming.",
    "url": "#",
    "source": "BBC News",
    "date": "October 20, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Acquired for $2B: A New Era for Autonomous Vehicles",
    "description": "In a landmark deal, a leading tech company has acquired an AI startup specializing in autonomous vehicles. The deal, worth $2 billion, is expected to expedite the mass adoption of self-driving cars.",
    "url": "#",
    "source": "Forbes",
    "date": "October 20, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: New Legislation to Regulate Bias in AI Systems",
    "description": "In a move towards more equitable AI, lawmakers have proposed new legislation to tackle bias in AI systems. The law aims to create a more fair and transparent AI environment.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 20, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Toolkit Unveiled: Boosting Efficiency for Developers",
    "description": "A new AI toolkit has been launched, designed to boost productivity and efficiency for AI developers. The toolkit offers a range of features, including pre-trained models and advanced analytics.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 20, 2022",
    "category": "Tools"
  }
];
