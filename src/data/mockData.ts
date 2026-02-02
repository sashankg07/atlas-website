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
    "title": "AI Transforms Cancer Diagnosis with Astonishing Accuracy",
    "description": "In a breakthrough for medical science, an AI model has achieved unprecedented accuracy in diagnosing various types of cancer. The model, trained on thousands of patient data, could revolutionize early detection and treatment.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 02, 2022",
    "category": "Research"
  },
  {
    "title": "Major Tech Company Launches AI-Based Cybersecurity System",
    "description": "In response to increasing cyber threats, a leading tech company has announced the launch of a new AI-driven cybersecurity system. The system promises to identify and neutralize threats faster than ever before.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 02, 2022",
    "category": "Technology"
  },
  {
    "title": "New AI Start-Up Raises $50M in Series B Funding",
    "description": "A promising AI start-up has secured $50 million in Series B funding. The company's innovative machine learning solutions have made waves in the tech industry, attracting significant investor interest.",
    "url": "#",
    "source": "Bloomberg",
    "date": "December 02, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise with AI's Growing Presence in Healthcare",
    "description": "As AI becomes increasingly prevalent in healthcare, experts are raising questions about the ethical implications. Concerns center around data privacy and the need for a human touch in patient care.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 02, 2022",
    "category": "Ethics"
  },
  {
    "title": "New Open Source AI Tool Revolutionizes Image Recognition",
    "description": "A new open-source AI tool promises to take image recognition to the next level, with improved accuracy and efficiency. This tool is set to be a game-changer for industries relying on image processing.",
    "url": "#",
    "source": "Wired",
    "date": "December 02, 2022",
    "category": "Tools"
  }
];
