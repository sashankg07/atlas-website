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
    "title": "Revolutionizing Medicine: AI Predicts Heart Failure",
    "description": "Researchers have developed an AI that can predict heart failure with an impressive 98.5% accuracy. This could revolutionize the way we approach cardiac care.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 21, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Fashion: Sustainable Clothing and Personalized Shopping Experience",
    "description": "AI is transforming the fashion industry by predicting trends, personalizing shopping experiences, and promoting sustainable practices.",
    "url": "#",
    "source": "Forbes",
    "date": "September 21, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tool Predicts Crop Yields with Unprecedented Accuracy",
    "description": "A new AI tool developed by scientists provides farmers with accurate crop yield predictions, aiding in better crop management and food production.",
    "url": "#",
    "source": "Nature",
    "date": "September 21, 2022",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Cracking the AI Ethics Conundrum: New Framework Proposed",
    "description": "Researchers propose a new framework for AI ethics, focusing on transparency, accountability, and inclusivity. The framework aims to address the ethical challenges posed by AI.",
    "url": "#",
    "source": "Harvard Business Review",
    "date": "September 21, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Breakthrough: New Machine Learning Technique Unveiled",
    "description": "A new machine learning technique that significantly reduces the need for large amounts of data for training AI models has been unveiled. This could be a game changer in the field of AI.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 21, 2022",
    "category": "Technology"
  }
];
