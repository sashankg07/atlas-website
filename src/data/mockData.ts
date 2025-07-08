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
    "title": "Revolutionizing Healthcare: AI Diagnoses Cancer Faster Than Ever Before",
    "description": "In a breakthrough study, AI has been utilized to diagnose cancer in its early stages, outperforming human doctors. The AI system, trained on thousands of patient records, has shown unprecedented accuracy.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 05, 2021",
    "category": "Research"
  },
  {
    "title": "Artificial Intelligence: The Future of Autonomous Vehicles",
    "description": "Leading automobile manufacturers and tech companies are now focusing on AI to power the future of autonomous driving. The integration of AI is expected to significantly improve safety and efficiency.",
    "url": "#",
    "source": "Forbes",
    "date": "October 05, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in the Business World: How AI is Transforming Customer Service",
    "description": "Companies are increasingly relying on AI for customer service. Chatbots, powered by sophisticated AI algorithms, are providing faster, 24/7 customer support, enhancing user experience like never before.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 05, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Questions Raised Over AI Use in Criminal Justice System",
    "description": "With AI being recently used in the criminal justice system, concerns over fairness and transparency have been raised. The debate centers on how AI algorithms are being used to assess the risk of recidivism.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Effects More Accurately",
    "description": "A new AI tool developed by scientists predicts climate change effects with unprecedented precision, potentially revolutionizing climate science. The tool uses machine learning to analyze complex climate models.",
    "url": "#",
    "source": "Nature",
    "date": "October 05, 2021",
    "category": "Tools"
  }
];
