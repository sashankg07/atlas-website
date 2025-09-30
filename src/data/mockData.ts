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
    "title": "AI Breakthrough: Machine Learning Models Now Predict Climate Change Impact",
    "description": "In a significant development, AI researchers have deployed machine learning models to predict climate change effects with unprecedented accuracy. These models are expected to play a crucial role in planning and mitigating future climate risks.",
    "url": "#",
    "source": "The New York Times",
    "date": "April 02, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Launches New AI Toolset for Developers",
    "description": "In a bid to simplify AI development, a leading Tech company has unveiled an innovative toolkit for AI developers. The toolkit is designed to streamline the process of building, training, and deploying AI models.",
    "url": "#",
    "source": "TechCrunch",
    "date": "April 02, 2022",
    "category": "Tools"
  },
  {
    "title": "AI in Healthcare: Revolutionizing Disease Detection",
    "description": "AI is transforming healthcare with state-of-the-art disease detection algorithms. These advanced systems are enabling early detection of diseases, significantly improving patient outcomes.",
    "url": "#",
    "source": "BBC News",
    "date": "April 02, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Innovation and Regulation",
    "description": "As AI continues to evolve, ethical considerations are coming to the forefront. Experts are calling for a balance between innovation and regulatory measures to ensure responsible use of AI.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 02, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Investments Soar as Businesses Seek Competitive Edge",
    "description": "Corporate investments in AI are skyrocketing as businesses seek to harness the power of AI for a competitive edge. AI is increasingly seen as a key driver of business innovation and growth.",
    "url": "#",
    "source": "Forbes",
    "date": "April 02, 2022",
    "category": "Business"
  }
];
