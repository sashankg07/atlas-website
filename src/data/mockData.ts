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
    "title": "Breakthrough in AI Learning Speeds Sparks Revolution",
    "description": "Researchers have reported a groundbreaking development in AI learning speeds, potentially revolutionizing numerous applications. The new technique nearly doubles the learning rate, allowing AI to adapt to changing scenarios more efficiently.",
    "url": "#",
    "source": "Nature",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "AI Helps Decipher Long-Lost Ancient Texts",
    "description": "Artificial Intelligence technology has been employed to decipher ancient texts, giving researchers new insights into historical cultures. This novel application of AI opens up new possibilities for historical and linguistic research.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Startup Revolutionizes E-Commerce",
    "description": "A cutting-edge startup has developed an AI system that personalizes e-commerce experiences in real-time, significantly boosting sales conversions. This development could set a new standard in online retail.",
    "url": "#",
    "source": "Forbes",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate Intensifies Over Autonomous Weapons",
    "description": "The debate over autonomous weapons systems and the role of AI in decision-making on the battlefield is intensifying. Critics warn of the potential dangers, while proponents argue for the reduced risk to human soldiers.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Simplifies Data Analysis",
    "description": "A new AI tool promises to make data analysis accessible to non-experts, democratizing the field. This innovative software uses AI to interpret and visualize complex data sets with ease.",
    "url": "#",
    "source": "Wired",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
