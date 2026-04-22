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
    "title": "AI Breakthrough: AI Helps Decode Complex Brain Signals",
    "description": "Researchers have developed an AI that can decode complex brain signals, potentially leading to new treatments for neurological disorders. This groundbreaking study shows promising steps towards understanding the human brain.",
    "url": "#",
    "source": "Science Daily",
    "date": "October 13, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Business: How AI is Revolutionizing Customer Experience",
    "description": "Businesses are increasingly using AI to enhance customer experience, with chatbots and predictive analytics leading the charge. This trend shows AI's expanding role in business operations and strategy.",
    "url": "#",
    "source": "Forbes",
    "date": "October 13, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Balancing Innovation and Responsibility",
    "description": "As AI continues to evolve, there is a growing call for ethical guidelines to ensure its responsible use. Experts argue that balancing innovation and ethical considerations is crucial for sustainable AI development.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 13, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool for Efficient Data Analysis",
    "description": "A new AI tool has been developed that significantly increases the efficiency of data analysis, offering businesses a faster and more accurate way to understand their data.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "October 13, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Technology: The Future of Autonomous Vehicles",
    "description": "With advancements in AI technology, the dream of fully autonomous vehicles is fast becoming a reality. Recent developments show promising progress in AI-powered transportation.",
    "url": "#",
    "source": "The Verge",
    "date": "October 13, 2021",
    "category": "Technology"
  }
];
