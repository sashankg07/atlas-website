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
    "title": "AI Revolutionizes Medical Diagnostics",
    "description": "Artificial Intelligence (AI) is now capable of diagnosing diseases more accurately than human doctors. The breakthrough promises to revolutionize the medical field and improve patient outcomes dramatically.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 23, 2023",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest in AI for Climate Change Solutions",
    "description": "Leading tech companies are heavily investing in AI to find solutions to climate change. The initiative aims to leverage machine learning to create more sustainable technologies and practices.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 23, 2023",
    "category": "Business"
  },
  {
    "title": "AI Ethics in Focus: Navigating Bias and Fairness",
    "description": "As AI continues to permeate various sectors, experts call for a comprehensive approach to address bias and fairness. The call to action emphasizes the need for ethical guidelines in AI development and deployment.",
    "url": "#",
    "source": "BBC News",
    "date": "September 23, 2023",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tools Transforming Remote Learning",
    "description": "Artificial Intelligence tools are revolutionizing the education sector by providing personalized learning experiences. These tools are enhancing remote learning, making it more efficient and engaging.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 23, 2023",
    "category": "Tools"
  },
  {
    "title": "Breakthrough in AI Technology: The Rise of Quantum Machine Learning",
    "description": "Scientists have made a significant breakthrough in AI technology by integrating quantum computing with machine learning. This development is expected to accelerate AI capabilities exponentially in the years to come.",
    "url": "#",
    "source": "Wired",
    "date": "September 23, 2023",
    "category": "Technology"
  }
];
