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
    "title": "Revolutionizing Healthcare: AI Diagnoses Diseases with Unprecedented Accuracy",
    "description": "Groundbreaking AI technology is disrupting the medical field by diagnosing diseases with accuracy surpassing that of human professionals. This could usher in a new era of digital healthcare.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 11, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Business: Transforming Customer Experience",
    "description": "A recent report highlights how AI is revolutionizing the customer experience landscape. Personalized AI-driven interactions are proving to be a game-changer in customer engagement strategies.",
    "url": "#",
    "source": "Forbes",
    "date": "October 11, 2021",
    "category": "Business"
  },
  {
    "title": "The Future is Now: Self-Driving Cars and AI",
    "description": "The age of AI is upon us as self-driving cars become an increasingly common sight. This technology could potentially redefine our transportation systems and urban landscapes.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 11, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Addressing Bias in Machine Learning Algorithms",
    "description": "A recent study warns of the potential dangers of unchecked bias in AI. Researchers are calling for greater transparency and regulation to ensure ethical AI practices.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 11, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: Next-Generation Photoshop Uses AI for Image Editing",
    "description": "Adobe is leveraging AI to take image editing to the next level in Photoshop. The new tools enable unprecedented accuracy and creativity for professionals and hobbyists alike.",
    "url": "#",
    "source": "The Verge",
    "date": "October 11, 2021",
    "category": "Tools"
  }
];
