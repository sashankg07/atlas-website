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
    "title": "Revolutionizing Healthcare: AI Detects Heart Disease in Record Time",
    "description": "Researchers have developed an AI model that can diagnose heart disease faster and more accurately than ever before. This breakthrough has the potential to revolutionize healthcare diagnostics.",
    "url": "#",
    "source": "The New York Times",
    "date": "July 14, 2022",
    "category": "Research"
  },
  {
    "title": "AI Beats Humans at Chess and Now Poker",
    "description": "A new artificial intelligence program developed by DeepMind has defeated world-class poker players in a series of matches, showcasing the impressive strategic capabilities of AI.",
    "url": "#",
    "source": "BBC",
    "date": "July 14, 2022",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup to Boost Cloud Services",
    "description": "Microsoft has acquired an AI startup, aiming to enhance its cloud services with the company's machine learning expertise. This move is expected to fuel the AI race among tech giants.",
    "url": "#",
    "source": "Forbes",
    "date": "July 14, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Dilemma of AI in Surveillance",
    "description": "Amid growing concerns over privacy, the use of AI in surveillance is sparking ethical debates. Experts call for stricter regulations to prevent misuse and protect individual privacy.",
    "url": "#",
    "source": "The Guardian",
    "date": "July 14, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Effects",
    "description": "A novel AI tool has been unveiled that can predict the effects of climate change, providing valuable insights for scientists and policymakers. The tool utilizes advanced machine learning algorithms to simulate various climate scenarios.",
    "url": "#",
    "source": "Scientific American",
    "date": "July 14, 2022",
    "category": "Tools"
  }
];
