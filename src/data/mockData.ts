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
    "title": "Revolutionizing Medicine with AI: A New Breakthrough",
    "description": "Scientists have developed an AI model capable of predicting the onset of diseases with high accuracy. This could potentially revolutionize preventive medicine and healthcare.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 06, 2022",
    "category": "Research"
  },
  {
    "title": "Artificial Intelligence Takes on Climate Change",
    "description": "A new breed of AI algorithms is helping scientists understand and combat climate change. The AI models are being used to predict weather patterns and analyze climate data.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 06, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Unveils AI-powered Virtual Assistant",
    "description": "A leading technology company has unleashed a next-gen AI-powered virtual assistant. The assistant promises to offer seamless and efficient tasks execution, taking user experience to new heights.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 06, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: The Next Frontier",
    "description": "As the AI technology continues to evolve, there is an increasing need for ethical guidelines. Experts are calling for a global consensus on the ethical use of AI.",
    "url": "#",
    "source": "BBC",
    "date": "October 06, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A newly developed AI tool promises to transform the way businesses analyze data. The tool uses machine learning to provide insights into complex data sets.",
    "url": "#",
    "source": "Forbes",
    "date": "October 06, 2022",
    "category": "Tools"
  }
];
