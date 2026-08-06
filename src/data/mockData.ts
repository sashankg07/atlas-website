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
    "title": "AI Breakthrough: First Ever Neural Network with Human-like Reasoning",
    "description": "Researchers have developed an AI neural network that exhibits human-like reasoning abilities. The development is a major breakthrough and could revolutionize how AI systems make decisions.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI Predicts Climate Change Impact on Global Economy",
    "description": "A new AI model has been trained to predict the impact of climate change on the global economy. The results could help policymakers make more informed decisions about climate change mitigation strategies.",
    "url": "#",
    "source": "Science Daily",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M to Develop More Efficient Machine Learning Models",
    "description": "An AI startup has raised $100 million in series B funding to develop more energy-efficient machine learning models. The funding round was led by prominent VC firms in the AI space.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: New Framework to Address Bias in AI Systems Released",
    "description": "A leading AI research institute has released a new ethical framework to address bias in AI systems. The framework provides practical guidelines to help developers create fair and unbiased AI applications.",
    "url": "#",
    "source": "AI Ethics Journal",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Image Recognition Training",
    "description": "A new AI tool has been released that streamlines the training of image recognition algorithms. The tool significantly reduces the time and computational resources required to train these algorithms.",
    "url": "#",
    "source": "AI Tools Digest",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
