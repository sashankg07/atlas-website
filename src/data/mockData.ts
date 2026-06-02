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
    "title": "AI Breakthrough: New Algorithm Learns Without Human Assistance",
    "description": "A team of researchers have developed an AI algorithm that can learn and improve without human intervention. This revolutionary approach has potential to greatly impact fields such as healthcare and autonomous vehicles.",
    "url": "#",
    "source": "New York Times",
    "date": "December 14, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots Transforming the Supply Chain Industry",
    "description": "AI is revolutionizing the supply chain industry with robots that can sort, pack, and ship items more efficiently than humans. This technological advancement promises increased productivity and lower operational costs.",
    "url": "#",
    "source": "BBC News",
    "date": "December 14, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Google Acquires AI Startup DeepThink",
    "description": "Google has announced the acquisition of DeepThink, an AI startup renowned for its cutting-edge machine learning technologies. This acquisition signals Google's commitment to AI innovation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 14, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Concerns Over Biased Machine Learning Algorithms",
    "description": "Researchers highlight the ethical concerns of biased machine learning algorithms, urging for more transparency and fairness in AI technologies. This has sparked a global conversation on AI ethics.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 14, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact More Accurately",
    "description": "Scientists have developed a new AI tool that predicts the effects of climate change with unprecedented accuracy. This breakthrough tool could guide critical climate policies and strategies.",
    "url": "#",
    "source": "Nature News",
    "date": "December 14, 2022",
    "category": "Tools"
  }
];
