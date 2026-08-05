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
    "description": "DeepMind's AI system, AlphaFold, has made a significant breakthrough in solving the protein folding problem, a complex biological challenge that has puzzled scientists for decades. This development will dramatically enhance our understanding of diseases and drug development.",
    "url": "#",
    "source": "Nature",
    "date": "October 07, 2022",
    "category": "Research"
  },
  {
    "title": "AI in the Driver's Seat: Tesla's Full Self-Driving Software",
    "description": "Tesla has released a beta version of its Full Self-Driving (FSD) software to a select group of customers. The FSD system uses advanced AI algorithms and machine learning to navigate the complex world of urban driving.",
    "url": "#",
    "source": "The Verge",
    "date": "October 07, 2022",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup Nuance Communications",
    "description": "In a move to bolster its AI capabilities, Microsoft has acquired AI startup Nuance Communications. This acquisition is expected to enhance Microsoft's offerings in AI and healthcare technology services.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "October 07, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Debating the Ethics of AI in Autonomous Weapon Systems",
    "description": "The use of AI in autonomous weapon systems has sparked an intense ethical debate among scientists. Critics argue that AI-powered weapons could make life-or-death decisions without human intervention, raising serious moral and legal concerns.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 07, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Introduces ChatGPT: A Powerful AI Writing Tool",
    "description": "OpenAI has launched ChatGPT, an AI-based writing tool that generates human-like text. This tool has various applications from drafting emails to writing code, and even tutoring in a range of subjects.",
    "url": "#",
    "source": "Wired",
    "date": "October 07, 2022",
    "category": "Tools"
  }
];
