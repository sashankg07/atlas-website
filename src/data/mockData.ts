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
    "title": "AI Breakthrough: Machine Learning Models Now Predict Climate Change Impacts",
    "description": "Researchers have developed AI models that can accurately predict the impacts of climate change, including potential damage to ecosystems. These innovations could revolutionize environmental research and policy-making.",
    "url": "#",
    "source": "Nature AI",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: Bias in Facial Recognition Technology Sparks Concern",
    "description": "Recent studies highlight the prevalence of racial and gender bias in facial recognition technology. Experts call for greater transparency and ethical considerations in AI development.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI in Business: How Artificial Intelligence is Transforming Customer Experience",
    "description": "Several companies are increasingly leveraging AI to deliver personalized and efficient customer experiences. This trend is reshaping business operations and customer expectations alike.",
    "url": "#",
    "source": "Forbes AI",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tools: New Language Model Transforms Content Creation",
    "description": "A new AI-powered language model promises to transform content creation, offering high-quality writing assistance and innovative features. This tool is expected to redefine digital writing and communication.",
    "url": "#",
    "source": "The Verge AI",
    "date": "September 30, 2021",
    "category": "Tools"
  },
  {
    "title": "AI and Edge Computing: The Future of Technology",
    "description": "The combination of AI and edge computing is heralded as the future of technology, promising real-time insights and enhanced performance. This development is set to revolutionize data processing and analytics.",
    "url": "#",
    "source": "Wired AI",
    "date": "September 30, 2021",
    "category": "Technology"
  }
];
