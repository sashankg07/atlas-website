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
    "title": "Revolutionizing Healthcare: AI Identifies Rare Diseases in Record Time",
    "description": "Researchers have developed a novel AI algorithm capable of diagnosing rare diseases in mere hours, a process that traditionally takes years. This breakthrough could revolutionize healthcare and pave the way for timely treatments.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "Startup Unveils AI-powered Autonomous Vehicles for Urban Commute",
    "description": "A leading startup has unveiled an innovative autonomous vehicle powered by AI. The vehicle promises to redefine urban transportation by providing efficient and safer commutes.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "Multinational Corporation Invests Billions in AI Development",
    "description": "A multinational corporation has announced a significant investment in AI, aiming to harness its potential for business growth and improved customer experience. This marks one of the largest corporate investments in AI to date.",
    "url": "#",
    "source": "Financial Times",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines Propose Ethical AI Use in Surveillance",
    "description": "In response to growing privacy concerns, a global watchdog has proposed new guidelines for ethical AI use in surveillance systems. The guidelines aim to balance the benefits of AI with respect for individual privacy rights.",
    "url": "#",
    "source": "BBC News",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Predicts Climate Change Impact with Unprecedented Accuracy",
    "description": "Scientists have developed an AI tool that predicts the impact of climate change with remarkable accuracy. The tool uses deep learning algorithms to analyze climate data and make predictions, proving crucial for future climate strategy.",
    "url": "#",
    "source": "Nature",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
