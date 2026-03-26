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
    "title": "AI Helps Scientists Predict Catastrophic Weather Events",
    "description": "Researchers have developed an AI model that can predict catastrophic weather events with unprecedented accuracy. This breakthrough could aid in more effective disaster management and planning.",
    "url": "#",
    "source": "The Science Times",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Reveals New AI Supercomputer",
    "description": "A leading technology company has unveiled its latest AI supercomputer, promising to significantly enhance machine learning capabilities and data processing speeds.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises Millions in Series B Funding",
    "description": "An innovative AI startup has successfully raised millions of dollars in Series B funding, signaling increasing investor interest in the artificial intelligence sector.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Report Highlights Ethical Concerns in AI",
    "description": "A new report from a reputable human rights organization raises concerns about the potential misuse of AI and the need for ethical guidelines and regulations.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Machine Learning Tool",
    "description": "OpenAI has released a cutting-edge tool designed to make machine learning more accessible, aiming to democratize the field and encourage innovation.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
