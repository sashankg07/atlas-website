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
    "title": "AI Transforms Diabetic Retinopathy Diagnosis",
    "description": "A recent breakthrough in AI technology has led to a revolutionary diagnostic tool for diabetic retinopathy. The AI model, which can accurately detect the eye disease in its early stages, could significantly reduce the rate of blindness among diabetic patients.",
    "url": "#",
    "source": "New York Times",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI Start-Up Raises $100M in Series B Funding",
    "description": "AI startup, NeuFlow, has successfully raised $100M in a series B funding round. The funds will be used to accelerate the development of their deep learning algorithms and expand their global reach.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Balancing Innovation and Responsibility",
    "description": "As AI continues to advance, debates surrounding ethical considerations have grown. Industry leaders are now calling for comprehensive regulations to ensure the responsible use of AI technologies.",
    "url": "#",
    "source": "Washington Post",
    "date": "September 30, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A new AI-based tool capable of predicting climate change impact has been unveiled. The model can forecast the effects of climate change with unprecedented accuracy, helping shape future environmental strategies.",
    "url": "#",
    "source": "BBC News",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "DeepMind's Latest AI Defeats Human Chess Champion",
    "description": "DeepMind's newest AI, AlphaZ, has defeated a human chess champion in a series of matches. This achievement underscores the stunning progress being made in the field of artificial intelligence.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Research"
  }
];
