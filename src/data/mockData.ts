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
    "title": "AI Breakthrough: New Algorithm Learns as Fast as Humans",
    "description": "An international team of computer scientists has developed an AI algorithm capable of learning at the same speed as a human. This revolutionary development could have far-reaching implications in fields ranging from robotics to education.",
    "url": "#",
    "source": "AI Daily News",
    "date": "November 11, 2021",
    "category": "Research"
  },
  {
    "title": "Big Tech Adopts AI for Sustainable Practices",
    "description": "Major tech companies are harnessing the power of AI to improve their sustainability efforts. The technology is being used to optimize energy use, reduce waste, and even predict environmental trends.",
    "url": "#",
    "source": "Tech Insider",
    "date": "November 11, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $200 Million in Series B Funding",
    "description": "AI startup, AlphaTech, has secured $200 million in its latest funding round. The company plans to use the funds to improve its machine learning capabilities and expand its global reach.",
    "url": "#",
    "source": "Business Weekly",
    "date": "November 11, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: Balancing Innovation and Human Rights",
    "description": "As AI continues to evolve, the need for ethical guidelines is becoming increasingly important. Experts are calling for a balance between technological innovation and preserving human rights.",
    "url": "#",
    "source": "Ethics Today",
    "date": "November 11, 2021",
    "category": "Ethics"
  },
  {
    "title": "New Tool Simplifies Machine Learning for Non-experts",
    "description": "A newly-released AI tool aims to make machine learning more accessible to non-experts. The user-friendly interface allows individuals with minimal coding experience to develop and implement AI models.",
    "url": "#",
    "source": "AI Tools Review",
    "date": "November 11, 2021",
    "category": "Tools"
  }
];
