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
    "title": "AI Breakthrough: Machine Learns to Think Ahead",
    "description": "In a milestone for artificial intelligence, a computer system has learned to predict future events in a way similar to human foresight. This could revolutionize everything from autonomous vehicles to predictive healthcare.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 20, 2022",
    "category": "Research"
  },
  {
    "title": "AI Now Capable of Creating Lifelike 3D Models from 2D Images",
    "description": "Researchers have developed an AI capable of generating highly accurate 3D models from 2D images. This could have far-reaching implications for video game design, virtual reality, and even medical imaging.",
    "url": "#",
    "source": "The Verge",
    "date": "October 20, 2022",
    "category": "Technology"
  },
  {
    "title": "AI-Powered Chatbots Revolutionizing Customer Service",
    "description": "Businesses are increasingly turning to AI chatbots to improve their customer service. These chatbots can handle routine queries, freeing up staff for more complex issues.",
    "url": "#",
    "source": "Forbes",
    "date": "October 20, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Questions Arise as AI Continues to Influence Hiring",
    "description": "As businesses increasingly rely on AI for hiring decisions, questions arise about bias and fairness. Despite potential advantages, critics warn of the technology perpetuating inequality.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 20, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Effects with Unprecedented Accuracy",
    "description": "A new AI tool is helping scientists predict the effects of climate change with greater accuracy. The tool uses machine learning to analyze complex climate models.",
    "url": "#",
    "source": "Nature",
    "date": "October 20, 2022",
    "category": "Tools"
  }
];
