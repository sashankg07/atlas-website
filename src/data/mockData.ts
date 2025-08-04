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
    "title": "AI Breakthrough: Quantum Computing Meets Artificial Intelligence",
    "description": "Researchers have developed a new quantum algorithm that significantly improves the speed of complex computations, paving the way for advancements in artificial intelligence. This could usher in a new era of quantum-AI hybrid systems.",
    "url": "#",
    "source": "The AI Times",
    "date": "November 14, 2021",
    "category": "Research"
  },
  {
    "title": "AI-driven Chatbots Revolutionize Customer Service",
    "description": "Businesses worldwide are leveraging AI-powered chatbots to streamline their customer service. The technology not only improves efficiency but also ensures a personalized experience for customers.",
    "url": "#",
    "source": "Business AI Weekly",
    "date": "November 14, 2021",
    "category": "Business"
  },
  {
    "title": "Ethics of AI: Addressing Bias in Machine Learning",
    "description": "As AI systems become more prevalent, so do concerns about embedded biases. Experts call for more transparent algorithms to ensure fairness and prevent discrimination in AI applications.",
    "url": "#",
    "source": "AI Ethics Journal",
    "date": "November 14, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A groundbreaking AI tool can now predict the potential impacts of climate change with remarkable accuracy. This tool will help scientists and policymakers create effective strategies for climate action.",
    "url": "#",
    "source": "Science Daily",
    "date": "November 14, 2021",
    "category": "Tools"
  },
  {
    "title": "AI in Healthcare: Revolutionizing Disease Diagnosis",
    "description": "AI technology is transforming the healthcare sector by enabling faster and more accurate disease diagnosis. This could significantly improve patient outcomes and reduce healthcare costs.",
    "url": "#",
    "source": "Medical AI News",
    "date": "November 14, 2021",
    "category": "Technology"
  }
];
