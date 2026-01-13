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
    "title": "Groundbreaking AI Model Predicts Climate Change Patterns",
    "description": "Researchers have developed a new AI model capable of predicting future climate change patterns with unprecedented accuracy. This breakthrough could significantly improve our understanding and management of global warming.",
    "url": "#",
    "source": "Nature",
    "date": "November 14, 2022",
    "category": "Research"
  },
  {
    "title": "AI Tech Start-Up Raises $100M in Series C Funding",
    "description": "AI start-up SynthMind has raised $100 million in a recent Series C funding round. The company, known for its innovative machine learning algorithms, plans to use the funds to expand its research and development team.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 14, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics Concerns Rise As Facial Recognition Tech Improves",
    "description": "As facial recognition technology becomes increasingly accurate, ethical concerns about its use are also growing. Critics argue that without proper regulations, this technology could be used for mass surveillance.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 14, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Transforms Text into Realistic Images",
    "description": "A new AI tool called 'Text2Pic' can generate highly realistic images from simple text descriptions. This technology could revolutionize fields such as graphic design and visual storytelling.",
    "url": "#",
    "source": "Wired",
    "date": "November 14, 2022",
    "category": "Tools"
  },
  {
    "title": "Major Tech Companies Adopt AI for Cloud Computing",
    "description": "Google, Amazon, and Microsoft are integrating artificial intelligence into their cloud computing services. The move is expected to provide more efficient and personalized user experiences.",
    "url": "#",
    "source": "Forbes",
    "date": "November 14, 2022",
    "category": "Technology"
  }
];
