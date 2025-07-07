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
    "title": "AI Unlocks Secrets of Ancient Texts",
    "description": "In a groundbreaking research, AI has been utilized to decipher long-lost languages. This new development could open doors to understanding ancient civilizations better.",
    "url": "#",
    "source": "Scientific American",
    "date": "November 02, 2021",
    "category": "Research"
  },
  {
    "title": "AI-driven E-commerce: The Future of Retail",
    "description": "As AI implements predictive algorithms to enhance user experience, online retail is witnessing a revolution. This new approach could redefine the future of e-commerce.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 02, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Streamlines Software Development",
    "description": "In a recent technological breakthrough, an AI tool has been developed to simplify coding and software development. This tool could potentially revolutionize the tech industry.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 02, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Innovation and Regulation",
    "description": "As AI technology becomes increasingly prevalent, ethical considerations have come to the forefront. Ensuring responsible development and use of AI is now a global concern.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 02, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI in Healthcare: Transforming Patient Care",
    "description": "AI is playing a pivotal role in enhancing patient care and management. From diagnosis to treatment, AI's potential in healthcare is unprecedented.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 02, 2021",
    "category": "Technology"
  }
];
