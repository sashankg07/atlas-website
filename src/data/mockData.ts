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
    "title": "AI Revolutionizes Cancer Detection",
    "description": "Recent advancements in Artificial Intelligence promise a new era in cancer detection and diagnosis. Machine learning models can now predict the onset of cancer with startling accuracy.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 01, 2021",
    "category": "Research"
  },
  {
    "title": "AI-based Startup Raises $100 Million in Series C Funding",
    "description": "Tech firm AI Corp has raised $100 million in Series C funding. The firm leverages AI to provide seamless customer support solutions.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 01, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released",
    "description": "The European Union has released a new set of guidelines to govern the ethical use of AI. This move aims to ensure fairness, transparency, and accountability in AI developments.",
    "url": "#",
    "source": "Reuters",
    "date": "November 01, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Google's AI-Powered Weather Prediction",
    "description": "Google has developed a new AI-powered tool that can predict weather changes more accurately. This technology could be a game-changer in climate change tracking and disaster prevention.",
    "url": "#",
    "source": "The Verge",
    "date": "November 01, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Tool Makes Data Analysis Easier",
    "description": "A new AI tool promises to make big data analysis more accessible. The tool uses machine learning to process and present complex data in easy-to-understand formats.",
    "url": "#",
    "source": "Wired",
    "date": "November 01, 2021",
    "category": "Tools"
  }
];
