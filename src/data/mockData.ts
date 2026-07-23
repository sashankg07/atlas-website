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
    "title": "Groundbreaking AI Predicts Climate Change Impact",
    "description": "Researchers have developed an AI that can accurately predict future climate patterns. The breakthrough could help us prepare for climate change and mitigate its effects.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 24, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Chip Revolutionizes Tech Industry",
    "description": "A new AI chip, built to process machine learning tasks faster and using less power, is set to revolutionize the tech industry. The chip could bring about a new era of ultra-efficient AI hardware.",
    "url": "#",
    "source": "Wired",
    "date": "December 24, 2022",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup for $1.5 Billion",
    "description": "Microsoft has acquired a promising AI startup specializing in natural language processing. The move is expected to significantly enhance Microsoft's AI capabilities.",
    "url": "#",
    "source": "Forbes",
    "date": "December 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Committee Calls for Stricter Regulation",
    "description": "The national AI ethics committee has called for stricter regulation on AI development and implementation. The move comes amidst growing concerns over privacy and bias in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Machine Learning Tool",
    "description": "OpenAI has released a new tool that makes it easier for developers to build and train machine learning models. The tool is expected to democratize access to AI technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 24, 2022",
    "category": "Tools"
  }
];
