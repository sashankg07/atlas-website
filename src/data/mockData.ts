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
    "title": "AI Revolutionizes Cancer Detection",
    "description": "Researchers have developed a machine learning model that can predict cancerous growth with over 90% accuracy. This could provide a major breakthrough in early cancer detection and treatment.",
    "url": "#",
    "source": "The Verge",
    "date": "October 22, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Driven Robot Delivers Packages with Unprecedented Efficiency",
    "description": "A new AI-driven robotic system is changing the game in package delivery, boasting a remarkable increase in efficiency and decrease in delivery time.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 22, 2021",
    "category": "Technology"
  },
  {
    "title": "Google Invests Heavily in AI for Climate Change Solutions",
    "description": "Google is leading the way in applying AI to combat climate change, with a major investment in AI technologies aimed at reducing carbon emissions and optimizing renewable energy use.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 22, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Implications of AI in Employment Processes",
    "description": "A new report highlights the potential ethical concerns around the use of AI in hiring, underscoring the need for transparency and fairness in machine learning algorithms.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 22, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Processing Tool",
    "description": "OpenAI has unveiled a new language processing tool that shows promise in understanding and generating human-like text, opening up vast possibilities for AI in communication.",
    "url": "#",
    "source": "Wired",
    "date": "October 22, 2021",
    "category": "Tools"
  }
];
