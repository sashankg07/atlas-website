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
    "title": "AI System Outperforms Humans in Designing Floorplans",
    "description": "A new AI system developed by researchers has shown remarkable efficiency in creating functional floorplans, surpassing human architects in speed and effectiveness. The system leverages deep learning to optimize space usage in architectural designs.",
    "url": "#",
    "source": "The AI Journal",
    "date": "October 03, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giants Face Ethical Dilemmas Over AI Use",
    "description": "Amid growing concerns around the ethical use of AI, major tech companies face increasing pressure to ensure their technology respects user privacy and promotes fair practices. Critics argue for stronger regulations and transparency.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 03, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI-Powered Tools Revolutionize the Healthcare Industry",
    "description": "AI is driving a digital transformation in healthcare, with new tools helping doctors diagnose diseases, predict patient outcomes, and personalize treatment plans. This revolution promises to improve patient care and operational efficiency.",
    "url": "#",
    "source": "Medical News Today",
    "date": "October 03, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Startups Attract Record Investment in Q3 2022",
    "description": "Investment in AI startups has reached a new high this quarter, with investors showing increased confidence in the potential of AI to disrupt various industries. The funding surge reflects the growing importance of AI in the global economy.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 03, 2022",
    "category": "Business"
  },
  {
    "title": "Demystifying AI: New Tools for Non-Tech Users",
    "description": "To make AI more accessible, several companies are developing user-friendly tools that require no programming skills. These tools, based on a drag-and-drop interface, allow non-tech users to build AI models for their specific needs.",
    "url": "#",
    "source": "The Verge",
    "date": "October 03, 2022",
    "category": "Tools"
  }
];
