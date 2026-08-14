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
    "title": "AI Revolutionizes Healthcare Through Early Disease Detection",
    "description": "With the latest developments in AI, early detection of diseases has been made possible. This breakthrough has potential to transform healthcare, saving millions of lives every year.",
    "url": "#",
    "source": "The New York Times",
    "date": "April 06, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Redefines Customized Learning Experience",
    "description": "New AI technology is being used to personalize educational content to individual learner's needs. The technology adapts to a student's learning pace, revolutionizing the way we understand education.",
    "url": "#",
    "source": "BBC News",
    "date": "April 06, 2022",
    "category": "Research"
  },
  {
    "title": "AI Helps Businesses Predict Consumer Behavior",
    "description": "Businesses are using AI to predict consumer behavior, leading to more successful marketing strategies. This technology can analyze large amounts of data to predict future trends.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "April 06, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Raises Ethical Questions About Data Privacy",
    "description": "As AI becomes increasingly prevalent, concerns about data privacy are growing. Critics argue that regulations need to keep pace with technology to protect individuals' privacy rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 06, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Reshape Graphic Design",
    "description": "New AI tools are allowing graphic designers to create more complex and visually striking designs. These tools use machine learning to generate unique designs based on user input.",
    "url": "#",
    "source": "TechCrunch",
    "date": "April 06, 2022",
    "category": "Tools"
  }
];
