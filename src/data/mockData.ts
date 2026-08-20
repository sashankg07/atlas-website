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
    "title": "AI Breakthrough: DeepMind Solves 50-Year-Old 'Protein Folding' Problem",
    "description": "DeepMind, an AI lab under Google's parent company Alphabet, has announced a solution to the 'protein folding' problem - a grand challenge in biology. This success could revolutionize the way we understand diseases and discover new drugs.",
    "url": "#",
    "source": "BBC News",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact with Unprecedented Accuracy",
    "description": "Researchers have developed a new AI tool that predicts the impact of climate change with unprecedented accuracy. This could greatly assist policymakers in creating more effective climate action strategies.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "IBM Unveils Breakthrough AI to Improve Solar Power Efficiency",
    "description": "IBM announced a new AI technology that can significantly improve solar power efficiency. This breakthrough could potentially transform the renewable energy sector and accelerate the transition towards sustainable energy sources.",
    "url": "#",
    "source": "Forbes",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Mitigating Bias in AI Systems",
    "description": "As AI becomes increasingly pervasive in our lives, the issue of bias in AI systems is coming to the forefront. Experts are pushing for more transparency and accountability in AI development to mitigate potential harm.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Introduces 'GPT-3.5-Turbo', a Powerful New Language Model",
    "description": "OpenAI has released 'GPT-3.5-Turbo', a new version of its language prediction model. This cutting-edge tool has a wide range of applications, from drafting emails to writing code, and can even translate languages.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
