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
    "title": "AI Breaks Ground in Predicting Climate Change Effects",
    "description": "Scientists have leveraged AI to develop more accurate models for predicting the impact of climate change. This breakthrough could play a crucial role in formulating future environmental policies.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "Revolutionizing Healthcare: AI Proves Effective in Early Cancer Detection",
    "description": "A new AI algorithm has been designed to detect early signs of cancer, potentially saving countless lives. The technology has shown promising results in recent trials.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Acquires AI Startup to Boost Cloud Services",
    "description": "A major tech company has acquired a promising AI startup, aiming to enhance its cloud services. The move follows the trend of tech companies leveraging AI for business growth.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: Balancing Innovation and Privacy",
    "description": "As AI continues to evolve, ethical discussions around privacy are intensifying. Experts are calling for more robust regulations to ensure AI developments respect user privacy.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Software Development Process",
    "description": "A newly released AI tool aims to simplify the software development process, promising to drastically reduce the time spent on coding and debugging.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
