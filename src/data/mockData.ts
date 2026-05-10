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
    "title": "AI Algorithm Predicts Alzheimer's Disease with Over 90% Accuracy",
    "description": "Researchers have developed an artificial intelligence algorithm that can predict Alzheimer's disease with over 90% accuracy. The breakthrough could lead to earlier detection and treatment of the neurodegenerative disease.",
    "url": "#",
    "source": "Nature Neuroscience",
    "date": "April 26, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Powered Drones Revolutionize Package Delivery",
    "description": "E-commerce giants are utilizing AI-powered drones for package delivery, significantly reducing delivery times and costs. The drones navigate autonomously, avoiding obstacles and safely delivering packages.",
    "url": "#",
    "source": "Forbes",
    "date": "April 26, 2022",
    "category": "Technology"
  },
  {
    "title": "OpenAI's New Language Model Outperforms Predecessors",
    "description": "OpenAI recently released a new language model that has shown to outperform its predecessors in understanding and generating human-like text. The model can create detailed and contextually accurate responses.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "April 26, 2022",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI Facial Recognition Technology",
    "description": "AI facial recognition technology is facing scrutiny due to privacy and bias concerns. Critics argue for better regulation of the technology to prevent misuse and discrimination.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 26, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Transforming the Healthcare Industry",
    "description": "AI tools are being increasingly used in healthcare for diagnosis, treatment planning, and patient monitoring. The technology promises to improve patient outcomes and efficiency in the industry.",
    "url": "#",
    "source": "TechCrunch",
    "date": "April 26, 2022",
    "category": "Tools"
  }
];
