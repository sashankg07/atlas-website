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
    "title": "AI Breakthrough: Machine Learning Model Self-Corrects Errors",
    "description": "A team of researchers have developed a new AI model that can learn from its own mistakes, potentially revolutionizing the field of machine learning. The model, dubbed 'EverLearning', has shown the ability to self-correct its own programming errors.",
    "url": "#",
    "source": "AI Daily",
    "date": "October 17, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Business: New Startup Uses AI to Streamline Supply Chains",
    "description": "SupplyAI, a promising startup, is using AI to optimize supply chains and reduce waste. Their innovative approach is predicted to save companies millions in lost revenue.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 17, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: The Debate Over AI in Surveillance Intensifies",
    "description": "As AI becomes more integrated into surveillance systems, concerns over privacy and ethics are growing. Critics argue that these technologies could lead to invasive monitoring and potential misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 17, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tools: Google Launches AI-powered Writing Assistant",
    "description": "Google has introduced a new AI-powered writing assistant that can generate high-quality content. The tool, called 'WriteAI', is aimed at content creators, journalists, and businesses.",
    "url": "#",
    "source": "The Verge",
    "date": "October 17, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Technology: Breakthrough in AI Voice Synthesis",
    "description": "A new AI voice synthesis technology can now mimic any voice with remarkable accuracy. The technology, developed by Voicemod, could revolutionize industries from entertainment to customer service.",
    "url": "#",
    "source": "Wired",
    "date": "October 17, 2021",
    "category": "Technology"
  }
];
