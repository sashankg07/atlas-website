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
    "title": "AI Outperforms Humans in Designing Microchips",
    "description": "Google's DeepMind has developed an AI that can design computer chips faster and more efficiently than humans. This breakthrough could revolutionize computer chip manufacturing.",
    "url": "#",
    "source": "The New York Times",
    "date": "June 18, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Helps Decipher Long Lost Languages",
    "description": "Researchers have used artificial intelligence to translate ancient texts from lost languages. This could unlock the secrets of ancient civilizations.",
    "url": "#",
    "source": "The Guardian",
    "date": "June 18, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: Predicting Disease Outbreaks",
    "description": "Artificial Intelligence is being utilized to predict disease outbreaks, potentially saving countless lives. This technology could be key in preventing future pandemics.",
    "url": "#",
    "source": "BBC News",
    "date": "June 18, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Implications of AI in Law Enforcement",
    "description": "With AI becoming more prevalent in law enforcement, there are growing concerns about its ethical implications. Transparency and regulation are needed to prevent misuse.",
    "url": "#",
    "source": "The Washington Post",
    "date": "June 18, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Transforming Graphic Design",
    "description": "New AI-powered tools are changing the landscape of graphic design, making it more accessible and efficient. These advancements could democratize design and foster creativity.",
    "url": "#",
    "source": "TechCrunch",
    "date": "June 18, 2022",
    "category": "Tools"
  }
];
