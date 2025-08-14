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
    "title": "Revolutionary AI Model Predicts Climate Change Impact",
    "description": "Researchers have developed a new AI model capable of predicting the impact of climate change with unprecedented accuracy. This innovative tool could help policymakers make more informed decisions about climate action.",
    "url": "#",
    "source": "Nature Journal",
    "date": "October 29, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Next-Gen AI Processor",
    "description": "A leading tech company has unveiled its latest AI processor, promising unrivalled processing speeds and energy efficiency. This hardware breakthrough is set to supercharge AI applications across industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Secures Record Investment",
    "description": "An emerging AI startup has secured record-breaking funding in its latest financing round. The company's unique approach to machine learning is attracting significant interest from prominent investors.",
    "url": "#",
    "source": "Forbes",
    "date": "October 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines Released for Ethical AI Development",
    "description": "A renowned international organization has released comprehensive guidelines for the ethical development and deployment of AI. The guidelines aim to ensure AI technologies respect human rights and democratic values.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "Open-Source AI Tool Streamlines Machine Learning",
    "description": "A new open-source tool for machine learning has been launched, simplifying the process of training and deploying AI models. This tool aims to democratize access to AI and facilitate its use in a wide range of applications.",
    "url": "#",
    "source": "Wired",
    "date": "October 29, 2021",
    "category": "Tools"
  }
];
