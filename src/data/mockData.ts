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
    "title": "AI Breaks New Ground in Climate Change Predictions",
    "description": "Researchers have developed an artificial intelligence model that predicts climate change patterns with unprecedented accuracy. The model could revolutionize climate science, helping to mitigate future environmental crises.",
    "url": "#",
    "source": "Nature",
    "date": "October 07, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Startup Revolutionizes Customer Service",
    "description": "A groundbreaking AI startup has developed a chatbot that not only understands natural language but also detects customer emotions. This development could usher in a new era of empathetic, efficient customer service.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 07, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics Under Scrutiny: Bias in Machine Learning",
    "description": "Machine learning algorithms are under the spotlight for perpetuating societal biases. Experts call for more ethical transparency in AI development to ensure fairness and inclusivity.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 07, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Tech Giants Invest Heavily in AI for Healthcare",
    "description": "Top tech companies are investing billions into AI technologies to predict, diagnose, and treat diseases. This trend could significantly improve healthcare outcomes and accessibility in the near future.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 07, 2022",
    "category": "Technology"
  },
  {
    "title": "OpenAI Releases New Language Processing Tool",
    "description": "OpenAI has unveiled an advanced language processing AI that can understand and generate human-like text. This tool could revolutionize content creation, translation, and more.",
    "url": "#",
    "source": "Ars Technica",
    "date": "October 07, 2022",
    "category": "Tools"
  }
];
