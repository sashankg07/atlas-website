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
    "title": "AI's New Frontier: Predicting Climate Change",
    "description": "Researchers have developed an artificial intelligence model capable of predicting climate patterns more accurately than ever before. The breakthrough could significantly improve our understanding of climate change and help mitigate its impacts.",
    "url": "#",
    "source": "The Information",
    "date": "November 16, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: Revolutionizing Diagnostics",
    "description": "A new AI-powered diagnostic tool is transforming the healthcare industry by enabling early detection of diseases. The technology is expected to significantly enhance patient outcomes and reduce healthcare costs.",
    "url": "#",
    "source": "HealthTech Magazine",
    "date": "November 16, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI Developments",
    "description": "A leading tech company has announced a multi-billion dollar investment in AI research and development. The move signifies the growing importance of AI in modern business strategies.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 16, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Exploring Ethical Implications of AI in Surveillance",
    "description": "A new report highlights the ethical concerns surrounding the use of AI in surveillance systems. The study calls for regulation to protect privacy and prevent misuse.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 16, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning Process",
    "description": "A newly launched AI tool promises to streamline the machine learning process, making AI more accessible to non-experts. The tool is expected to democratize AI and foster innovation.",
    "url": "#",
    "source": "AI Daily",
    "date": "November 16, 2021",
    "category": "Tools"
  }
];
