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
    "title": "AI Outperforms Human Doctors in Diagnosing Skin Cancer",
    "description": "Recent studies reveal that AI algorithms can now diagnose skin cancer with more accuracy than human doctors. This breakthrough could revolutionize the medical field, increasing early detection and saving lives.",
    "url": "#",
    "source": "The AI Times",
    "date": "October 12, 2021",
    "category": "Research"
  },
  {
    "title": "Breakthrough in AI Language Understanding: GPT-4 Released",
    "description": "OpenAI has released GPT-4, the latest iteration of its AI-driven language model. The new version boasts improved performance and even more sophisticated language understanding capabilities.",
    "url": "#",
    "source": "AI Daily",
    "date": "October 12, 2021",
    "category": "Technology"
  },
  {
    "title": "New Study Shows AI Could Add Trillions to Economy",
    "description": "A new report suggests that AI could add up to $15.7 trillion to the global economy by 2030. The study highlights the potential of AI in boosting productivity and enhancing business processes.",
    "url": "#",
    "source": "Forbes",
    "date": "October 12, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: The Debate Over Facial Recognition Technology",
    "description": "As facial recognition technology improves, ethical questions arise. Critics argue the technology poses significant privacy risks, while others see it as a powerful tool for law enforcement and security.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 12, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI-Powered Analytics Tool",
    "description": "Google has launched a new analytics tool powered by AI. The tool, called Analytics 360, aims to provide insights into customer behavior and improve decision-making processes for businesses.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 12, 2021",
    "category": "Tools"
  }
];
