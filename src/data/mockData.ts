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
    "title": "AI Beats Physicians in Diagnosing Skin Cancer",
    "description": "A new study reveals that artificial intelligence can now diagnose skin cancer with more accuracy than experienced dermatologists. This breakthrough could revolutionize future of medical diagnosis.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 26, 2022",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizing the Renewable Energy Sector",
    "description": "Artificial intelligence is playing a pivotal role in optimizing renewable energy production. AI systems are helping to predict energy production and demand, thus increasing efficiency.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 26, 2022",
    "category": "Technology"
  },
  {
    "title": "AI to Drive the Future of E-commerce",
    "description": "The integration of AI in e-commerce is reshaping the shopping experience. AI is enhancing personalized shopping by understanding user behavior and preferences.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "October 26, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Progress and Moral Dilemma",
    "description": "As AI development accelerates, ethical considerations come to the forefront. The discussion centers around privacy, data usage, and the potential societal impacts of AI.",
    "url": "#",
    "source": "The Economist",
    "date": "October 26, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Animation Creation",
    "description": "A novel AI tool is set to revolutionize the animation industry by automating tedious tasks. This breakthrough will allow animators to focus more on creativity.",
    "url": "#",
    "source": "BBC News",
    "date": "October 26, 2022",
    "category": "Tools"
  }
];
