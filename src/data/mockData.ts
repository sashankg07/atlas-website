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
    "title": "AI Breakthrough: Machine Learning Models Predict Climate Change Impact",
    "description": "Researchers have developed an AI model capable of accurately predicting the impact of climate change. This breakthrough could aid in creating effective mitigation strategies.",
    "url": "#",
    "source": "Science Daily",
    "date": "October 29, 2021",
    "category": "Research"
  },
  {
    "title": "AI Transforms the E-Commerce Landscape",
    "description": "AI is revolutionizing the e-commerce industry with personalized shopping experiences and efficient supply chain management. Companies are leveraging AI to enhance customer satisfaction.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 29, 2021",
    "category": "Business"
  },
  {
    "title": "Latest AI Tools for Developers: An Overview",
    "description": "A new suite of AI tools designed for developers is making it easier to incorporate machine learning into applications. These tools promise to democratize access to AI technologies.",
    "url": "#",
    "source": "The Verge",
    "date": "October 29, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Growing Concern",
    "description": "As AI continues to evolve, so does the debate about its ethical implications. There is a growing demand for transparency, fairness, and accountability in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI in Healthcare: A Technological Revolution",
    "description": "Artificial Intelligence is transforming healthcare delivery with predictive analytics, personalized medicine, and robotics. This technology is set to improve patient outcomes and streamline processes.",
    "url": "#",
    "source": "New York Times",
    "date": "October 29, 2021",
    "category": "Technology"
  }
];
