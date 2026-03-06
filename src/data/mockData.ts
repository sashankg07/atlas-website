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
    "title": "AI Breakthrough: Machines Now Understand Context",
    "description": "Researchers have developed a new AI model capable of understanding context in language, a significant step towards truly conversational AI. This could revolutionize how humans interact with technology.",
    "url": "#",
    "source": "The AI Times",
    "date": "October 15, 2021",
    "category": "Research"
  },
  {
    "title": "AI and Quantum Computing: A New Era for Technology",
    "description": "Scientists have successfully integrated AI algorithms with quantum computing. This breakthrough could potentially speed up AI computations exponentially.",
    "url": "#",
    "source": "Tech Innovations Daily",
    "date": "October 15, 2021",
    "category": "Technology"
  },
  {
    "title": "Startup Uses AI to Predict Market Trends",
    "description": "A new startup is leveraging AI to predict market trends, promising a significant advantage to investors and businesses. This could change how businesses strategize and operate.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 15, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Implications of AI in Healthcare: A Deep Dive",
    "description": "As AI becomes increasingly integrated into healthcare, experts discuss the ethical implications. This includes concerns over privacy, bias, and decision-making in AI systems.",
    "url": "#",
    "source": "Ethics Today",
    "date": "October 15, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Aids in Climate Change Research",
    "description": "Scientists have developed a new AI tool to analyze climate data, aiding in research and predictions related to climate change. The tool opens up new possibilities for climate research.",
    "url": "#",
    "source": "Climate Change News",
    "date": "October 15, 2021",
    "category": "Tools"
  }
];
