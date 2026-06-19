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
    "title": "Revolutionary AI System Unveils Quantum Computing Secrets",
    "description": "Researchers have developed an AI system capable of unveiling the complex phenomena in quantum computing. The breakthrough could speed up research and development in the field.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "Google's DeepMind Achieves AI Breakthrough in Protein Folding",
    "description": "DeepMind, Google's AI subsidiary, has made a significant breakthrough in predicting the structure of proteins, a discovery that could accelerate drug development.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $200 million in Series C Funding",
    "description": "Artificial intelligence start-up, AI Inc., has raised $200 million in a recent Series C funding round, signaling strong investor confidence in the AI sector.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics of AI: The Pivotal Role of Transparency",
    "description": "A new report highlights the importance of transparency in AI systems, arguing that it is essential for ethical decision making and accountability in AI applications.",
    "url": "#",
    "source": "Harvard Business Review",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Predicts Climate Change Impact on Global Economy",
    "description": "A new AI tool has been developed that can predict the impact of climate change on the global economy, providing key insights for policy makers and businesses.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
