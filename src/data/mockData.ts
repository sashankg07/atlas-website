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
    "title": "AI Algorithm Outperforms Human Dermatologists in Diagnosing Skin Cancer",
    "description": "Researchers have developed an artificial intelligence algorithm that outperforms human dermatologists in diagnosing skin cancer. The new AI technology could revolutionize early detection and treatment of the disease.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 05, 2022",
    "category": "Research"
  },
  {
    "title": "DeepMind's New AI System: A Leap Forward in Protein Folding Prediction",
    "description": "DeepMind's AlphaFold, an AI system, has achieved remarkable accuracy in predicting protein structure. This breakthrough could speed up drug discovery and disease understanding.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 05, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Google Integrates AI in Their New Data Analytics Tools",
    "description": "Google has integrated AI into its new data analytics tools, allowing businesses to streamline their data processing. The move is expected to enhance decision-making and improve efficiency.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 05, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Growing Concern",
    "description": "As AI technology continues to develop, ethical considerations are becoming increasingly important. Experts are calling for comprehensive policy frameworks to address potential misuse and bias.",
    "url": "#",
    "source": "BBC",
    "date": "October 05, 2022",
    "category": "Ethics"
  },
  {
    "title": "Latest AI-Powered Tools Revolutionize Video Content Creation",
    "description": "New AI-powered tools are making video content creation more accessible and efficient than ever. These advancements could democratize the field, enabling more people to create high-quality content.",
    "url": "#",
    "source": "Wired",
    "date": "October 05, 2022",
    "category": "Tools"
  }
];
