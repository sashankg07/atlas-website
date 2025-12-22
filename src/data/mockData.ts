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
    "title": "AI Revolutionizes Drug Discovery",
    "description": "Artificial Intelligence is rapidly becoming a valuable tool in the race for novel drug discovery. Innovative algorithms are speeding up the process and significantly reducing costs.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 05, 2021",
    "category": "Research"
  },
  {
    "title": "Autonomous Vehicles: AI is Taking the Wheel",
    "description": "With recent advancements in AI and machine learning, autonomous vehicles are becoming a realistic prospect for the near future. These technologies are set to revolutionize the transportation industry.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 05, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Agriculture: A Solution for Sustainable Farming",
    "description": "Artificial Intelligence is making waves in agriculture by helping farmers increase productivity while reducing environmental impact. AI-powered systems are predicting weather patterns, managing crops, and optimizing resources.",
    "url": "#",
    "source": "Financial Times",
    "date": "October 05, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Implications of AI in Surveillance",
    "description": "As AI technology advances, it brings with it ethical dilemmas, particularly in the realm of surveillance. Stakeholders are calling for clearer regulations and transparency to prevent misuse.",
    "url": "#",
    "source": "BBC News",
    "date": "October 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Deciphers Ancient Languages",
    "description": "A groundbreaking AI tool has been developed that can decipher ancient languages. The technology may unlock secrets of early civilizations and contribute significantly to historical research.",
    "url": "#",
    "source": "National Geographic",
    "date": "October 05, 2021",
    "category": "Tools"
  }
];
