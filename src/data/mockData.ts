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
    "title": "AI Breakthrough: Revolutionary Machine Learning Algorithm Developed",
    "description": "A team of researchers have developed a new machine learning algorithm that revolutionizes the way AI systems learn and adapt. This breakthrough could lead to more efficient and versatile AI applications.",
    "url": "#",
    "source": "The Science Daily",
    "date": "November 25, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Announces New AI-Powered Product Suite",
    "description": "A leading technology company has announced a new suite of AI-powered products aimed at improving productivity in the workplace. The products leverage AI to automate routine tasks and increase efficiency.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 25, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M in Series A Funding",
    "description": "An AI startup specializing in healthcare solutions has raised $100 million in its Series A funding round. The funds will be used to further develop their AI-powered diagnostic tools.",
    "url": "#",
    "source": "Business Insider",
    "date": "November 25, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Report Highlights Ethical Concerns in AI",
    "description": "A new report highlights the ethical concerns associated with AI, including privacy issues and biases in AI algorithms. It calls for stricter regulations and transparency in the AI industry.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 25, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Enables Real-Time Language Translation",
    "description": "A new AI tool that enables real-time language translation has been launched, breaking down the language barriers in communication. The tool uses advanced AI algorithms to accurately translate text and speech in real time.",
    "url": "#",
    "source": "Wired",
    "date": "November 25, 2021",
    "category": "Tools"
  }
];
