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
    "title": "AI Breakthrough: DeepMind Solves 50-Year-Old 'Protein Folding' Challenge",
    "description": "Google's DeepMind has made a major breakthrough in AI by solving the 50-year-old 'protein folding' problem. This could revolutionize the understanding of diseases and the development of drugs.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "Artificial Intelligence to Power New Era of Autonomous Vehicles",
    "description": "AI is set to transform the automotive industry with autonomous vehicles becoming increasingly sophisticated. The integration of AI is predicted to improve safety, efficiency, and user experience.",
    "url": "#",
    "source": "Forbes",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "Microsoft's AI Technology Boosts Business Operations",
    "description": "Microsoft has unveiled new AI technology that can enhance business operations through improved data analysis. The technology promises to help businesses make more informed, data-driven decisions.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: The Importance of Making AI Fair, Transparent, and Accountable",
    "description": "As AI becomes widespread, calls for legislation ensuring fairness, transparency, and accountability have intensified. This highlights the growing importance of ethical considerations in AI development.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI's New Tool Promises to Streamline AI Training",
    "description": "OpenAI has released a new tool that aims to simplify and accelerate the process of training AI models. This could unlock new possibilities in AI development and application.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
