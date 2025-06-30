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
    "title": "AI Breaks New Ground in Disease Prediction",
    "description": "Scientists have developed an AI model capable of predicting the risk of certain diseases with unprecedented accuracy. This breakthrough could revolutionize healthcare and personalized medicine.",
    "url": "#",
    "source": "Nature",
    "date": "October 15, 2021",
    "category": "Research"
  },
  {
    "title": "AI-powered Drones Assist in Wildlife Conservation",
    "description": "A new AI tool is being used to equip drones with the ability to track and monitor wildlife populations. This innovation is assisting in conservation efforts worldwide.",
    "url": "#",
    "source": "BBC News",
    "date": "October 15, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100 Million in Latest Funding Round",
    "description": "An AI-driven start-up has secured $100 million in its latest funding round, with investors excited about its groundbreaking predictive analytics platform.",
    "url": "#",
    "source": "Forbes",
    "date": "October 15, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surround AI in Criminal Justice System",
    "description": "Rights groups are voicing concerns about the increasing use of AI in the criminal justice system, highlighting potential biases and inaccuracies.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 15, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Announces New Open Source AI Tool",
    "description": "Google has released a new open source AI tool aimed at simplifying model training. The tool is expected to make AI development more accessible.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 15, 2021",
    "category": "Tools"
  }
];
