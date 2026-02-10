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
    "title": "AI Breakthrough: Quantum Computing and Artificial Intelligence",
    "description": "A quantum leap in AI research as scientists have combined quantum computing and AI for the first time. This unprecedented development may revolutionize how we understand and use AI.",
    "url": "#",
    "source": "The Science Times",
    "date": "November 13, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Driven Cybersecurity: Future of Digital Protection",
    "description": "As cyber threats evolve, AI-driven cybersecurity tools are increasingly being used to counter them. These new tools can predict and prevent cyber attacks with unparalleled accuracy.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 13, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Healthcare: New Startup Uses AI to Detect Early Signs of Diseases",
    "description": "A new startup is leveraging AI to detect diseases in their early stages. This innovative approach could greatly improve patient outcomes and revolutionize the healthcare industry.",
    "url": "#",
    "source": "Business Insider",
    "date": "November 13, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: Balancing Innovation and Privacy",
    "description": "As AI continues to evolve, so do the ethical concerns surrounding it. A recent forum discusses the balance between technological innovation and privacy protection.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 13, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: New Software Makes AI More Accessible",
    "description": "A new software tool is making it easier for businesses to integrate AI into their operations. This development is expected to democratize AI, making it accessible to more people and businesses.",
    "url": "#",
    "source": "Wired",
    "date": "November 13, 2021",
    "category": "Tools"
  }
];
