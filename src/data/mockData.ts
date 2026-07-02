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
    "title": "AI-Powered Drones Revolutionize Wildlife Conservation",
    "description": "Researchers have developed AI-powered drones to monitor and protect wildlife. The technology promises to revolutionize wildlife conservation by providing real-time insights and reducing human intervention.",
    "url": "#",
    "source": "Nature's Journal",
    "date": "December 10, 2021",
    "category": "Research"
  },
  {
    "title": "AI Predicts Alzheimer's Disease Years Before Diagnosis",
    "description": "In a major breakthrough, an AI model has successfully predicted the onset of Alzheimer's disease years before clinical diagnosis. This development could pave the way for early intervention and treatment.",
    "url": "#",
    "source": "The Lancet Neurology",
    "date": "December 10, 2021",
    "category": "Technology"
  },
  {
    "title": "Tesla Unveils AI-Driven Energy Optimization System",
    "description": "Tesla has unveiled a new AI-driven energy optimization system. The system aims to maximize the efficiency of renewable energy sources, potentially transforming the sustainable energy sector.",
    "url": "#",
    "source": "Bloomberg",
    "date": "December 10, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Framework: A Step Towards Responsible AI",
    "description": "A global consortium of AI researchers and ethicists has proposed a new framework for AI ethics. The framework aims to ensure responsible use of AI, emphasizing transparency and accountability.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 10, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Sketches Into Photorealistic Images",
    "description": "A new AI tool can transform simple sketches into photorealistic images. This breakthrough could have significant implications for design, art, and computer graphics.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 10, 2021",
    "category": "Tools"
  }
];
