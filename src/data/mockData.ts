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
    "title": "Revolutionizing Healthcare: AI Models Predict Heart Disease with Remarkable Accuracy",
    "description": "Researchers have developed AI models that accurately predict heart disease, marking a significant breakthrough in healthcare. The AI, trained on extensive patient data, has proven to be a game-changer, delivering results faster than traditional methods.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 11, 2021",
    "category": "Research"
  },
  {
    "title": "Promising AI Start-up Raises $100 Million in Series B Funding",
    "description": "In a testament to the growing role of AI in business, start-up AI4ALL has secured $100 million in Series B funding. The funding will enable the company to develop its unique AI solutions and expand its global reach.",
    "url": "#",
    "source": "Forbes",
    "date": "October 11, 2021",
    "category": "Business"
  },
  {
    "title": "The Ethical Dilemma of AI in Surveillance",
    "description": "As AI becomes more integrated into surveillance technologies, it raises ethical questions about privacy and consent. This article explores the implications and the need for regulations in this fast-evolving field.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 11, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Streamlines Design Process in Architecture",
    "description": "AI in architecture is no longer a concept of the future. A new AI tool called ArchAI is simplifying the design process, making it faster and more efficient, and enabling architects to focus on more creative aspects.",
    "url": "#",
    "source": "Architectural Digest",
    "date": "October 11, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Takes Over Data Analysis: The Future of Business Intelligence",
    "description": "With AI's ability to analyze massive datasets and uncover patterns, the future of business intelligence is being reshaped. Companies are now leveraging AI to make data-driven decisions and gain a competitive edge.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 11, 2021",
    "category": "Technology"
  }
];
