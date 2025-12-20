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
    "title": "AI Breakthrough: New Algorithm Predicts Climate Change Impact",
    "description": "A team of researchers has developed a groundbreaking AI model capable of predicting the long-term effects of climate change. The algorithm offers unprecedented accuracy, opening up new possibilities in environmental planning and policy-making.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Collaborate on AI Chip Revolution",
    "description": "Leading tech companies, including Google and Apple, are collaborating to develop next-generation AI chips. These chips aim to drastically enhance the efficiency and power of AI systems.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "Unprecedented AI Investment Trends in 2021",
    "description": "The AI sector has reportedly received an unprecedented level of investment in 2021. Startups leveraging AI technology continue to attract significant funding, signaling a positive trend for the industry's future.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "World Leaders Discuss AI Ethics at Recent Summit",
    "description": "Global leaders convened at a recent summit to discuss the ethical implications of AI. The forum highlighted the need for regulations to ensure the safe and fair use of AI technology.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "New Open-Source AI Tool Transforms Data Analysis",
    "description": "A newly released open-source tool is transforming how scientists handle large datasets. The AI-powered tool simplifies the process, making advanced data analysis accessible to researchers in various fields.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
