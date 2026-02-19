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
    "title": "AI to Revolutionize Healthcare: A New Era of Diagnosis",
    "description": "Artificial Intelligence is shaping the future of healthcare with its potential to improve diagnosis and treatment. This emerging technology is transforming medical care and enabling personalized medicine.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 28, 2021",
    "category": "Technology"
  },
  {
    "title": "Latest AI Breakthrough in Climate Change Predictions",
    "description": "Researchers have developed a new AI model that can predict climate change patterns with unprecedented accuracy. This advancement could be instrumental in shaping future climate policies.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 28, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: Addressing Bias in AI Systems",
    "description": "As the use of AI becomes more prevalent, experts call for more scrutiny of algorithmic bias. Fairness and transparency in AI systems have become a paramount concern.",
    "url": "#",
    "source": "BBC News",
    "date": "October 28, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tools Powering Remote Work",
    "description": "The pandemic has accelerated the adoption of AI tools in the remote work landscape. AI-powered platforms are enhancing productivity and collaboration in virtual workspaces.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 28, 2021",
    "category": "Tools"
  },
  {
    "title": "AI in Business: Transforming Customer Experience",
    "description": "Artificial Intelligence is redefining customer experience strategies in businesses. AI-powered solutions are providing personalized experiences, fostering customer loyalty and engagement.",
    "url": "#",
    "source": "Forbes",
    "date": "October 28, 2021",
    "category": "Business"
  }
];
