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
    "title": "AI Breakthrough: Self-Learning Algorithms Now Understand Context",
    "description": "Researchers have developed AI algorithms capable of understanding context, taking AI comprehension to a new level. The breakthrough could revolutionize tasks from translation to communication.",
    "url": "#",
    "source": "AI Daily News",
    "date": "October 08, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Invests Billions in AI for Climate Change Solutions",
    "description": "A leading tech company has pledged billions in AI research to combat climate change. The investment could speed up the development of AI-driven solutions to global environmental issues.",
    "url": "#",
    "source": "Tech Times",
    "date": "October 08, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics Committee Releases Guidelines for Responsible AI Use",
    "description": "The International AI Ethics Committee has released comprehensive guidelines for the responsible use of AI. The move is expected to shape the future of ethical AI development.",
    "url": "#",
    "source": "AI Ethics Journal",
    "date": "October 08, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-Powered Tool Streamlines Business Analytics",
    "description": "A new AI-powered tool is set to transform business analytics, offering predictive insights to help businesses make data-driven decisions. The tool is expected to be a game-changer in the business intelligence market.",
    "url": "#",
    "source": "Tech Radar",
    "date": "October 08, 2021",
    "category": "Tools"
  },
  {
    "title": "Cutting-Edge AI Technology Predicts Disease Outbreaks",
    "description": "A breakthrough AI technology has been developed that can predict disease outbreaks, potentially saving millions of lives. This innovative tool could revolutionize global health systems.",
    "url": "#",
    "source": "Science Today",
    "date": "October 08, 2021",
    "category": "Technology"
  }
];
