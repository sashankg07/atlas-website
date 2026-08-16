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
    "title": "Ground-breaking AI Tool Predicts Climate Change Patterns",
    "description": "Leading scientists have developed a revolutionary AI tool capable of predicting climate change patterns with unprecedented accuracy. This breakthrough has the potential to drastically improve our understanding and response to climate change.",
    "url": "#",
    "source": "Nature",
    "date": "November 02, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: The New Frontier for Tech Giants",
    "description": "As artificial intelligence continues to permeate every aspect of modern life, tech companies are grappling with the ethical implications. The industry is making strides towards establishing guidelines for ethical AI use.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 02, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI in Business: New Tool Boosts Customer Experience",
    "description": "A startup has launched an AI-powered tool designed to enhance customer experience. This innovative technology is set to transform how businesses interact with their customers.",
    "url": "#",
    "source": "Forbes",
    "date": "November 02, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Algorithm Outperforms Humans at Complex Strategy Game",
    "description": "A new AI algorithm has been developed that outperforms humans at a complex strategy game, highlighting the potential of AI in problem-solving and strategic thinking.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 02, 2021",
    "category": "Technology"
  },
  {
    "title": "Latest AI Tool Aids Medical Diagnosis",
    "description": "A new AI-powered tool is assisting doctors in diagnosing complex medical conditions, paving the way for faster and more accurate patient care.",
    "url": "#",
    "source": "The Lancet",
    "date": "November 02, 2021",
    "category": "Tools"
  }
];
