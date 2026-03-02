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
    "title": "AI Achieves Breakthrough in Protein Folding",
    "description": "Google's DeepMind has made a significant breakthrough in predicting the structure of proteins, which could have far-reaching implications in drug discovery and biology research. The AI model, AlphaFold, has outperformed all other systems in a major competition.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 07, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Based Facial Recognition Tools Spark Ethics Debate",
    "description": "The use of AI-based facial recognition tools by law enforcement and governments has sparked a heated debate about ethics, privacy, and regulation. Critics argue these technologies can lead to false positives and contribute to racial bias.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 07, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Trends Shaping the Business Landscape in 2023",
    "description": "From automation to personalization, AI is shaping the business landscape like never before. Experts predict that AI will continue to drive innovation in industries ranging from healthcare to finance in 2023.",
    "url": "#",
    "source": "Forbes",
    "date": "November 07, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Detects Deepfakes with 96% Accuracy",
    "description": "Researchers have developed a new AI tool that can detect deepfakes with 96% accuracy, a significant improvement over previous methods. This tool could play a crucial role in combating the spread of misinformation and fake news.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 07, 2022",
    "category": "Tools"
  },
  {
    "title": "IBM Unveils Breakthrough in Quantum Computing",
    "description": "IBM has unveiled a major breakthrough in quantum computing that could accelerate the development of AI technologies. The new quantum computer is expected to significantly enhance machine learning capabilities.",
    "url": "#",
    "source": "Bloomberg",
    "date": "November 07, 2022",
    "category": "Technology"
  }
];
