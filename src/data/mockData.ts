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
    "title": "AI Revolutionizes Drug Discovery",
    "description": "Artificial Intelligence is emerging as a game-changer in drug discovery, promising to slash development times and costs. AI tools analyze huge datasets, predicting how different compounds will behave in the body.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 06, 2021",
    "category": "Research"
  },
  {
    "title": "AI Predicts Climate Change Impact",
    "description": "Researchers have applied machine learning to predict future climate patterns. This advancement could significantly improve environmental conservation initiatives.",
    "url": "#",
    "source": "Nature",
    "date": "October 06, 2021",
    "category": "Technology"
  },
  {
    "title": "Major Tech Company Introduces AI Ethics Framework",
    "description": "In a bid to address growing concerns around AI, a leading tech company has introduced a comprehensive AI ethics framework. This move seeks to ensure trustworthy and fair AI applications.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 06, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Boosts E-commerce Personalization",
    "description": "Artificial Intelligence is transforming the e-commerce industry by enabling highly personalized shopping experiences. Machine learning algorithms analyze customer behavior to provide tailored product recommendations.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 06, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A new AI tool has been launched that simplifies data analysis, making it accessible to non-tech professionals. The tool uses machine learning to interpret and visualize complex data.",
    "url": "#",
    "source": "Forbes",
    "date": "October 06, 2021",
    "category": "Tools"
  }
];
