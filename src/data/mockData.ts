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
    "title": "New AI Algorithm Predicts Alzheimer's Disease Years Before Diagnosis",
    "description": "Researchers have developed an AI algorithm that can predict the onset of Alzheimer's disease years before symptoms appear. The technology could revolutionize early detection and treatment strategies.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 01, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Agriculture: The Future of Farming",
    "description": "With the help of artificial intelligence, farmers are improving yields and reducing waste. AI technologies such as machine learning and predictive analytics are transforming the agriculture industry.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 01, 2021",
    "category": "Technology"
  },
  {
    "title": "Google AI's Latest Breakthrough: Understanding Language in Real-world Context",
    "description": "Google AI has made a significant breakthrough in natural language understanding. Their new model can comprehend and respond to language in a contextually accurate manner, marking a major step forward in conversational AI.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 01, 2021",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Rising Concern",
    "description": "As AI continues to permeate every aspect of our lives, the ethical implications of its use are becoming increasingly important. Experts are calling for stringent regulations to address potential biases and misuse.",
    "url": "#",
    "source": "BBC News",
    "date": "December 01, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Transforming the Healthcare Industry",
    "description": "Artificial intelligence tools are increasingly being used in healthcare for diagnosis, treatment planning, and patient monitoring. This trend is expected to improve patient outcomes and efficiency in the health sector.",
    "url": "#",
    "source": "Forbes",
    "date": "December 01, 2021",
    "category": "Tools"
  }
];
