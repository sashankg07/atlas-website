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
    "title": "AI Models Predict Climate Change Impacts with Unprecedented Accuracy",
    "description": "Researchers have developed cutting-edge AI models that can predict the impacts of climate change with greater precision than ever before. These advancements could revolutionize climate science, enabling more effective mitigation strategies.",
    "url": "#",
    "source": "The AI Times",
    "date": "October 31, 2022",
    "category": "Research"
  },
  {
    "title": "Start-up Unveils AI-empowered Customer Service Platform",
    "description": "Tech startup 'AI Serve' has unveiled a new AI-driven customer service platform. The tool leverages deep learning to understand and respond to customer queries in real-time, promising to transform the customer experience.",
    "url": "#",
    "source": "The Tech Journal",
    "date": "October 31, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tool Helps Detect Early Signs of Parkinson's Disease",
    "description": "A revolutionary AI tool has been developed that can detect early signs of Parkinson's disease. The tool uses machine learning algorithms to analyze speech patterns, offering a non-invasive diagnostic approach.",
    "url": "#",
    "source": "Medical AI News",
    "date": "October 31, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Growing Concern",
    "description": "As AI continues to permeate every aspect of our lives, ethical considerations are becoming increasingly important. Recent debates have highlighted the need for more transparency and accountability in AI systems.",
    "url": "#",
    "source": "AI Ethics Weekly",
    "date": "October 31, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tool 'DeepCode' Simplifies Software Development",
    "description": "A new AI tool named 'DeepCode' is set to simplify the software development process. The tool uses machine learning to detect bugs and suggest improvements, promising to save developers time and effort.",
    "url": "#",
    "source": "AI Developments Daily",
    "date": "October 31, 2022",
    "category": "Tools"
  }
];
