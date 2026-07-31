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
    "title": "AI Revolutionizes Healthcare with Predictive Analytics",
    "description": "Recent developments in AI have enabled the creation of predictive analytics tools that can revolutionize healthcare. These tools can predict disease trends, patient outcomes, and assist in personalized treatment plans.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 25, 2022",
    "category": "Research"
  },
  {
    "title": "Microsoft Unveils New AI-based Cybersecurity Tools",
    "description": "Microsoft has unveiled a suite of new AI-based cybersecurity tools designed to combat increasingly sophisticated online threats. The technology is set to transform our approach to digital security.",
    "url": "#",
    "source": "Wired",
    "date": "September 25, 2022",
    "category": "Technology"
  },
  {
    "title": "AI's Role in Redefining Customer Experience in Retail",
    "description": "AI is playing a critical role in redefining customer experience in retail. Sophisticated algorithms are being used to create personalized experiences and improve customer retention.",
    "url": "#",
    "source": "Forbes",
    "date": "September 25, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Ensuring Fairness in Machine Learning Models",
    "description": "A growing body of research is focusing on ensuring fairness in AI and machine learning models. This work is crucial to prevent biases in AI-derived decisions.",
    "url": "#",
    "source": "The Verge",
    "date": "September 25, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI's New Language Model - A Game Changer for NLP",
    "description": "OpenAI's latest language model represents a significant improvement in natural language processing (NLP). The model exhibits enhanced understanding and generation of human-like text.",
    "url": "#",
    "source": "AI News",
    "date": "September 25, 2022",
    "category": "Tools"
  }
];
