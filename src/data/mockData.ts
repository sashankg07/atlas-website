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
    "title": "Breakthrough in AI Research: Machines That Understand Human Emotions",
    "description": "Researchers have developed a new artificial intelligence technology that can understand and respond to human emotions. This could revolutionize industries such as customer service and mental health.",
    "url": "#",
    "source": "The AI Journal",
    "date": "July 28, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Drones: The Future of Delivery Services",
    "description": "Tech giant Google has announced that it is testing AI-powered drones for its delivery services. This could drastically reduce delivery times and make the process more efficient.",
    "url": "#",
    "source": "TechCrunch",
    "date": "July 28, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: How Big Data and AI are Revolutionizing Marketing",
    "description": "A new report has highlighted how Big Data and artificial intelligence are being used to provide personalized marketing strategies, improving customer engagement and increasing sales.",
    "url": "#",
    "source": "Business Insider",
    "date": "July 28, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: Balancing Innovation and Responsibility",
    "description": "A recent conference discussed the ethical implications of AI, emphasizing the need to balance innovation with social responsibility. Key topics included privacy, bias, and the digital divide.",
    "url": "#",
    "source": "The Guardian",
    "date": "July 28, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: The Latest Machine Learning Platforms Reviewed",
    "description": "We review the latest machine learning platforms and tools, providing insights into their features, usability, and potential applications. These tools are making AI accessible to businesses of all sizes.",
    "url": "#",
    "source": "Forbes",
    "date": "July 28, 2021",
    "category": "Tools"
  }
];
