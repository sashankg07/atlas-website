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
    "title": "Revolutionizing Medicine: AI Predicts Heart Disease Years in Advance",
    "description": "Researchers have developed an AI model that can predict the onset of heart disease years before symptoms appear. This breakthrough could lead to more timely interventions and improve patient outcomes.",
    "url": "#",
    "source": "New York Times",
    "date": "October 26, 2021",
    "category": "Research"
  },
  {
    "title": "AI and Climate Change: How Technology is Tackling Our Biggest Challenge",
    "description": "Innovative AI solutions are being deployed to combat climate change, from predicting weather patterns to optimizing energy consumption. These technologies could be pivotal in reducing our carbon footprint.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 26, 2021",
    "category": "Technology"
  },
  {
    "title": "Facebook's New AI Strategy: A Shift Towards Responsible AI?",
    "description": "Facebook is investing heavily in AI transparency and fairness. The company's new approach aims to address ethical concerns and build more trustworthy AI systems.",
    "url": "#",
    "source": "BBC News",
    "date": "October 26, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Google's DeepMind Solves Long-Standing Biology Challenge",
    "description": "Google's AI lab, DeepMind, has solved a 50-year-old challenge in biology. The AI's ability to predict protein folding could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "Wired",
    "date": "October 26, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Business: How Machine Learning is Transforming eCommerce",
    "description": "AI and machine learning are transforming the eCommerce industry. From personalized shopping experiences to efficient supply chain management, AI is reshaping how businesses operate.",
    "url": "#",
    "source": "Forbes",
    "date": "October 26, 2021",
    "category": "Business"
  }
];
