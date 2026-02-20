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
    "title": "DeepMind's AI Solves Long-Standing Biological Mystery",
    "description": "DeepMind's AI, AlphaFold, has successfully predicted the structure of proteins, a challenge that has puzzled scientists for decades. This breakthrough could significantly advance drug discovery and disease understanding.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 05, 2021",
    "category": "Research"
  },
  {
    "title": "IBM Introduces AI to Manage Hybrid Work Environments",
    "description": "IBM's Watson Works uses AI to help businesses manage changing workplace environments. The tool provides real-time insights and automates processes to improve productivity and wellbeing.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 05, 2021",
    "category": "Business"
  },
  {
    "title": "Facebook Unveils AI that Understands Video Content",
    "description": "Facebook's new AI model, SEER, is capable of interpreting video content. This could improve content recommendation algorithms and enhance the social media experience.",
    "url": "#",
    "source": "Wired",
    "date": "October 05, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise Over Use of AI in Surveillance",
    "description": "As AI becomes increasingly prevalent in surveillance, ethical concerns are growing. Critics argue for stricter regulations to prevent misuse of technology and protect privacy rights.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Announces New AI-powered Tool for Developers",
    "description": "Google has introduced a new tool, Vertex AI, designed to streamline the process of deploying and maintaining AI models. This will allow developers to focus more on creating innovative solutions.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 05, 2021",
    "category": "Tools"
  }
];
