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
    "title": "AI Breakthrough: New Algorithm Speeds Up Machine Learning By 1000%",
    "description": "Researchers have developed a groundbreaking algorithm that significantly accelerates the speed of machine learning. This advancement could revolutionize sectors from healthcare to finance.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 16, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Business: How Artificial Intelligence is Transforming the Retail Industry",
    "description": "From personalized shopping experiences to streamlined supply chains, AI is reshaping the retail industry. Discover the latest AI trends in retail and their potential impacts.",
    "url": "#",
    "source": "Forbes",
    "date": "September 16, 2022",
    "category": "Business"
  },
  {
    "title": "The Ethical Dilemma of Facial Recognition Technology",
    "description": "As facial recognition technology becomes increasingly prevalent, ethical concerns are mounting. This article explores the potential misuses and abuses of this powerful AI tool.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 16, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Artificial Intelligence in Healthcare: AI Tools Revolutionize Patient Care",
    "description": "AI tools are changing the face of healthcare, from diagnosis to treatment. Learn how these technological advancements are improving patient care and outcomes.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 16, 2022",
    "category": "Tools"
  },
  {
    "title": "AI and 5G: A Powerful Combination for the Future of Technology",
    "description": "The convergence of AI and 5G is set to usher in a new era of technological innovation. Discover how this powerful combination will shape the future of tech.",
    "url": "#",
    "source": "BBC News",
    "date": "September 16, 2022",
    "category": "Technology"
  }
];
