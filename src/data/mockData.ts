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
    "title": "Revolutionising Healthcare: Groundbreaking AI Tool for Early Cancer Detection",
    "description": "A research team has developed an AI tool that can detect cancer in its early stages with unprecedented accuracy. This breakthrough could revolutionize healthcare, saving millions of lives worldwide.",
    "url": "#",
    "source": "New York Times",
    "date": "December 07, 2021",
    "category": "Research"
  },
  {
    "title": "AI Takes Art to New Heights: AI-Generated Artwork Auctioned for Millions",
    "description": "For the first time, an artwork created by an Artificial Intelligence was auctioned at Christie's for a staggering amount. This signals a new era where AI and creativity merge, reshaping the art industry.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 07, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: AI-Driven Predictive Analytics Boosting Profits",
    "description": "Companies are increasingly adopting AI-driven predictive analytics to forecast market trends and consumer behaviour. This trend is proving to be a game-changer, significantly boosting profits and efficiency.",
    "url": "#",
    "source": "Financial Times",
    "date": "December 07, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Dilemmas in AI: The Urgency of Establishing AI Ethics Guidelines",
    "description": "As AI continues to infiltrate every aspect of our lives, the need for comprehensive AI ethics guidelines becomes more urgent. Experts warn against potential misuse, calling for clear regulations and transparency.",
    "url": "#",
    "source": "BBC News",
    "date": "December 07, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: New AI-Powered Language Model Breaks Language Barriers",
    "description": "A new AI tool has been developed that can understand and translate any language. This could potentially dissolve language barriers, facilitating global communication and cooperation like never before.",
    "url": "#",
    "source": "CNN",
    "date": "December 07, 2021",
    "category": "Tools"
  }
];
