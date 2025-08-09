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
    "title": "Revolutionizing Medicine with AI: A New Era of Predictive Healthcare",
    "description": "AI is transforming the medical industry by enabling predictive healthcare, leading to personalized treatment plans and early disease detection. The technology is enhancing patient outcomes while reducing healthcare costs.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 23, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Breakthrough: New Algorithm Learns Without Human Intervention",
    "description": "Researchers have developed a new AI algorithm capable of learning and improving without human intervention. This breakthrough could have far-reaching implications for autonomous systems of the future.",
    "url": "#",
    "source": "Nature",
    "date": "October 23, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Business: How AI is Transforming the Retail Industry",
    "description": "From predictive analytics to personalized customer experiences, AI is reshaping the retail landscape. Businesses are leveraging AI to improve efficiency and customer satisfaction.",
    "url": "#",
    "source": "Forbes",
    "date": "October 23, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Ethics Guidelines: Balancing Innovation with Responsibility",
    "description": "As AI continues to evolve, so does the conversation around AI ethics. New guidelines aim to ensure that AI is developed and used in a manner that is accountable, transparent, and respects human rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 23, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: Unveiling New AI-Based Design Software",
    "description": "A new design software powered by AI is set to revolutionize the creative industry. The tool allows designers to generate, customize, and refine designs with previously unattainable speed and precision.",
    "url": "#",
    "source": "Adobe",
    "date": "October 23, 2021",
    "category": "Tools"
  }
];
