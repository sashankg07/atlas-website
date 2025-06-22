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
    "title": "AI Revolutionizes Healthcare with COVID-19 Predictive Models",
    "description": "Artificial intelligence is now being used to predict COVID-19 outbreaks with remarkable accuracy. The technology combines a variety of data sources to provide early warning signs for regions at risk.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 24, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Algorithm Outperforms Humans in Complex Board Game",
    "description": "Researchers have developed an AI that can beat human players in the strategic board game 'Go'. This achievement is a significant milestone in the development of artificial general intelligence.",
    "url": "#",
    "source": "New York Times",
    "date": "October 24, 2022",
    "category": "Technology"
  },
  {
    "title": "Google's DeepMind Achieves Breakthrough in Protein Folding Problem",
    "description": "Google's AI lab, DeepMind, has made a significant breakthrough in solving the protein folding problem, a challenge that has stumped scientists for decades. This could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "BBC News",
    "date": "October 24, 2022",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate Intensifies Amidst Facial Recognition Controversies",
    "description": "The ethical debate around AI and facial recognition technology intensifies. Critics argue that without proper regulation, the technology could lead to an erosion of privacy and civil liberties.",
    "url": "#",
    "source": "The Washington Post",
    "date": "October 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "Nvidia Releases New AI Tools for Game Developers",
    "description": "Nvidia has unveiled a suite of new AI tools for game developers, promising to significantly cut down the time and resources needed for rendering realistic graphics.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 24, 2022",
    "category": "Tools"
  }
];
