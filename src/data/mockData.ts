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
    "title": "AI Breakthrough: Deep Learning Outperforms Humans in Visual Recognition",
    "description": "A revolutionary AI model has surpassed human performance in visual recognition tasks. This marks a major milestone in AI's potential to augment industrial inspection and surveillance.",
    "url": "#",
    "source": "The AI Journal",
    "date": "November 02, 2021",
    "category": "Research"
  },
  {
    "title": "Reinforcement Learning Powers New Energy-Saving AI",
    "description": "Scientists have developed an AI system using reinforcement learning that optimizes energy consumption in homes and businesses. The technology could revolutionize sustainability efforts in the energy industry.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 02, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Achieves Unicorn Status with Latest Funding Round",
    "description": "AI startup, Mindful AI, has secured significant investment in a recent funding round, propelling it to unicorn status. The company's unique AI-driven solutions have disrupted the market, making it a powerful player in the AI industry.",
    "url": "#",
    "source": "Forbes",
    "date": "November 02, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Ethics Guidelines Released by Tech Titans",
    "description": "Major tech companies have collaborated to release a comprehensive set of AI ethics guidelines. The move has been applauded for promoting responsible and transparent AI development and usage.",
    "url": "#",
    "source": "Reuters",
    "date": "November 02, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Revolutionizes Data Analysis",
    "description": "DataRobot, a leader in AI tools, has released a new product that automates data analysis. This tool could save businesses countless hours, and significantly improve decision-making processes.",
    "url": "#",
    "source": "The Verge",
    "date": "November 02, 2021",
    "category": "Tools"
  }
];
