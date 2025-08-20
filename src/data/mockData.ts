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
    "title": "AI Transforms Radiology: A Breakthrough in Cancer Detection",
    "description": "A new AI model has shown remarkable accuracy in detecting early-stage lung cancer in CT scans, outperforming human radiologists. This development could revolutionize cancer detection and treatment.",
    "url": "#",
    "source": "The New Yorker",
    "date": "November 10, 2021",
    "category": "Research"
  },
  {
    "title": "AI Changing the Landscape of Business Analytics",
    "description": "Artificial intelligence is transforming business analytics with advanced predictive capabilities and automation. This is enabling businesses to make data-driven decisions more efficiently than ever before.",
    "url": "#",
    "source": "Forbes",
    "date": "November 10, 2021",
    "category": "Business"
  },
  {
    "title": "Microsoft Announces New AI Tools for Developers",
    "description": "Microsoft has unveiled a suite of new AI-powered tools and frameworks for developers, aiming to make AI development more accessible and efficient.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 10, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Future of AI: Ethical Implications and Challenges",
    "description": "As AI continues to evolve, the ethical implications become more complex. Experts are calling for comprehensive guidelines to ensure the responsible use of AI.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 10, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Revolutionizes Renewable Energy Prediction",
    "description": "Artificial Intelligence is now being used to predict wind and solar energy production, which could greatly enhance the efficiency of renewable energy sources and combat climate change.",
    "url": "#",
    "source": "Nature",
    "date": "November 10, 2021",
    "category": "Technology"
  }
];
