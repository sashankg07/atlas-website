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
    "title": "Revolutionizing Healthcare: AI Diagnoses Diseases Faster Than Ever",
    "description": "In an unprecedented move, AI has made strides in the healthcare industry by diagnosing diseases with remarkable speed and accuracy. This development could potentially save countless lives and resources.",
    "url": "#",
    "source": "New York Times",
    "date": "September 01, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Transforms the Business Landscape: A New Era of Efficiency",
    "description": "AI is redefining the business sector, offering improved efficiency and cost-saving measures. This technology promises to aid in decision-making processes, data analysis, and customer service.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "September 01, 2022",
    "category": "Business"
  },
  {
    "title": "Ethics in AI: Balancing Innovation and Responsibility",
    "description": "As AI continues to evolve, so too do the ethical questions surrounding its use. Experts are urging for measures to ensure that AI is developed and used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 01, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Space: How Machine Learning is Aiding Exploration",
    "description": "AI is pushing the boundaries of space exploration. Through machine learning, scientists are able to analyze vast amounts of data, making the search for extraterrestrial life more effective than ever.",
    "url": "#",
    "source": "National Geographic",
    "date": "September 01, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Tools Revolutionize Design Industry",
    "description": "The design industry is witnessing a revolution with the arrival of AI tools. This new technology not only speeds up the design process but also enhances creativity and precision.",
    "url": "#",
    "source": "Forbes",
    "date": "September 01, 2022",
    "category": "Tools"
  }
];
