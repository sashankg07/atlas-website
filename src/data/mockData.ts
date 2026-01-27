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
    "title": "Tech Giant Unveils AI Supercomputer",
    "description": "In a major technological breakthrough, a tech industry giant has unveiled a new AI supercomputer. The machine is expected to revolutionize various sectors, including healthcare, research, and more.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 11, 2023",
    "category": "Technology"
  },
  {
    "title": "Using AI to Predict Climate Change",
    "description": "Scientists are using artificial intelligence to predict climate change with more accuracy than ever before. The new AI model helps anticipate extreme weather patterns and their potential impacts.",
    "url": "#",
    "source": "BBC News",
    "date": "March 11, 2023",
    "category": "Research"
  },
  {
    "title": "AI Ethics: A Call for Standardization",
    "description": "A group of renowned AI researchers is calling for international standards for AI ethics. The move aims to ensure fair and responsible use of AI across all sectors.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 11, 2023",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Start-up Secures Record Funding",
    "description": "A promising AI start-up has secured record funding in its latest investment round. The company is developing AI tools for industrial automation and robotics.",
    "url": "#",
    "source": "Forbes",
    "date": "March 11, 2023",
    "category": "Business"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning",
    "description": "A new AI tool promises to streamline the machine learning process. The software simplifies training AI models, making the technology more accessible to non-experts.",
    "url": "#",
    "source": "Wired",
    "date": "March 11, 2023",
    "category": "Tools"
  }
];
