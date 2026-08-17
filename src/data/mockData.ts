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
    "title": "Revolutionizing Healthcare: AI-powered Diagnostic Tools",
    "description": "An innovative AI diagnostic tool is transforming the face of healthcare, providing rapid and accurate medical diagnoses. The technology aims to improve patient outcomes and reduce healthcare costs.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "Ethical Dilemmas in AI: Navigating the Challenges",
    "description": "As AI continues to evolve, it brings with it a myriad of ethical challenges. Experts call for robust regulations and guidelines to ensure responsible AI deployment.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI in Business: Surging Investment and Adoption",
    "description": "Businesses globally are increasingly investing in AI technologies, with AI adoption growing exponentially across sectors. The trend is projected to drive significant economic growth.",
    "url": "#",
    "source": "Financial Times",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Groundbreaking Research in AI: The Dawn of Self-learning Systems",
    "description": "New research in AI is paving the way for autonomous, self-learning systems. These advancements could revolutionize fields such as robotics and automated driving.",
    "url": "#",
    "source": "Nature",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "Emerging AI Tools Revolutionize Creative Industries",
    "description": "AI tools are proving instrumental in creative industries, offering unique solutions for content creation, design, and more. The technology is expected to drive industry evolution.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
