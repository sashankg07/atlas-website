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
    "title": "AI revolutionizes cancer detection with record-breaking accuracy",
    "description": "A breakthrough in AI technology has resulted in a new system capable of detecting a range of cancers at their early stages with unprecedented accuracy. This could be a game-changer in the field of medical diagnostics.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 05, 2021",
    "category": "Research"
  },
  {
    "title": "New AI-driven app helps visually impaired navigate the world",
    "description": "A new app driven by AI technology is helping visually impaired individuals navigate their environment independently. The app uses object recognition and spatial awareness to provide audio cues to its users.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 05, 2021",
    "category": "Technology"
  },
  {
    "title": "AI startup secures $100M in funding to enhance predictive analytics",
    "description": "An emerging AI startup has secured $100 million in funding to enhance its predictive analytics capabilities. This investment signals a growing industry interest in data-driven decision making.",
    "url": "#",
    "source": "Forbes",
    "date": "November 05, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical considerations in AI: A rising concern",
    "description": "As AI continues to evolve and permeate various aspects of our lives, the ethical considerations surrounding its use are becoming increasingly important. Experts are now calling for comprehensive guidelines to govern AI use.",
    "url": "#",
    "source": "The Washington Post",
    "date": "November 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google releases new AI tools for developers",
    "description": "Google has released a suite of new AI tools aimed at aiding developers in creating more efficient and effective AI systems. These tools promise to make AI development more accessible and streamlined.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 05, 2021",
    "category": "Tools"
  }
];
