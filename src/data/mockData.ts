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
    "title": "AI Outperforms Humans in Designing Quantum Experiments",
    "description": "Artificial Intelligence has demonstrated its edge over humans in designing quantum physics experiments. The development opens a new frontier in quantum computing research.",
    "url": "#",
    "source": "The Quantum Times",
    "date": "October 29, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "Researchers have developed a groundbreaking AI tool that can predict the future effects of climate change. The technology could provide key insights for policy makers.",
    "url": "#",
    "source": "Climate Journal",
    "date": "October 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Raises $200 Million in Series C Funding",
    "description": "AI startup, ThinkAI, has successfully raised $200 million in a Series C funding round. The funds will be used to expand its product offerings and global footprint.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Benefits and Risks",
    "description": "As AI becomes increasingly integrated into our lives, the importance of ethical considerations grows. Experts discuss the need for clear guidelines and regulations to prevent misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "Revolutionary AI Writing Tool Released",
    "description": "A new AI writing tool, PenAI, promises to revolutionize content creation. The tool uses advanced algorithms to generate creative and accurate content.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 29, 2021",
    "category": "Tools"
  }
];
