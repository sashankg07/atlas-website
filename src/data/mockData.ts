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
    "title": "AI Revolutionizes Cancer Detection Techniques",
    "description": "Recent advancements in AI have led to the development of new, highly accurate methods for detecting cancer. These AI-based systems can analyze medical images with an accuracy rate higher than that of human experts.",
    "url": "#",
    "source": "Nature",
    "date": "November 04, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Deploy AI to Combat Climate Change",
    "description": "Leading technology companies are leveraging AI to address climate change. Machine learning models are being developed to predict, adapt, and mitigate the effects of this global crisis.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 04, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Lands Major Investment for Revolutionary Product",
    "description": "AI-based start-up, AI Innovations, has secured significant funding for its groundbreaking new product. This development signifies a growing confidence in AI's potential in the business sector.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 04, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: Balancing Advancement with Responsibility",
    "description": "As AI continues to advance rapidly, ethical considerations are increasingly coming into focus. Experts are calling for guidelines to ensure these technologies are developed and used responsibly.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 04, 2021",
    "category": "Ethics"
  },
  {
    "title": "New Open Source Tool Simplifies Machine Learning",
    "description": "A new open source tool aims to make machine learning more accessible. It simplifies complex processes, enabling more people to benefit from AI technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 04, 2021",
    "category": "Tools"
  }
];
