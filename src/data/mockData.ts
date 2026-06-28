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
    "title": "AI Reaches Milestone in Understanding Natural Language",
    "description": "A groundbreaking development in AI research shows machines excelling in understanding and interpreting human language. This could revolutionize many sectors, from customer support to healthcare.",
    "url": "#",
    "source": "The AI Times",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Start-Up Raises $100M in Series C Funding",
    "description": "An AI start-up specializing in automating business processes has successfully raised $100 million in its latest funding round, showcasing the growing interest in AI in business.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "November 30, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Accelerates Drug Discovery",
    "description": "A new AI-powered tool promises to expedite the drug discovery process, potentially saving billions of dollars and countless lives in the process.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise as AI Advances",
    "description": "As AI technology continues to advance, ethical considerations are coming to the forefront. Experts call for robust guidelines to ensure ethical AI development and deployment.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Pushes Limits with Next-Gen Computer Vision",
    "description": "Recent advances in AI technology have led to a new generation of computer vision systems that can identify and interpret visual data more accurately than ever before.",
    "url": "#",
    "source": "Wired",
    "date": "November 30, 2021",
    "category": "Technology"
  }
];
