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
    "title": "AI Breaks New Ground in Disease Prediction",
    "description": "Artificial Intelligence has achieved a breakthrough in predicting disease progression. The technology is set to revolutionize the healthcare sector by providing early diagnosis and personalized treatment plans.",
    "url": "#",
    "source": "The AI Times",
    "date": "March 19, 2023",
    "category": "Research"
  },
  {
    "title": "New AI Tool Streamlines Business Analytics",
    "description": "A newly developed AI tool is redefining business analytics, enabling companies to make smarter decisions based on real-time data analysis. This revolutionary platform promises to enhance efficiency and effectiveness in businesses.",
    "url": "#",
    "source": "Business AI Weekly",
    "date": "March 19, 2023",
    "category": "Technology"
  },
  {
    "title": "Google's Quantum AI Lab Achieves Major Breakthrough",
    "description": "Google's Quantum AI Lab has achieved a major milestone in quantum computing. This breakthrough is set to accelerate complex computations, making it a game-changer in the field of AI.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 19, 2023",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations of AI in Predictive Policing",
    "description": "As AI finds its way into law enforcement through predictive policing, ethical debates are emerging. Concerns revolve around potential biases in AI algorithms and the implications for civil liberties.",
    "url": "#",
    "source": "AI Ethical Review",
    "date": "March 19, 2023",
    "category": "Ethics"
  },
  {
    "title": "AI-Powered Chatbots Transforming Customer Service",
    "description": "AI-powered chatbots are transforming customer service, providing instant responses and 24/7 support. Companies are increasingly adopting this technology to improve customer experience and reduce operational costs.",
    "url": "#",
    "source": "AI Business Review",
    "date": "March 19, 2023",
    "category": "Business"
  }
];
