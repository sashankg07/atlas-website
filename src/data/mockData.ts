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
    "title": "AI Outperforms Humans in Identifying Rare Diseases",
    "description": "New research reveals that AI can now diagnose rare diseases with higher accuracy than human doctors. This breakthrough is set to revolutionize medical diagnostics and treatment.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 18, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots Revolutionize Warehouse Logistics",
    "description": "AI-powered autonomous robots are transforming the logistics industry by optimizing warehouse operations. Businesses are seeing major improvements in efficiency and productivity.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 18, 2022",
    "category": "Business"
  },
  {
    "title": "Google Unveils AI Tool to Combat Climate Change",
    "description": "Google has launched a new AI tool that can accurately predict climate patterns and offer solutions for mitigation. This technology could play a vital role in the fight against climate change.",
    "url": "#",
    "source": "The Verge",
    "date": "October 18, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Over AI Facial Recognition Technology",
    "description": "Calls for stricter regulations on AI facial recognition technology grow amid concerns of privacy invasion and misuse. Critics argue that the technology could lead to a surveillance society.",
    "url": "#",
    "source": "BBC News",
    "date": "October 18, 2022",
    "category": "Ethics"
  },
  {
    "title": "IBM Introduces New AI Tools for Streamlining Business Operations",
    "description": "IBM has introduced a suite of AI tools designed to streamline business operations. The tools aim to automate routine tasks and improve decision-making processes.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 18, 2022",
    "category": "Tools"
  }
];
