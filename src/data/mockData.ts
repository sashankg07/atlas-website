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
    "title": "AI Outperforms Humans in Identifying Cancer Types",
    "description": "Latest advancements in AI have led to the development of a system that can identify cancer types with greater accuracy than human experts. This breakthrough is expected to revolutionize the future of cancer diagnosis and treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 08, 2022",
    "category": "Research"
  },
  {
    "title": "Cutting-Edge AI Chip Unveiled for Next Generation Applications",
    "description": "Tech giant Intel has unveiled a new AI chip designed specifically for artificial intelligence workloads. The chip promises unprecedented processing power, fueling advancements in AI technologies.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 08, 2022",
    "category": "Technology"
  },
  {
    "title": "Businesses Turn to AI for Enhanced Customer Experience",
    "description": "More and more businesses are leveraging AI to personalize customer experience. The trend is reshaping the way companies interact with their customers, offering unprecedented levels of customization.",
    "url": "#",
    "source": "Forbes",
    "date": "October 08, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Questions Surround Use of AI in Law Enforcement",
    "description": "The use of AI in law enforcement is raising ethical questions. Critics argue that without proper regulation, AI could lead to invasive surveillance and the potential for bias in criminal justice systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 08, 2022",
    "category": "Ethics"
  },
  {
    "title": "Google Releases New AI Tools for Developers",
    "description": "Google has released a new set of AI tools designed to help developers create more sophisticated artificial intelligence applications. The tools promise to streamline the development process and offer developers greater control over their AI projects.",
    "url": "#",
    "source": "Engadget",
    "date": "October 08, 2022",
    "category": "Tools"
  }
];
