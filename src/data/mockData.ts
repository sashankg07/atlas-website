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
    "title": "AI Model Predicts Climate Change Impact on Global Agriculture",
    "description": "Researchers have developed a new AI model that accurately predicts the impact of climate change on global agriculture. The model will help policymakers make informed decisions for future food security.",
    "url": "#",
    "source": "The New York Times",
    "date": "April 07, 2022",
    "category": "Research"
  },
  {
    "title": "AI-powered Robot Assists in Complex Medical Surgeries",
    "description": "A leading healthcare company has launched an AI-powered robot that can assist surgeons in performing complex medical procedures, improving patient outcomes and reducing recovery times.",
    "url": "#",
    "source": "BBC News",
    "date": "April 07, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests in AI Startups to Foster Innovation",
    "description": "A top tech company has announced a significant investment in multiple AI startups. This move is seen as a strategic plan to foster innovation and stay competitive in the evolving AI landscape.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "April 07, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Global Perspective",
    "description": "World leaders convened at a global summit to discuss the ethical implications of AI. The aim is to create a common ethical framework that ensures the responsible use of AI technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 07, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms the Field of Data Analysis",
    "description": "An innovative AI tool is revolutionizing the field of data analysis by making it more accessible. The tool uses machine learning algorithms to analyze complex data sets, providing insights in real-time.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "April 07, 2022",
    "category": "Tools"
  }
];
