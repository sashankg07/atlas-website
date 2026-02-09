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
    "title": "AI Transforms the Landscape of E-commerce",
    "description": "Artificial Intelligence is revolutionizing the e-commerce industry by driving customer engagement and increasing sales. AI-powered chatbots and recommendation systems are at the forefront of this transformation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 13, 2022",
    "category": "Business"
  },
  {
    "title": "Researchers Unveil New AI Model that Predicts Climate Change Patterns",
    "description": "A team of scientists has developed an AI model capable of predicting climate change patterns with unprecedented accuracy. This breakthrough could play a crucial role in global climate change mitigation efforts.",
    "url": "#",
    "source": "Nature",
    "date": "September 13, 2022",
    "category": "Research"
  },
  {
    "title": "Ethical Considerations in AI: A Growing Concern",
    "description": "With the rise of AI, ethical issues such as privacy, fairness, and transparency are gaining prominence. Experts call for robust ethical frameworks to guide the development and use of AI technologies.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 13, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Google Unveils New AI Tools for App Developers",
    "description": "Google has introduced a suite of new AI tools designed to help app developers improve user engagement and retention. These tools leverage machine learning to personalize app experiences.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 13, 2022",
    "category": "Tools"
  },
  {
    "title": "AI and Quantum Computing: A Promising Convergence",
    "description": "The convergence of AI and quantum computing promises to accelerate problem-solving and data analysis capabilities exponentially. This could usher in a new era of technological advancements.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 13, 2022",
    "category": "Technology"
  }
];
