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
    "title": "Revolutionary AI Device Predicts Heart Failure",
    "description": "A groundbreaking new AI device has been developed that can predict heart failure up to five days before it occurs. This revolutionary technology could save countless lives every year.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 17, 2021",
    "category": "Technology"
  },
  {
    "title": "DeepMind's AI Masters Protein Folding",
    "description": "DeepMind's AI program AlphaFold has solved the 50-year-old challenge of protein folding, opening up new possibilities for drug discovery and disease understanding.",
    "url": "#",
    "source": "Wired",
    "date": "October 17, 2021",
    "category": "Research"
  },
  {
    "title": "Is AI the Future of Ethical Decision Making?",
    "description": "As AI becomes more sophisticated, experts are investigating whether it can be used to make ethical decisions in complex scenarios. The implications could be far-reaching across numerous industries.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 17, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Transforming the Business Landscape",
    "description": "From customer service to logistics, AI is transforming the business landscape. Discover how enterprises are leveraging AI to gain a competitive edge.",
    "url": "#",
    "source": "Forbes",
    "date": "October 17, 2021",
    "category": "Business"
  },
  {
    "title": "New Tools for Developing AI Models",
    "description": "Emerging tools are making it easier than ever to develop, train, and deploy AI models. These advancements could democratize AI development.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 17, 2021",
    "category": "Tools"
  }
];
