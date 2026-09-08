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
    "title": "AI Revolutionizes Disease Detection, Saving Lives",
    "description": "Artificial Intelligence algorithms are now being used to detect diseases earlier and more accurately. This breakthrough could save countless lives annually.",
    "url": "#",
    "source": "The AI Times",
    "date": "December 05, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Billions in AI Startups",
    "description": "Major technology companies are investing heavily in AI startups, signaling a strong belief in the future of AI technologies.",
    "url": "#",
    "source": "Forbes",
    "date": "December 05, 2022",
    "category": "Business"
  },
  {
    "title": "Exploring the Ethical Implications of AI in Warfare",
    "description": "As military forces worldwide increasingly integrate AI into their operations, serious ethical questions are being raised about the potential impact on warfare.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 05, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-Driven Software Set to Transform the Tech Industry",
    "description": "The rise of AI-driven software promises to revolutionize the tech industry, offering unprecedented levels of automation and efficiency.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 05, 2022",
    "category": "Technology"
  },
  {
    "title": "New AI Tools Empower Data Scientists",
    "description": "The latest AI tools are empowering data scientists to develop more accurate models faster, unleashing a new wave of AI innovation.",
    "url": "#",
    "source": "The Verge",
    "date": "December 05, 2022",
    "category": "Tools"
  }
];
