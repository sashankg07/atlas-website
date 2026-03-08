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
    "title": "New AI Model Predicts Climate Change Effects with Unprecedented Accuracy",
    "description": "Scientists have developed a new AI model which can predict the effects of climate change with an unprecedented level of precision. The model uses machine learning algorithms to analyze large-scale environmental data.",
    "url": "#",
    "source": "Nature",
    "date": "October 12, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils AI-Powered Cybersecurity Solution",
    "description": "A leading technology company has unveiled a new cybersecurity solution powered by artificial intelligence. The system is said to detect and neutralize threats in real-time with a remarkable accuracy rate.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 12, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $20M in Series A Funding",
    "description": "A promising AI startup has successfully raised $20 million in a series A funding round. The startup plans to use the funds to further develop their AI-powered product line and expand their reach globally.",
    "url": "#",
    "source": "Forbes",
    "date": "October 12, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethicists Call for Greater Transparency in AI Development",
    "description": "A group of ethicists have published a paper calling for greater transparency in the development and use of artificial intelligence. They argue that transparency is key to ensuring ethical and responsible use of the technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 12, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Remote Work",
    "description": "Developers have launched a new AI tool aimed at streamlining remote work. The software uses machine learning algorithms to manage tasks and improve productivity in remote teams.",
    "url": "#",
    "source": "Wired",
    "date": "October 12, 2021",
    "category": "Tools"
  }
];
