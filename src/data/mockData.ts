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
    "title": "AI Revolutionizes Healthcare with Predictive Analysis",
    "description": "Recent advancements in AI technologies have enabled predictive analysis in the healthcare sector, promising a significant improvement in patient care and disease prediction. This breakthrough has the potential to revolutionize the global healthcare industry.",
    "url": "#",
    "source": "The AI Times",
    "date": "December 01, 2021",
    "category": "Technology"
  },
  {
    "title": "Artificial Intelligence to Drive Future Business Strategies",
    "description": "As companies worldwide adapt to the digital era, AI emerges as a key driver in shaping business strategies. The integration of AI in business operations is proving to be a game-changer, providing businesses with a competitive edge.",
    "url": "#",
    "source": "Business Insider",
    "date": "December 01, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Ensuring Fairness and Transparency",
    "description": "As AI becomes pervasive in our daily lives, the importance of AI ethics comes into focus. Recent discussions revolve around the need for transparency and fairness in AI systems to prevent bias and discrimination.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 01, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Research into Explainable AI Unveiled",
    "description": "In the pursuit of transparency in AI systems, researchers have unveiled new insights into explainable AI. This research aims to make AI decisions more transparent and understandable to humans.",
    "url": "#",
    "source": "Nature",
    "date": "December 01, 2021",
    "category": "Research"
  },
  {
    "title": "AI Tools Transforming the Landscape of Data Analysis",
    "description": "The introduction of AI-based tools in data analysis is transforming the way businesses interpret and use data. These tools promise to deliver more accurate and faster insights, driving smarter business decisions.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 01, 2021",
    "category": "Tools"
  }
];
