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
    "title": "AI Beats Human Doctors in Diagnosing Skin Cancer: A Landmark Study",
    "description": "In a groundbreaking study, artificial intelligence has dramatically outperformed a team of dermatologists in diagnosing skin cancer. This AI breakthrough could revolutionize the healthcare industry.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 21, 2022",
    "category": "Research"
  },
  {
    "title": "Google's AI Can Now Predict Weather Patterns with Incredible Accuracy",
    "description": "Google has developed an AI model capable of predicting weather patterns with unprecedented precision. The system could significantly improve local weather forecasts, aiding in disaster management.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 21, 2022",
    "category": "Technology"
  },
  {
    "title": "Apple Acquires AI Startup Focusing on Edge Computing",
    "description": "Apple has acquired an AI startup that specializes in edge computing, aiming to enhance the AI capabilities of its devices while minimizing the data sent to the cloud.",
    "url": "#",
    "source": "Bloomberg",
    "date": "September 21, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Becomes a Major Focus in Tech Companies",
    "description": "Tech giants are increasingly implementing AI ethics guidelines to ensure the responsible use of artificial intelligence. The move is seen as a crucial step to address growing concerns about AI's societal impact.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 21, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases Powerful NLP Tool, Expanding AI's Linguistic Capabilities",
    "description": "OpenAI has released a new natural language processing tool that can understand and generate human-like text. The tool could pave the way for more sophisticated AI communication.",
    "url": "#",
    "source": "Wired",
    "date": "September 21, 2022",
    "category": "Tools"
  }
];
