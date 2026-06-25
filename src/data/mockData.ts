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
    "title": "Breakthrough in AI Predictive Analytics: A New Era for Healthcare",
    "description": "Researchers have made a significant leap in AI predictive analytics, providing a new tool for healthcare professionals to predict and prevent diseases. The AI model can analyze vast amounts of data in seconds, outperforming traditional methods.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 17, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Launches AI-Powered Sustainability Initiative",
    "description": "A leading technology company has launched a new initiative that uses AI to improve sustainability practices. The project aims to reduce waste and optimize energy use in industries worldwide.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 17, 2022",
    "category": "Technology"
  },
  {
    "title": "Investment in AI Startups Reaches Record High",
    "description": "Investment in AI startups has reached an all-time high, signaling a major shift in business trends. This surge in funding reflects the growing importance of AI in the modern business world.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 17, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Development Proposed",
    "description": "A group of renowned AI experts have proposed new ethical guidelines for AI development. The goal is to ensure that AI technologies are developed and used responsibly, with a focus on minimizing harm and maximizing benefits.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 17, 2022",
    "category": "Ethics"
  },
  {
    "title": "Revolutionary AI Tool Streamlines Software Development",
    "description": "A new AI tool promises to revolutionize software development by automating complex tasks. The tool, which uses machine learning techniques, can analyze code and suggest improvements, significantly reducing development time.",
    "url": "#",
    "source": "Wired",
    "date": "September 17, 2022",
    "category": "Tools"
  }
];
