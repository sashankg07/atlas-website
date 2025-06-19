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
    "title": "AI Outperforms Humans in Predicting Heart Attacks",
    "description": "A new AI system has shown superior accuracy in predicting heart attacks compared to human doctors. This breakthrough could revolutionize healthcare and save countless lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 05, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Advanced AI Chip",
    "description": "A leading tech company has unveiled a new AI chip that promises to deliver unprecedented speed and efficiency for machine learning models. The chip could push the boundaries of AI applications.",
    "url": "#",
    "source": "Wired",
    "date": "October 05, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Bags $50M in Series B Funding",
    "description": "An AI start-up that uses machine learning to automate customer service has just raised $50M in Series B funding. The funding will accelerate its global expansion and product development.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 05, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics of AI: Balancing Innovation with Responsibility",
    "description": "As AI continues to permeate our daily lives, the question of ethical use and responsibility is more relevant than ever. Experts call for stricter regulations to prevent misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 05, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A recently launched AI tool promises to revolutionize data analysis by automating complex processes. The tool is expected to save businesses countless hours and resources.",
    "url": "#",
    "source": "Forbes",
    "date": "October 05, 2022",
    "category": "Tools"
  }
];
