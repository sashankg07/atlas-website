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
    "title": "AI Breakthrough: DeepMind Masters Protein Folding",
    "description": "Google's DeepMind has unveiled a new AI that can predict the 3D structures of proteins with remarkable accuracy. This breakthrough could significantly speed up drug discovery and disease understanding.",
    "url": "#",
    "source": "BBC News",
    "date": "September 28, 2022",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizing the World of Finance",
    "description": "AI and machine learning are transforming the finance sector, offering new ways to prevent fraud, optimize trading, and improve customer service. The technology's predictive capabilities are particularly valuable in this industry.",
    "url": "#",
    "source": "Financial Times",
    "date": "September 28, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics: The Ongoing Debate on Autonomous Weapons",
    "description": "As AI continues to evolve, so does the debate on autonomous weapons. Critics argue that these weapons could lead to lethal decision-making without human intervention, while proponents believe they could minimize casualties in conflict situations.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 28, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Transforming the Landscape of Healthcare",
    "description": "From diagnosis to treatment, AI is revolutionizing healthcare. It's enabling personalized medicine and predictive analytics, improving patient care and outcomes.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 28, 2022",
    "category": "Technology"
  },
  {
    "title": "New AI Tools Enhance Remote Learning",
    "description": "With the shift to remote learning, new AI tools are emerging to enhance the experience. These tools use AI to provide personalized lesson plans and instant feedback, improving the learning process for students worldwide.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 28, 2022",
    "category": "Tools"
  }
];
