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
    "title": "Revolutionizing Medicine with AI: New Predictive Model for Heart Disease",
    "description": "Researchers have developed a new AI predictive model that could potentially revolutionize the diagnosis and treatment of heart disease. The model harnesses machine learning to accurately predict patient outcomes, enabling personalized healthcare like never before.",
    "url": "#",
    "source": "The AI Journal",
    "date": "September 26, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Cybersecurity: The Future of Online Safety",
    "description": "Tech giants are increasingly leveraging AI to bolster cybersecurity measures. The use of AI not only helps in detecting cybersecurity threats but also in predicting and preventing them, marking a new era in online safety.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 26, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: The Game-Changing Role of AI in Supply Chain Management",
    "description": "AI is making a significant impact on supply chain management, enabling companies to streamline their operations and improve efficiency. Businesses are now harnessing the power of AI to predict disruptions, manage inventory, and optimize logistics.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 26, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: Navigating the Challenges of AI in Law Enforcement",
    "description": "As law enforcement agencies increasingly turn to AI to aid in their work, ethical concerns arise. Issues of privacy, bias, and accountability need addressing to ensure the responsible use of AI in this sector.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 26, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: Unveiling the Latest AI-Driven Content Creation Tools",
    "description": "A new wave of AI-powered tools is transforming the field of content creation. These tools can generate ideas, write drafts, and even edit content, helping to boost productivity and creativity for writers and marketers.",
    "url": "#",
    "source": "Wired",
    "date": "September 26, 2021",
    "category": "Tools"
  }
];
