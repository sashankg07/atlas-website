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
    "title": "AI Solves 50-Year-Old Biology Problem, Revolutionizing Drug Discovery",
    "description": "Google's DeepMind has solved a decades-old problem related to protein folding, a breakthrough that could revolutionize drug discovery. This AI breakthrough has been described as a game-changer for life sciences.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 24, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Climate Change: A New Ally in the Fight",
    "description": "Artificial Intelligence is proving to be a powerful tool against climate change, helping scientists forecast environmental changes with unprecedented accuracy. AI's potential in this area could be a game-changer for our planet's future.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 24, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM Unveils Breakthrough in AI Fairness",
    "description": "IBM has unveiled a new tool to detect and mitigate bias in AI, emphasizing the growing importance of ethical considerations in AI development. The tool offers promise in addressing AI's 'black box' problem.",
    "url": "#",
    "source": "Forbes",
    "date": "October 24, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Startups Attract Record Investments",
    "description": "AI startups have seen a record-breaking level of investment in Q3 2022, indicating a booming market for AI innovations. This trend reflects the increasing integration of AI across industries.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 24, 2022",
    "category": "Business"
  },
  {
    "title": "New OpenAI Tool Transforms Text to Images",
    "description": "OpenAI has launched a new tool that can generate detailed images from textual descriptions. This tool could revolutionize fields from design to entertainment, heralding a new era of AI creativity.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 24, 2022",
    "category": "Tools"
  }
];
