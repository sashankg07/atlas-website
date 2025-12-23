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
    "title": "AI Breakthrough: New Algorithm Outperforms Human Doctors in Diagnosing Diseases",
    "description": "A team of researchers has developed an AI algorithm that outperforms human doctors in diagnosing a range of diseases. This marks a significant step forward in the field of AI in healthcare.",
    "url": "#",
    "source": "Medical AI Journal",
    "date": "October 25, 2021",
    "category": "Research"
  },
  {
    "title": "DeepMind Unveils New AI Tool for Predicting Climate Change Impact",
    "description": "DeepMind has unveiled a new AI-powered tool that can predict the impact of climate change more accurately than ever before. This tool has the potential to revolutionize the way we tackle climate change.",
    "url": "#",
    "source": "Technology Review",
    "date": "October 25, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: How It's Transforming the Retail Industry",
    "description": "AI is transforming the retail industry, from personalized marketing to inventory management. This article takes a closer look at these developments and what they mean for businesses.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 25, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI in Surveillance Technology",
    "description": "The increasing use of AI in surveillance technology is raising ethical concerns about privacy and consent. This article examines these issues and discusses potential solutions.",
    "url": "#",
    "source": "Ethics in AI Review",
    "date": "October 25, 2021",
    "category": "Ethics"
  },
  {
    "title": "Introducing a New AI Tool for Advancing Quantum Computing",
    "description": "Researchers have introduced a new AI tool that can accelerate developments in quantum computing. This tool could pave the way for significant advancements in the field.",
    "url": "#",
    "source": "AI Tools Review",
    "date": "October 25, 2021",
    "category": "Tools"
  }
];
