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
    "title": "AI Revolutionizes Drug Discovery, Promises Faster Results",
    "description": "Artificial Intelligence is reshaping the pharmaceutical industry by accelerating the drug discovery process. Researchers believe this could drastically reduce the time and cost of bringing new drugs to market.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 28, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Algorithm Predicts Climate Change Impact with Unprecedented Accuracy",
    "description": "A groundbreaking AI algorithm has been developed that can predict the impact of climate change with a degree of accuracy previously unseen. This development could be a game-changer in environmental policy planning.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 28, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI for Autonomous Vehicles",
    "description": "A leading technology company has announced a multi-billion dollar investment in AI to further develop their autonomous vehicle technology. This move signifies the growing trend of AI integration in the automotive industry.",
    "url": "#",
    "source": "Bloomberg",
    "date": "September 28, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Growing Concern",
    "description": "As AI continues to evolve and permeate various industries, ethical considerations are becoming increasingly important. Experts weigh in on the need for comprehensive guidelines to ensure responsible AI development and usage.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 28, 2021",
    "category": "Ethics"
  },
  {
    "title": "Latest AI Tools Enable Real-time Language Translation",
    "description": "New AI-based tools are breaking down language barriers by providing real-time translation services. This innovation is expected to revolutionize communication in multinational businesses and educational institutions.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "September 28, 2021",
    "category": "Tools"
  }
];
