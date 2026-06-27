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
    "title": "New AI Predicts Heart Disease with Unprecedented Accuracy",
    "description": "Researchers have developed an AI model that predicts the onset of heart disease with 90% accuracy. This breakthrough could revolutionize preventative care.",
    "url": "#",
    "source": "Nature Biomedical Engineering",
    "date": "October 13, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Race to Develop AI for Real-Time Voice Translation",
    "description": "Google and Microsoft are investing heavily in AI technology for real-time voice translation, promising to break down language barriers like never before.",
    "url": "#",
    "source": "Wired",
    "date": "October 13, 2021",
    "category": "Technology"
  },
  {
    "title": "AI-powered Customer Service: The New Business Frontier",
    "description": "Many businesses are harnessing the power of AI to provide personalized, efficient customer service. The technology is transforming the customer experience landscape.",
    "url": "#",
    "source": "Forbes",
    "date": "October 13, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Questions Arise from AI's Ability to Mimic Human Behavior",
    "description": "As AI's ability to mimic human behavior improves, ethical questions about deception and consent are being raised. Experts call for guidelines to govern AI behavior.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 13, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Speeds Up Drug Discovery Process",
    "description": "A new AI tool has been developed that rapidly identifies potential new drugs. This could significantly speed up the drug discovery process.",
    "url": "#",
    "source": "MIT News",
    "date": "October 13, 2021",
    "category": "Tools"
  }
];
