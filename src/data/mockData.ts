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
    "title": "AI Breaks New Ground in Disease Prediction",
    "description": "Researchers have developed a new AI model that can predict the likelihood of diseases more accurately than ever before. This breakthrough could revolutionize healthcare and save countless lives.",
    "url": "#",
    "source": "Nature Medicine",
    "date": "March 07, 2023",
    "category": "Research"
  },
  {
    "title": "AI Changing the Shape of Business Analytics",
    "description": "Artificial Intelligence is transforming business analytics by providing more insightful and accurate predictions. Companies are harnessing this power to make smarter decisions and gain a competitive edge.",
    "url": "#",
    "source": "Forbes",
    "date": "March 07, 2023",
    "category": "Business"
  },
  {
    "title": "The Ethics of AI: A Growing Concern",
    "description": "As AI continues to grow and evolve, ethical concerns are becoming more prominent. Experts are calling for robust regulations to ensure AI develops in a way that benefits humanity, not harms it.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 07, 2023",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A new AI-powered tool is making it easier for analysts to interpret and utilize large sets of data. This tool could greatly improve efficiency in many industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 07, 2023",
    "category": "Tools"
  },
  {
    "title": "AI Revolutionizes Weather Prediction",
    "description": "Artificial Intelligence is being used to create more accurate and timely weather predictions. This development could help us better prepare for severe weather events and potentially save lives.",
    "url": "#",
    "source": "National Geographic",
    "date": "March 07, 2023",
    "category": "Technology"
  }
];
