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
    "title": "AI Models Predict Future of Climate Change",
    "description": "Researchers have developed a new AI model that can more accurately predict the long-term effects of climate change. This groundbreaking technology is set to revolutionize environmental studies.",
    "url": "#",
    "source": "Nature",
    "date": "November 06, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils AI-powered Cybersecurity System",
    "description": "A leading tech company has launched a state-of-the-art cybersecurity system, powered by AI. The system is designed to combat increasing cyber threats with unparalleled efficiency.",
    "url": "#",
    "source": "The Verge",
    "date": "November 06, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Transforms Financial Forecasting in Business",
    "description": "Companies are increasingly turning to AI for financial forecasting, with a new wave of AI-powered tools offering more accurate and timely predictions. This shift is transforming the way businesses plan and make decisions.",
    "url": "#",
    "source": "Forbes",
    "date": "November 06, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI in Healthcare",
    "description": "As AI continues to make strides in healthcare, experts are raising ethical concerns. Key issues include data privacy, informed consent, and the potential for bias in AI algorithms.",
    "url": "#",
    "source": "Scientific American",
    "date": "November 06, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Revolutionize Design Industry",
    "description": "A new suite of AI tools is revolutionizing the design industry, enabling designers to create more visually stunning and functional designs in less time. The tools leverage machine learning to automate and enhance various design processes.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 06, 2021",
    "category": "Tools"
  }
];
