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
    "title": "AI Now Capable of Diagnosing Rare Diseases at Unprecedented Rate",
    "description": "Artificial intelligence continues to revolutionize the healthcare industry, now identifying and diagnosing rare diseases with remarkable accuracy. This breakthrough technology promises to dramatically improve patient outcomes and healthcare efficiency.",
    "url": "#",
    "source": "The Boston Globe",
    "date": "October 17, 2022",
    "category": "Research"
  },
  {
    "title": "Innovative AI Tools Propel Small Businesses Into the Future",
    "description": "Small businesses are leveraging the power of AI to streamline operations and increase customer engagement. The new wave of AI tools is proving to be a game-changer, providing cost-effective solutions to common business challenges.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 17, 2022",
    "category": "Business"
  },
  {
    "title": "Emerging AI Ethics Concerns Stir Debate Among Tech Giants",
    "description": "As AI continues to evolve, ethical concerns surface regarding privacy and decision-making. Leading tech companies are now engaged in a crucial conversation about establishing AI ethical guidelines and regulations.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 17, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Transforms Renewable Energy Management",
    "description": "In the quest for sustainable energy, AI is playing a pivotal role. New developments in AI technology are making it possible to optimize the management and distribution of renewable energy sources.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 17, 2022",
    "category": "Technology"
  },
  {
    "title": "New AI Learning Platform Revolutionizes Education",
    "description": "A novel AI-based platform is redefining how students learn, providing personalized learning paths and real-time feedback. This revolutionary tool promises to reshape education and facilitate remote learning.",
    "url": "#",
    "source": "The Washington Post",
    "date": "October 17, 2022",
    "category": "Tools"
  }
];
