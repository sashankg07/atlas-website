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
    "title": "AI Predicts Alzheimer's Years Before Diagnosis",
    "description": "Researchers have developed an AI model that can predict Alzheimer's disease up to six years before doctors. The tool could revolutionize early detection and treatment.",
    "url": "#",
    "source": "Nature",
    "date": "March 10, 2023",
    "category": "Research"
  },
  {
    "title": "How AI is Shaping the Future of Renewable Energy",
    "description": "AI is increasingly playing a key role in the renewable energy sector, with algorithms optimizing energy storage and distribution systems. This could be a game-changer in our fight against climate change.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 10, 2023",
    "category": "Technology"
  },
  {
    "title": "Tech Giants Invest in AI to Boost Customer Experience",
    "description": "Big tech firms are heavily investing in AI to enhance customer experience. This trend is transforming how businesses interact with their consumers.",
    "url": "#",
    "source": "Forbes",
    "date": "March 10, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Dilemma of AI in Surveillance",
    "description": "As AI becomes more integrated into surveillance systems, ethical concerns about privacy and consent are on the rise. Balancing security and privacy rights is becoming a pressing issue.",
    "url": "#",
    "source": "The New York Times",
    "date": "March 10, 2023",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transforming the Healthcare Industry",
    "description": "A surge in AI-powered tools is set to revolutionize the healthcare industry. These tools can predict patient outcomes, optimize care, and even assist in complex surgeries.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "March 10, 2023",
    "category": "Tools"
  }
];
