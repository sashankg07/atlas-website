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
    "title": "New AI Algorithm Predicts Climate Change Impact",
    "description": "Researchers have developed a revolutionary AI system capable of accurately predicting the impact of climate change. The algorithm uses machine learning to assess environmental data and make accurate projections.",
    "url": "#",
    "source": "Nature Climate Change",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: A Game Changer in Disease Diagnosis",
    "description": "New AI technologies are being implemented to diagnose and treat various diseases more precisely and swiftly. These breakthroughs are expected to significantly enhance healthcare efficiency and patient outcomes.",
    "url": "#",
    "source": "Harvard Business Review",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "Investment in AI Startups Hits Record High",
    "description": "Global investments in AI startups have reached a new high in 2021, indicating a robust growth and faith in the sector's future prospects. The trend underscores the perceived potential of AI in transforming multiple industries.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rising Over AI Facial Recognition",
    "description": "Recent controversies have highlighted the ethical issues posed by AI facial recognition technology. Critics argue for better regulations to prevent misuse and protect privacy rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI Tools for Developers",
    "description": "Google has launched a range of new AI tools designed to assist developers in creating advanced applications. The tools aim to simplify the development process and improve the efficiency of machine learning models.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
