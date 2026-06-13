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
    "title": "Revolutionary AI Algorithm Learns to Understand Human Emotions",
    "description": "Researchers from Stanford University have developed an AI algorithm capable of interpreting human emotions from facial expressions. This breakthrough could lead to more empathetic AI.",
    "url": "#",
    "source": "Stanford AI Research",
    "date": "November 24, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Cutting-Edge AI-Powered Autonomous Vehicle",
    "description": "Tech giant Google has revealed a fully autonomous vehicle powered by advanced AI. The vehicle promises to redefine the commuting experience.",
    "url": "#",
    "source": "The Verge",
    "date": "November 24, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Raises $100 Million in Series B Funding",
    "description": "AI start-up DeepMind has secured $100 Million in Series B funding, promising to accelerate the development of AI solutions for healthcare and education.",
    "url": "#",
    "source": "Forbes",
    "date": "November 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Experts Debate on Ethical Implications of AI in Warfare",
    "description": "As AI's role in military operations continues to grow, experts are debating the ethical implications. The discussion focusses on ensuring AI does not violate international humanitarian law.",
    "url": "#",
    "source": "New York Times",
    "date": "November 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "IBM Launches New AI Tool To Simplify Data Analysis",
    "description": "IBM has launched a new AI tool that simplifies complex data analysis. The tool aims to make data science more accessible to non-experts.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 24, 2022",
    "category": "Tools"
  }
];
