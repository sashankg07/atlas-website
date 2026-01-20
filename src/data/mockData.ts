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
    "title": "AI Breakthrough: Machine Learning Predicts Alzheimer's",
    "description": "Researchers have developed an AI algorithm that can predict the onset of Alzheimer's disease with over 95% accuracy. This significant breakthrough could lead to early detection and treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 16, 2021",
    "category": "Research"
  },
  {
    "title": "New AI-powered App Transforms Mental Health Treatment",
    "description": "A new app utilizing AI technology provides personalized mental health treatments, revolutionizing the healthcare industry. The app learns from each interaction, delivering more effective treatment over time.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 16, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Takes Center Stage in the Fight Against Climate Change",
    "description": "AI is being deployed to combat climate change, with promising results. By analyzing vast amounts of data, AI models can predict environmental trends and suggest effective strategies.",
    "url": "#",
    "source": "BBC News",
    "date": "November 16, 2021",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Growing Concern",
    "description": "As AI continues to permeate every aspect of our lives, ethical considerations become increasingly important. Experts call for regulations to ensure AI systems are fair, transparent, and accountable.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 16, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Launches AI Tool to Help Companies Reduce Carbon Footprint",
    "description": "Google has released a new AI tool to assist businesses in reducing their carbon emissions. The tool provides detailed insights and recommendations, paving the way for sustainable business practices.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 16, 2021",
    "category": "Tools"
  }
];
