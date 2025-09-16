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
    "title": "AI Breaks New Ground in Protein Folding Problem",
    "description": "Artificial intelligence has made a groundbreaking achievement in solving the complex protein folding problem. This breakthrough could pave the way for significant advancements in drug discovery and disease understanding.",
    "url": "#",
    "source": "The New York Times",
    "date": "March 22, 2022",
    "category": "Research"
  },
  {
    "title": "AI-driven Personalized Education Surges in Popularity",
    "description": "Artificial Intelligence is revolutionizing education by bringing personalized, adaptive learning to the forefront. This trend could reshape how we approach teaching and learning on a global scale.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 22, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Turns Up the Heat in the Fight Against Climate Change",
    "description": "Recent developments in AI technology are being leveraged to combat climate change. Innovative startups are leading the charge with AI-powered solutions for predicting weather patterns and optimizing energy use.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 22, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate Intensifies as Technology Proliferates",
    "description": "As AI technology becomes more ubiquitous, the conversation on ethics and responsible AI use is gaining momentum. Policymakers and tech giants alike are grappling with the implications of AI-driven decision-making.",
    "url": "#",
    "source": "Washington Post",
    "date": "March 22, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Revolutionize Data Analysis",
    "description": "In the rapidly evolving field of data science, AI tools are emerging as game-changers. These sophisticated tools are enabling data analysts to gain deeper insights and make more accurate predictions.",
    "url": "#",
    "source": "Forbes",
    "date": "March 22, 2022",
    "category": "Tools"
  }
];
