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
    "title": "AI Breakthrough: New Algorithm Solves Rubik’s Cube in Less than a Second",
    "description": "In a groundbreaking development, researchers have created an AI algorithm that can solve a Rubik’s Cube in under a second. This is a significant step forward in the field of machine learning and complex problem-solving abilities.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 01, 2022",
    "category": "Research"
  },
  {
    "title": "OpenAI Unveils 'Davinci', a New AI Supercomputer",
    "description": "OpenAI has announced its latest creation - an AI supercomputer named 'Davinci'. The computer is expected to significantly advance research and application in various AI fields.",
    "url": "#",
    "source": "The Verge",
    "date": "November 01, 2022",
    "category": "Technology"
  },
  {
    "title": "Google AI's Quantum Leap: Tech Giant Claims Quantum Supremacy",
    "description": "Google's AI division has announced a major breakthrough, claiming to have achieved 'quantum supremacy'. This could revolutionize everything from cryptography to material science.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 01, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: Balancing Economic Benefits and Moral Questions",
    "description": "As AI continues to influence every aspect of our lives, the question of ethical implications arises. Experts are calling for a balance between economic gains and ethical considerations.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 01, 2022",
    "category": "Ethics"
  },
  {
    "title": "Introducing 'AI Playground': An Interactive Tool for AI Learning",
    "description": "A new online platform called 'AI Playground' is set to transform how we learn about AI. It offers tools and resources for anyone interested in learning more about artificial intelligence.",
    "url": "#",
    "source": "Wired",
    "date": "November 01, 2022",
    "category": "Tools"
  }
];
