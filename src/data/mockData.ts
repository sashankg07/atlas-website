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
    "title": "AI Innovations Transforming Cancer Diagnosis",
    "description": "Researchers are employing AI models to expedite cancer diagnosis, aiming for earlier detection and treatment. These cutting-edge tools are enhancing precision, reducing errors, and saving lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 6, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Racing to Develop Quantum AI",
    "description": "Major technology companies are now investing heavily in Quantum AI. This advanced technology promises to revolutionize computation speed and data processing capabilities.",
    "url": "#",
    "source": "Wired Magazine",
    "date": "October 6, 2021",
    "category": "Technology"
  },
  {
    "title": "AI-Driven Customer Service: The New Business Norm",
    "description": "AI-powered customer service solutions are becoming increasingly popular among companies. These tools offer enhanced efficiency, cost savings, and improved customer satisfaction.",
    "url": "#",
    "source": "Forbes",
    "date": "October 6, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Innovation and Responsibility",
    "description": "As AI continues to permeate all aspects of life, ethical concerns keep escalating. It's crucial to address these issues to ensure responsible and fair use of AI technologies.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 6, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Streamlining Software Development",
    "description": "AI is now being used to automate and streamline the software development process. This trend is boosting productivity and accelerating the release of high-quality software products.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 6, 2021",
    "category": "Tools"
  }
];
