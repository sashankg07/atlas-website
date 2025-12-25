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
    "title": "Revolutionizing Healthcare with AI: The Latest Breakthroughs",
    "description": "AI is transforming the healthcare industry with new predictive algorithms and risk assessment tools. Recent breakthroughs have shown promise in early disease detection and treatment planning.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 12, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Aims to Enhance Creativity in Film Industry",
    "description": "A new AI tool that uses advanced algorithms to generate film scripts, plot lines, and character development is set to revolutionize the movie industry.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 12, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giants Invest Heavily in AI Startups",
    "description": "Tech giants like Google and Apple are investing billions in AI startups. This trend reflects the growing significance of AI in shaping the future of technology.",
    "url": "#",
    "source": "Forbes",
    "date": "October 12, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Over AI Facial Recognition Technology",
    "description": "The increasing use of AI in facial recognition technology is raising valid ethical concerns. Critics argue for stricter regulations to prevent misuse.",
    "url": "#",
    "source": "BBC",
    "date": "October 12, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Simplifies Data Analysis with New Tools",
    "description": "New AI tools are making data analysis simpler and more efficient. These tools can process large data sets quickly, providing valuable insights in real-time.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 12, 2021",
    "category": "Tools"
  }
];
