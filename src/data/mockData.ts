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
    "title": "AI Outperforms Humans in Designing Microchips",
    "description": "Google has recently announced that its AI has outperformed humans in the complex task of designing microchips. This breakthrough could speed up the process of chip production and make it more efficient.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 14, 2021",
    "category": "Technology"
  },
  {
    "title": "OpenAI Unveils New Language Model, GPT-4",
    "description": "OpenAI has released its next-generation language model, GPT-4, which is even more powerful and capable of understanding complex contexts than its predecessor.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 14, 2021",
    "category": "Research"
  },
  {
    "title": "IBM Develops AI to Predict Alzheimer's",
    "description": "IBM has developed an artificial intelligence system that can predict the development of Alzheimer's disease with 70% accuracy. The system uses a combination of AI and blood biomarkers.",
    "url": "#",
    "source": "BBC News",
    "date": "October 14, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Business: Impact on Job Market",
    "description": "A new study shows that AI technology can create more jobs than it eliminates. Industries like healthcare, education, and IT could see a surge in job opportunities due to AI advancements.",
    "url": "#",
    "source": "Forbes",
    "date": "October 14, 2021",
    "category": "Business"
  },
  {
    "title": "The Ethics of AI in Surveillance",
    "description": "As AI becomes increasingly prevalent in surveillance systems, concerns about privacy and ethics are on the rise. Experts call for regulations to prevent misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 14, 2021",
    "category": "Ethics"
  }
];
