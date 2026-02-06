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
    "title": "Revolutionizing Healthcare: AI Detects Lung Cancer with Unprecedented Accuracy",
    "description": "A new AI model has been developed that outperforms radiologists in detecting lung cancer. This breakthrough could potentially revolutionize early detection and treatment methodologies.",
    "url": "#",
    "source": "AI Today",
    "date": "October 24, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots are Transforming the Warehouse Industry",
    "description": "AI Technology is setting new benchmarks in the warehouse industry by maximizing efficiency and reducing errors. Robots are now capable of performing complex tasks independently.",
    "url": "#",
    "source": "The Future Tech",
    "date": "October 24, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI for Climate Change Solutions",
    "description": "A leading tech company is investing heavily in AI to develop effective solutions for climate change. The initiative aims to leverage AI to forecast climate patterns and devise mitigation strategies.",
    "url": "#",
    "source": "Business AI",
    "date": "October 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Faces Ethical Scrutiny: Raising Questions on Privacy and Bias",
    "description": "Ethical concerns surrounding AI technology have come to the fore, with critics questioning its implications on privacy and societal biases. Governments and tech companies are urged to address these issues promptly.",
    "url": "#",
    "source": "Ethics in AI",
    "date": "October 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Toolkit Promises to Simplify Machine Learning",
    "description": "A newly launched AI toolkit claims to make machine learning accessible to non-experts. This development could democratize AI application across sectors.",
    "url": "#",
    "source": "Tech Insider",
    "date": "October 24, 2022",
    "category": "Tools"
  }
];
