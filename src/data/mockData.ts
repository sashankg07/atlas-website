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
    "title": "AI Breakthrough: Revolutionary Machine Learning Algorithm Unveiled",
    "description": "Researchers have unveiled a revolutionary machine learning algorithm that can rapidly learn from minimal data inputs. This breakthrough could redefine the AI landscape, opening up new possibilities for its application across industries.",
    "url": "#",
    "source": "AI Daily",
    "date": "November 10, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: New Guidelines Released for Responsible AI Development",
    "description": "A leading technology group has released new guidelines to foster responsible AI development. They aim to address concerns about fairness, transparency, and accountability in AI systems.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 10, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI in Retail: How Artificial Intelligence is Transforming the Retail Industry",
    "description": "From personalized shopping experiences to demand forecasting, AI is making a significant impact on the retail industry. Companies are leveraging AI to improve customer experiences and drive growth.",
    "url": "#",
    "source": "Forbes",
    "date": "November 10, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI-Driven Tool Enhances Image Recognition",
    "description": "A new AI-driven tool has been developed that significantly enhances image recognition capabilities. This tool will potentially revolutionize fields such as autonomous vehicles and healthcare.",
    "url": "#",
    "source": "Engadget",
    "date": "November 10, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Powers Next-Gen Quantum Computing",
    "description": "AI is being leveraged to help solve complex problems in quantum computing. This integration promises to accelerate the development of quantum technologies and their practical applications.",
    "url": "#",
    "source": "BBC Tech",
    "date": "November 10, 2021",
    "category": "Technology"
  }
];
