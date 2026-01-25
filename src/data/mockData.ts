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
    "title": "AI Outperforms Doctors in Diagnosing Skin Cancer",
    "description": "A new study reports that artificial intelligence has surpassed human doctors in accurately diagnosing skin cancer, marking a major breakthrough in medical AI. This could revolutionize healthcare, with AI potentially being used as a diagnostic tool in the near future.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 10, 2022",
    "category": "Research"
  },
  {
    "title": "AI Startup Raises $100M for Cloud-based Machine Learning",
    "description": "AI startup, CloudMind, has raised $100 million in Series B funding to advance its cloud-based machine learning platform. The platform allows businesses to develop and implement AI tools more efficiently.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 10, 2022",
    "category": "Business"
  },
  {
    "title": "Google's New AI Tool Predicts Weather with Unprecedented Accuracy",
    "description": "Google's latest AI tool boasts unprecedented accuracy in weather prediction, outperforming traditional models. The tool uses machine learning to analyze atmospheric data and generate forecasts in real-time.",
    "url": "#",
    "source": "The Verge",
    "date": "October 10, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate Intensifies: Bias and Fairness Under Scrutiny",
    "description": "As AI becomes more prevalent, debates around AI ethics, particularly issues of bias and fairness, are intensifying. Researchers and businesses alike are calling for more transparency and accountability in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 10, 2022",
    "category": "Ethics"
  },
  {
    "title": "New Open-source AI Tool Streamlines Machine Learning Process",
    "description": "AI researchers have developed a new open-source AI tool that streamlines the machine learning process. The tool, called AutoML, automates the design of machine learning models, making AI more accessible to non-experts.",
    "url": "#",
    "source": "Wired",
    "date": "October 10, 2022",
    "category": "Tools"
  }
];
