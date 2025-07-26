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
    "title": "AI Breakthrough: New Algorithm Mimics Human Learning",
    "description": "Researchers have developed a new artificial intelligence algorithm that simulates the way humans learn, making it possible for AI to understand and solve complex problems even faster.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: A Game-Changer in Disease Prediction",
    "description": "A recent study reveals that AI can significantly improve disease prediction and prevention, potentially revolutionizing the healthcare industry.",
    "url": "#",
    "source": "The Lancet",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Launches AI-Powered Business Intelligence Tools",
    "description": "A tech giant has recently launched a suite of AI-powered business intelligence tools aimed at transforming data analysis and decision-making for businesses worldwide.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Call for Regulation in Facial Recognition Tech",
    "description": "In the wake of recent controversies, experts are calling for stricter regulations on facial recognition technology to prevent misuse and uphold privacy rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Transforms Text into Realistic Speech",
    "description": "A new AI tool has the capability to transform written text into realistic speech, opening up new possibilities in accessibility and communication technology.",
    "url": "#",
    "source": "Wired",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
