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
    "title": "OpenAI Unveils GPT-4: A New Milestone in AI Language Models",
    "description": "OpenAI has introduced the fourth iteration of its groundbreaking language model, GPT-4. The AI model boasts advanced comprehension and generation capabilities, setting a new standard in the field.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 23, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes Healthcare: A Look at IBM's Watson in Action",
    "description": "IBM's artificial intelligence tool, Watson, is making waves in the healthcare sector, assisting doctors in diagnosing diseases with unprecedented speed and accuracy.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 23, 2021",
    "category": "Technology"
  },
  {
    "title": "Google's DeepMind Solves 50-Year-Old Biology Mystery",
    "description": "Google's AI division, DeepMind, has solved a 50-year-old challenge in biology, predicting the 3D structures of proteins, marking a significant breakthrough in the field.",
    "url": "#",
    "source": "BBC",
    "date": "November 23, 2021",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Microsoft's AI Ethical Guidelines: A Step Towards Responsible AI",
    "description": "Microsoft has released ethical guidelines for its AI projects, aiming to ensure that AI technology is developed and used in a responsible and equitable manner.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 23, 2021",
    "category": "Ethics"
  },
  {
    "title": "Nvidia Launches New AI Tools for Developers",
    "description": "Nvidia has rolled out a suite of new AI tools designed to assist developers in creating and implementing AI solutions more efficiently, reinforcing its position in the AI hardware and software market.",
    "url": "#",
    "source": "Forbes",
    "date": "November 23, 2021",
    "category": "Tools"
  }
];
