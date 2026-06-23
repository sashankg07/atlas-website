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
    "title": "AI Breakthrough in Cancer Diagnosis",
    "description": "Researchers have developed an AI model that can predict certain types of cancer with remarkable accuracy, potentially revolutionizing early detection. The model has been trained on thousands of patient data sets and has demonstrated an unprecedented level of precision.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 06, 2021",
    "category": "Research"
  },
  {
    "title": "AI Outperforms Humans in Chess, Now Go",
    "description": "A new AI model, developed by DeepMind, has mastered the ancient game of Go without any human instruction. This is a significant step forward in reinforcement learning techniques, further demonstrating the potential of artificial intelligence.",
    "url": "#",
    "source": "BBC News",
    "date": "October 06, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI Startups",
    "description": "In a move that underscores the growing importance of AI, a renowned tech company has announced a multi-billion dollar investment in AI startups. The move is set to spur innovation and development in the AI industry.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "October 06, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI and the Ethical Dilemma: A Roundtable Discussion",
    "description": "A group of leading ethicists, philosophers, and AI developers held a roundtable discussion on the ethical implications of AI. The conversation covered topics from privacy concerns to the potential for job displacement.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 06, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Manufacturing Processes",
    "description": "A new AI-powered tool has been launched that optimizes manufacturing processes, reducing waste and increasing efficiency. The tool uses machine learning algorithms to predict and manage production schedules, leading to significant cost savings.",
    "url": "#",
    "source": "Forbes",
    "date": "October 06, 2021",
    "category": "Tools"
  }
];
