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
    "title": "AI Breakthrough: DeepMind's New AI Model Tackles Language and Maths",
    "description": "DeepMind has developed a new AI model that comprehends language and solves mathematical problems, showcasing the technology's growing cognitive abilities. This could revolutionize the way AI assists in education and research.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 24, 2022",
    "category": "Research"
  },
  {
    "title": "Microsoft Unveils Next-Generation AI Supercomputer",
    "description": "Microsoft has unveiled its next-generation AI supercomputer, promising unparalleled computational capabilities. The tech giant plans to use the system to advance various AI applications, including natural language processing and autonomous vehicles.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 24, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM AI Predicts Alzheimer's with 70% Accuracy",
    "description": "IBM has developed an AI algorithm that can predict the onset of Alzheimer's disease with 70% accuracy up to seven years in advance. This breakthrough could significantly impact early diagnosis and treatment of the disease.",
    "url": "#",
    "source": "Reuters",
    "date": "November 24, 2022",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: European Union Proposes Legal Framework",
    "description": "The European Union has proposed a legal framework aimed at ensuring ethical practices in AI development and implementation. This move is seen as a major step in regulating AI and preventing misuse.",
    "url": "#",
    "source": "BBC",
    "date": "November 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "Salesforce Unveils AI-Powered Tools for CRM",
    "description": "Salesforce has launched a suite of AI-powered tools designed to enhance customer relationship management (CRM). The tools aim to streamline operations and provide more personalized services to customers.",
    "url": "#",
    "source": "Business Insider",
    "date": "November 24, 2022",
    "category": "Tools"
  }
];
