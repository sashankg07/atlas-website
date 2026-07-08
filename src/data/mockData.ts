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
    "title": "AI Breaks Ground in Predicting Climate Change",
    "description": "Researchers have developed an AI model capable of predicting the impact of climate change with unprecedented accuracy. The technology could revolutionize our approach to environmental preservation.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Financial Services: A New Era of Innovation",
    "description": "AI is transforming the financial industry by enabling personalized services, risk assessment, and fraud detection. This shift highlights the growing influence of AI in business operations.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Business"
  },
  {
    "title": "DeepMind's AI Solution for Protein Folding: A Game Changer",
    "description": "DeepMind's AI, AlphaFold, has made a major breakthrough in solving the protein folding problem, potentially revolutionizing biochemistry and medical research.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI and Ethical Dilemmas: Navigating the Gray Areas",
    "description": "As AI technologies advance, ethical considerations become more urgent. Researchers are grappling with how to instill ethical guidelines into AI systems and their deployment.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Launches New AI Tool: Codex",
    "description": "OpenAI has launched Codex, a sibling to GPT-3, which translates natural language to code. This new tool could significantly impact software development and coding education.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
