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
    "title": "AI Breakthrough: DeepMind Solves 50-Year-Old Protein Folding Problem",
    "description": "DeepMind's AI system, AlphaFold, has made a breakthrough in bioscience by solving the 50-year-old challenge of protein folding. This development could fast-track solutions to diseases like Alzheimer's and cancer.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "October 18, 2022",
    "category": "Research"
  },
  {
    "title": "Autonomous Vehicles: Tesla's Full Self-Driving AI Gets Regulatory Approval",
    "description": "Tesla has received approval for their Full Self-Driving AI software from the US Department of Transportation. This marks a significant milestone in the autonomous vehicle industry.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 18, 2022",
    "category": "Technology"
  },
  {
    "title": "AI in Healthcare: IBM's Watson Assists in Early Detection of Diseases",
    "description": "IBM's Watson AI has proven effective in assisting doctors with early disease detection. This development is hailed as a major advancement in the application of AI in healthcare.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 18, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: EU Proposes New Guidelines to Regulate AI Use",
    "description": "The European Union has proposed a new set of guidelines to ensure ethical use of AI. The guidelines aim to prevent misuse and promote transparency in the development and application of AI technologies.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 18, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool: Google's Language Model GPT-3 Impresses with Writing Ability",
    "description": "Google's GPT-3 AI model has shown impressive writing ability, producing human-like text. This tool could revolutionize content creation and language translation.",
    "url": "#",
    "source": "Wired",
    "date": "October 18, 2022",
    "category": "Tools"
  }
];
