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
    "title": "AI Outperforms Humans in Identifying Cancer",
    "description": "In a recent breakthrough, AI systems have shown remarkable efficiency in identifying various types of cancers. This could revolutionize the field of medical diagnostics and treatment.",
    "url": "#",
    "source": "AI Research Times",
    "date": "October 19, 2022",
    "category": "Research"
  },
  {
    "title": "Google's Quantum AI Lab Achieves Quantum Supremacy",
    "description": "Google's Quantum AI lab has reportedly achieved 'quantum supremacy', marking a major milestone in the field of quantum computing and artificial intelligence.",
    "url": "#",
    "source": "Tech Insider",
    "date": "October 19, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM Releases New AI Tool to Combat Climate Change",
    "description": "IBM has unveiled a new AI-powered tool designed to help scientists understand and combat climate change. The system utilizes machine learning algorithms to predict and analyze climate patterns.",
    "url": "#",
    "source": "Business Weekly",
    "date": "October 19, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Questions Surround AI's Role in Recruitment",
    "description": "With more companies turning to AI for hiring, questions about fairness, accuracy, and bias in AI recruitment tools are being raised.",
    "url": "#",
    "source": "Ethics in AI Review",
    "date": "October 19, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases GPT-4: A New Era of Language Models",
    "description": "OpenAI has released GPT-4, the latest version of its language prediction model. The model is said to be more accurate and efficient than its predecessor, offering promising applications in various fields.",
    "url": "#",
    "source": "AI Tools Digest",
    "date": "October 19, 2022",
    "category": "Tools"
  }
];
