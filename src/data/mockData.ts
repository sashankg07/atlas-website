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
    "title": "AI Breaks New Ground in Climate Change Predictions",
    "description": "Artificial Intelligence is revolutionizing the way we predict and respond to climate change. The latest AI models provide unprecedented accuracy in forecasting climate patterns, leading to more effective mitigation strategies.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 09, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Next-Gen AI Processor",
    "description": "A leading tech company has unveiled its latest AI processor, promising to deliver dramatic improvements in speed and efficiency. The chip is designed to accelerate AI workloads in data centers and edge computing.",
    "url": "#",
    "source": "Wired Magazine",
    "date": "November 09, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M in Series B Funding",
    "description": "A promising AI startup has raised $100 million in its latest funding round. The company, which specializes in AI-powered solutions for healthcare, plans to use the funds to expand its product offerings and enter new markets.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 09, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Implications of AI in Law Enforcement",
    "description": "The use of AI in law enforcement is growing, but so are concerns about surveillance and bias. Experts are calling for stricter regulations to ensure ethical use of the technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 09, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Simplifies Deep Learning Development",
    "description": "A new AI tool promises to streamline the development of deep learning models. The tool, which is user-friendly and highly customizable, could be a game-changer for AI developers.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 09, 2021",
    "category": "Tools"
  }
];
