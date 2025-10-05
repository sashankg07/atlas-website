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
    "title": "AI Transforms Medical Imaging with Unprecedented Accuracy",
    "description": "Researchers have developed a new AI model that significantly enhances the precision and speed of medical imaging, promising breakthroughs in diagnosis and treatment. The model uses deep learning to provide detailed images in seconds.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 20, 2021",
    "category": "Research"
  },
  {
    "title": "AI Startup Raises $100M to Revolutionize eCommerce",
    "description": "An AI startup has raised $100 million in Series C funding to develop sophisticated AI-powered tools that will revolutionize the eCommerce industry. The tools will provide customers with personalized shopping experiences based on their preferences and behaviors.",
    "url": "#",
    "source": "Forbes",
    "date": "October 20, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics Guidelines: A Step Towards Responsible AI",
    "description": "A group of top tech firms have released comprehensive guidelines for AI ethics, aiming to ensure the responsible use of AI technologies. The guidelines focus on fairness, privacy, accountability and transparency in AI applications.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 20, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Predicts Climate Change Patterns",
    "description": "A groundbreaking AI tool has been developed that can accurately predict climate change patterns and their impact on the environment. The tool uses machine learning algorithms to analyze vast amounts of data collected from weather stations worldwide.",
    "url": "#",
    "source": "BBC News",
    "date": "October 20, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Beats Humans in Complex Strategy Game",
    "description": "In a significant milestone for artificial intelligence, a new AI system has outperformed human players in a complex strategy game. This marks another step forward in the development of AI systems capable of strategic decision-making.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 20, 2021",
    "category": "Research"
  }
];
