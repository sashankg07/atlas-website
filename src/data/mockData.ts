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
    "title": "AI Outperforms Doctors in Diagnosing Heart Disease",
    "description": "Researchers have trained an AI system that outperforms doctors in diagnosing heart disease by analyzing ECG results. This breakthrough could revolutionize the healthcare industry, potentially saving millions of lives globally.",
    "url": "#",
    "source": "BBC News",
    "date": "December 24, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Software Predicts Climate Change Impact with Unprecedented Accuracy",
    "description": "A newly developed AI software can now predict the impacts of climate change with an accuracy never before seen. This powerful tool could help policymakers make informed decisions about climate change mitigation strategies.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 24, 2022",
    "category": "Technology"
  },
  {
    "title": "Tesla Unveils Advanced AI Chips for Autonomous Vehicles",
    "description": "Tesla has unveiled its new AI chips, designed to improve the performance and safety of their autonomous vehicles. These chips promise to make self-driving cars more efficient and reliable.",
    "url": "#",
    "source": "Forbes",
    "date": "December 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI's Role in Job Recruitment",
    "description": "As AI becomes more prevalent in the recruitment process, concerns are being raised about its potential to discriminate and bias. Experts are calling for regulations to ensure fairness and transparency.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "Google's New AI Tool Helps Developers Write Cleaner Code",
    "description": "Google has launched a new AI-powered tool that aids developers in writing cleaner and more efficient code. This tool, named 'Code Assist', uses machine learning to suggest improvements and correct errors in real-time.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 24, 2022",
    "category": "Tools"
  }
];
