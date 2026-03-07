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
    "title": "AI Breakthrough: Machine Learns to Understand Context",
    "description": "A new AI model has been unveiled that can understand context like never before. This breakthrough could revolutionize industries from customer service to healthcare.",
    "url": "#",
    "source": "Technology Times",
    "date": "October 25, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: Balancing Progress with Responsibility",
    "description": "The growing field of AI ethics is pushing for increased accountability in AI development. This aims to ensure that AI benefits society without causing unintended harm.",
    "url": "#",
    "source": "AI News Daily",
    "date": "October 25, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: Streamlining Business Operations",
    "description": "A new suite of AI tools is helping businesses streamline operations and improve efficiency. The tools use machine learning algorithms to automate tasks and optimize processes.",
    "url": "#",
    "source": "Business Insider AI",
    "date": "October 25, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Healthcare: A Revolutionary Approach to Diagnosis",
    "description": "A new AI algorithm is helping doctors diagnose diseases with unprecedented accuracy. The system uses deep learning techniques to analyze medical images and detect abnormalities.",
    "url": "#",
    "source": "AI Medicine Today",
    "date": "October 25, 2021",
    "category": "Technology"
  },
  {
    "title": "AI and Business: How AI is Driving Profitability",
    "description": "AI is proving to be a game-changer in the business world, with companies leveraging machine learning to drive profitability. From customer service to supply chain management, AI is transforming the way businesses operate.",
    "url": "#",
    "source": "Forbes AI",
    "date": "October 25, 2021",
    "category": "Business"
  }
];
