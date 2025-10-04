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
    "title": "AI Breakthrough: IBM Unveils AI That Can Code",
    "description": "IBM has made a groundbreaking announcement about the development of a new AI technology that can write its own code. This revolutionary platform may redefine the software industry and how coding is done.",
    "url": "#",
    "source": "IBM News Room",
    "date": "March 01, 2023",
    "category": "Technology"
  },
  {
    "title": "AI Outperforms Radiologists in Lung Cancer Detection",
    "description": "Researchers have developed an AI system that can detect lung cancer with greater accuracy than human radiologists. This breakthrough could drastically improve early detection and treatment outcomes.",
    "url": "#",
    "source": "Science Daily",
    "date": "March 01, 2023",
    "category": "Research"
  },
  {
    "title": "Microsoft Acquires AI Startup to Boost Cloud Services",
    "description": "Microsoft has announced the acquisition of a promising AI startup to enhance its Azure cloud services. The acquisition signifies the growing role of AI in the business and corporate world.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 01, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Ethics Guidelines Released by EU",
    "description": "The European Union has released a new set of guidelines focusing on ethical considerations in AI developments. These rules aim to ensure the responsible use of AI and protect citizens' rights.",
    "url": "#",
    "source": "BBC News",
    "date": "March 01, 2023",
    "category": "Ethics"
  },
  {
    "title": "Google Introduces New AI-Based Tools for Cybersecurity",
    "description": "Google has announced the launch of new AI-powered tools to enhance cybersecurity. These tools are designed to detect and prevent cyber threats more effectively.",
    "url": "#",
    "source": "CNET",
    "date": "March 01, 2023",
    "category": "Tools"
  }
];
