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
    "title": "AI Transforms Healthcare with Breakthrough Predictive Analysis",
    "description": "Recent advancements in AI have led to a leap in predictive analysis within the healthcare sector. This breakthrough allows for earlier detection of serious illnesses, such as heart disease and cancer.",
    "url": "#",
    "source": "Nature",
    "date": "March 07, 2023",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Billions into AI for Future Business Solutions",
    "description": "Major technology corporations are investing heavily into AI, with the aim to revolutionize business solutions. The focus is on improving customer service, workflow optimization, and predictive marketing.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "March 07, 2023",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Emerge Amidst Rising Concerns",
    "description": "As AI continues to advance, ethical concerns have led to the development of new guidelines. This includes the creation of transparent and unbiased AI, along with data privacy and security measures.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 07, 2023",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Revolutionary AI Tool Streamlines Software Development",
    "description": "A new AI tool has been developed that significantly streamlines the software development process. The tool uses machine learning to automate coding, reducing human error and saving time.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 07, 2023",
    "category": "Tools"
  },
  {
    "title": "AI Tech is Shaping the Future of Autonomous Vehicles",
    "description": "Advancements in AI technology are shaping the future of autonomous vehicles. AI is not only improving vehicle navigation but also enhancing safety and reliability.",
    "url": "#",
    "source": "BBC News",
    "date": "March 07, 2023",
    "category": "Technology"
  }
];
