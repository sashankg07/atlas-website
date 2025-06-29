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
    "title": "AI Technology Revolutionizes Healthcare Industry",
    "description": "Artificial intelligence is set to revolutionize the healthcare industry, showing promise in early detection and diagnosis of various diseases. The integration of AI with medical systems offers a new perspective in precision medicine.",
    "url": "#",
    "source": "AI Tech News",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Model Predicts Climate Change Trends",
    "description": "A new AI model developed by researchers offers accurate predictions of climate change trends, helping in the creation of effective mitigation strategies. This breakthrough underlines AI's potential role in addressing global challenges.",
    "url": "#",
    "source": "DeepMind",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics Discussed at 2021 AI Summit",
    "description": "Notable figures in AI and technology discuss the ethical implications of AI at the 2021 AI Summit, calling for more transparency and regulation in the rapidly evolving field.",
    "url": "#",
    "source": "AI Today",
    "date": "September 30, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Startup Uses AI to Revolutionize Customer Service",
    "description": "A promising startup is leveraging AI to transform the customer service experience, using intelligent bots to provide accurate, personalized assistance to consumers.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 30, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning",
    "description": "A newly launched tool aims to make machine learning more accessible, using AI to automate complex processes and make it easier for beginners to get started.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
