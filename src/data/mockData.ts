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
    "title": "Revolutionizing Healthcare with AI: A New Era Begins",
    "description": "Artificial Intelligence is transforming the healthcare industry offering smarter, faster, and more accurate diagnostics. This breakthrough allows for personalized medicine and improved patient outcomes.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 29, 2022",
    "category": "Technology"
  },
  {
    "title": "AI in Space Exploration: NASA's New Frontier",
    "description": "NASA is leveraging AI technology to optimize space exploration and study. The organization aims to improve mission planning, data processing, and spacecraft autonomy.",
    "url": "#",
    "source": "Wired",
    "date": "October 29, 2022",
    "category": "Research"
  },
  {
    "title": "Big Tech and AI Ethics: A Call for Transparency",
    "description": "As AI continues to impact society, calls for transparency and ethical guidelines are increasing. Many believe that Big Tech companies should be held accountable for their AI's actions.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 29, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Finance: Redefining the Future of Banking",
    "description": "Artificial Intelligence is reshaping banking through automation and predictive analytics. These advancements are streamlining operations and improving customer experiences.",
    "url": "#",
    "source": "Financial Times",
    "date": "October 29, 2022",
    "category": "Business"
  },
  {
    "title": "OpenAI's New GPT-4: The Next Leap in AI Tools",
    "description": "OpenAI has announced the latest iteration of their language model, GPT-4. This new tool promises to revolutionize the way we interact with AI, offering even better natural language understanding.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 29, 2022",
    "category": "Tools"
  }
];
