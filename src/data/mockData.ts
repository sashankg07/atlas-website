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
    "title": "Revolutionizing Healthcare: AI Detects Heart Disease in Seconds",
    "description": "Researchers have developed an AI model that can accurately detect heart disease in patients within seconds, potentially saving millions of lives. This groundbreaking technology could revolutionize the healthcare industry.",
    "url": "#",
    "source": "The New York Times",
    "date": "April 04, 2023",
    "category": "Research"
  },
  {
    "title": "AI-Driven Chatbots Transforming Customer Service Experience",
    "description": "Companies are adopting AI-powered chatbots at a rapid rate to improve customer service. These intelligent bots can handle complex tasks and deliver a personalized experience, boosting customer satisfaction and loyalty.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "April 04, 2023",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Debating the Implications of Facial Recognition Technology",
    "description": "As facial recognition technology advances, a debate over its ethical implications intensifies. Critics argue it infringes on privacy rights, while proponents believe it can help solve crimes and enhance security.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 04, 2023",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Space: NASA Leverages AI for Mars Exploration",
    "description": "NASA is harnessing the power of AI to aid in Mars exploration. The technology is used for analyzing vast amounts of data, making predictions, and even piloting spacecraft.",
    "url": "#",
    "source": "CNN",
    "date": "April 04, 2023",
    "category": "Technology"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A newly launched AI tool simplifies the process of data analysis, making it accessible to non-experts. This user-friendly tool can automate complex tasks, saving time and resources.",
    "url": "#",
    "source": "Forbes",
    "date": "April 04, 2023",
    "category": "Tools"
  }
];
