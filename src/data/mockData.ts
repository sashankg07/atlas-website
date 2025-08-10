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
    "title": "AI Breakthrough: Machine Learning Models Predict Climate Change Impacts",
    "description": "Researchers have developed a new AI model capable of predicting the environmental impact of climate change with unprecedented accuracy. The AI leverages machine learning algorithms to process vast amounts of climate data.",
    "url": "#",
    "source": "Nature",
    "date": "December 05, 2021",
    "category": "Research"
  },
  {
    "title": "AI Startup Achieves $2 Billion Valuation Amid Rising Interest in AI Solutions",
    "description": "AI startup, DataRobot, has reached a $2 billion valuation after a successful funding round. The company's rapid growth underscores the increasing demand for AI solutions in business.",
    "url": "#",
    "source": "Forbes",
    "date": "December 05, 2021",
    "category": "Business"
  },
  {
    "title": "IBM Unveils New AI Designed to Combat Cybersecurity Threats",
    "description": "IBM has released an advanced AI system designed to identify and combat cybersecurity threats. The AI uses machine learning algorithms to detect anomalies and potential threats in real-time.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 05, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI's Role in Job Recruitment",
    "description": "Critics raise ethical concerns over the use of AI in job recruitment, arguing it could lead to biased hiring practices. The debate has sparked conversations about the need for regulatory frameworks in AI.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Introduces New AI Tool to Improve Web Accessibility",
    "description": "Google has launched a new AI tool aimed at improving web accessibility for individuals with disabilities. The tool leverages machine learning to convert on-screen text into spoken words.",
    "url": "#",
    "source": "CNET",
    "date": "December 05, 2021",
    "category": "Tools"
  }
];
