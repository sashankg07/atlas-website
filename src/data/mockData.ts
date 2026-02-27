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
    "title": "AI Breakthrough: Machine Learning Models Predict Climate Changes More Accurately",
    "description": "New AI-based climate models have proven to be more accurate than traditional methods, offering precise predictions for future climate changes. This breakthrough could be instrumental in the fight against global warming.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 05, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizing Customer Service in Post-Pandemic Era",
    "description": "As businesses adapt to the new normal, AI-powered customer service tools are becoming increasingly popular. They are providing an efficient way to handle customer queries while maintaining social distancing protocols.",
    "url": "#",
    "source": "Forbes",
    "date": "October 05, 2021",
    "category": "Business"
  },
  {
    "title": "AI Meets Art: Innovative Tools Transforming Creative Industry",
    "description": "Artificial Intelligence is making inroads into the creative industry, providing artists with innovative tools that enhance their creativity and productivity. It's a game-changer for artists worldwide.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 05, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Bridging the Gap Between Technology and Moral Values",
    "description": "The rapid growth of AI technology has sparked a crucial discussion about ethical implications. Renowned AI experts are now working to ensure technology development aligns with human values and ethical principles.",
    "url": "#",
    "source": "BBC News",
    "date": "October 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI in Healthcare: Next-Gen Tools Aid Early Diagnosis of Diseases",
    "description": "AI is revolutionizing healthcare with next-gen tools that enable early disease diagnosis, improving outcomes and saving lives. These tools are set to transform the future of healthcare.",
    "url": "#",
    "source": "Reuters",
    "date": "October 05, 2021",
    "category": "Technology"
  }
];
