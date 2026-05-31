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
    "title": "Google's AI Outperforms in Protein-folding Predictions",
    "description": "Google's DeepMind has achieved a significant breakthrough with AlphaFold, a system that predicts protein structure with unprecedented accuracy. This development could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 27, 2021",
    "category": "Research"
  },
  {
    "title": "Facebook's New AI Language Model 'BlenderBot'",
    "description": "Facebook AI has introduced BlenderBot, the largest-ever open-domain chatbot. It's trained to generate human-like conversations and provide users with engaging and informative interactions.",
    "url": "#",
    "source": "BBC News",
    "date": "October 27, 2021",
    "category": "Technology"
  },
  {
    "title": "Microsoft Uses AI to Tackle Climate Change",
    "description": "Microsoft announced that it's leveraging AI technologies to improve environmental sustainability. The initiative aims to reduce carbon emissions, preserve ecosystems, and promote green practices.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 27, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Concerns: Mitigating Bias in AI Systems",
    "description": "The growing use of AI systems has raised ethical concerns, particularly around bias. Researchers and policymakers are seeking ways to ensure fairness and transparency in AI applications.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 27, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Unveils New Machine Learning Tool 'Codex'",
    "description": "OpenAI has launched Codex, an AI tool that can interpret and execute natural language commands into code. This tool is expected to significantly simplify software development.",
    "url": "#",
    "source": "Wired",
    "date": "October 27, 2021",
    "category": "Tools"
  }
];
