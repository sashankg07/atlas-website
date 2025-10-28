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
    "title": "AI Identifies New Alzheimer's Patterns: A Landmark in Medical Research",
    "description": "Groundbreaking AI technology has been used to identify previously undetectable patterns in Alzheimer's disease. This development could revolutionize treatment and early detection methods.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 23, 2021",
    "category": "Research"
  },
  {
    "title": "AI Beats Humans in Drone Race: A New Era in Technology",
    "description": "For the first time in history, AI-operated drones have outperformed human pilots in a complex race. This breakthrough signals a significant advancement in autonomous vehicle technology.",
    "url": "#",
    "source": "BBC News",
    "date": "October 23, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: Transforming Customer Experience",
    "description": "Artificial intelligence is transforming the way businesses interact with their customers, offering a more personalized and efficient experience. Companies adopting AI have reported increased customer satisfaction and loyalty.",
    "url": "#",
    "source": "Forbes",
    "date": "October 23, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI and Ethics: The Concerns of Facial Recognition",
    "description": "As AI-powered facial recognition technology becomes more pervasive, ethical concerns are being raised. Critics argue for more oversight and regulation to prevent misuse and protect privacy.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 23, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Revolutionize Design Industry",
    "description": "A new suite of AI-driven design tools is making waves in the design industry, promising to increase productivity and creativity. These tools use machine learning to automate time-consuming tasks, freeing designers to focus on the creative process.",
    "url": "#",
    "source": "Wired",
    "date": "October 23, 2021",
    "category": "Tools"
  }
];
