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
    "title": "AI-Powered Healthcare: The Future is Here",
    "description": "AI has significantly transformed the healthcare industry with its predictive analytics and automation capabilities. It is aiding in early disease detection, personalized treatment, and efficient patient care.",
    "url": "#",
    "source": "AI Daily News",
    "date": "October 02, 2021",
    "category": "Technology"
  },
  {
    "title": "Researchers Develop AI Model to Predict Climate Change Impact",
    "description": "Scientists have developed a new AI model that accurately estimates the impact of climate change. This breakthrough could help policymakers implement sustainable practices effectively.",
    "url": "#",
    "source": "Tech Science Daily",
    "date": "October 02, 2021",
    "category": "Research"
  },
  {
    "title": "AI in E-commerce: A Game Changer for Customer Experience",
    "description": "AI is revolutionizing the e-commerce industry by offering personalized shopping experiences. It's not just shaping customer engagement but also improving business operations and decision-making.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 02, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Dilemma of AI in Surveillance",
    "description": "While AI-powered surveillance systems promise enhanced security, they raise serious ethical concerns about privacy and consent. Experts call for robust regulations to safeguard individual rights.",
    "url": "#",
    "source": "Ethics Today",
    "date": "October 02, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Making Remote Work More Efficient",
    "description": "From virtual meeting assistants to smart project management tools, AI is making remote work more productive and manageable, especially amid the ongoing pandemic.",
    "url": "#",
    "source": "Tech Today",
    "date": "October 02, 2021",
    "category": "Tools"
  }
];
