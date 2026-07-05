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
    "title": "Revolutionizing Healthcare: AI Predicts Heart Disease with Unprecedented Accuracy",
    "description": "A team of researchers has developed an AI model capable of predicting heart disease with 90% accuracy. This breakthrough could revolutionize preventative healthcare and save millions of lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 20, 2021",
    "category": "Research"
  },
  {
    "title": "Google's New AI Language Model Outperforms Humans in Translation Tasks",
    "description": "Google's latest AI language model, codenamed 'BabelFish', has shown remarkable proficiency in translation tasks, outperforming human linguists in several languages.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 20, 2021",
    "category": "Technology"
  },
  {
    "title": "IBM Unveils Next-Generation AI Chip: A Quantum Leap in Processing Power",
    "description": "IBM has unveiled a next-generation AI chip that promises a quantum leap in processing power. The chip, capable of performing quadrillions of calculations per second, could power the next wave of AI advancements.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 20, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate Intensifies: New Guidelines for Fairness & Transparency",
    "description": "As AI increasingly influences our lives, the debate around ethics intensifies. New guidelines have been proposed to ensure fairness and transparency in AI applications.",
    "url": "#",
    "source": "The Economist",
    "date": "October 20, 2021",
    "category": "Ethics"
  },
  {
    "title": "Introducing FastAI v2: Democratizing AI with User-Friendly Tools",
    "description": "FastAI has released its latest version, FastAI v2, aimed at democratizing AI. The new version simplifies the process of training AI models, making it more accessible to beginners.",
    "url": "#",
    "source": "VentureBeat",
    "date": "October 20, 2021",
    "category": "Tools"
  }
];
