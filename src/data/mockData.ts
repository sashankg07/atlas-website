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
    "title": "AI Models Predict Future Climate Conditions",
    "description": "Scientists have developed AI models that can effectively predict future climate scenarios. This breakthrough could potentially revolutionize the way we approach climate change.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Chip Revolutionizes Tech Industry",
    "description": "A groundbreaking AI chip has been introduced to the market, boasting unprecedented computational power and energy efficiency. This could redefine the future of tech devices.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "Startup Uses AI to Streamline Supply Chains",
    "description": "A rising startup has harnessed AI to optimize supply chain processes, promising significant savings for businesses. The technology is being hailed as a game-changer for the logistics industry.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI in Law Enforcement",
    "description": "Human rights advocates have raised concerns over the use of AI in law enforcement. The debate centers around privacy issues and potential misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Toolkit Simplifies Machine Learning",
    "description": "A newly-released AI toolkit is democratizing machine learning by making it more accessible for non-experts. The toolkit simplifies the process of building, training, and deploying AI models.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
