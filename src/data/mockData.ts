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
    "title": "AI Breakthrough: DeepMind's MuZero Masters Games Without Knowing Rules",
    "description": "DeepMind's revolutionary AI, MuZero, has accomplished the extraordinary feat of mastering games without even knowing the rules. This development could have wide-ranging implications in real-world scenarios.",
    "url": "#",
    "source": "New York Times",
    "date": "September 24, 2022",
    "category": "Research"
  },
  {
    "title": "Transforming Healthcare: AI-powered Diagnostics On The Rise",
    "description": "Artificial intelligence is revolutionizing healthcare, with AI-powered diagnostics systems proving to be particularly effective. These systems are improving accuracy and speed of diagnosis, potentially saving countless lives.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 24, 2022",
    "category": "Technology"
  },
  {
    "title": "OpenAI's GPT-4: A New Era in Language Processing AI",
    "description": "OpenAI has unveiled GPT-4, the latest in its line of language-processing AI models. The new model boasts improved understanding and generation capabilities, pushing the boundaries of what AI can achieve.",
    "url": "#",
    "source": "BBC News",
    "date": "September 24, 2022",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Elon Musk's Neuralink Aims for Human Trials in 2023",
    "description": "Elon Musk's ambitious brain-computer interface startup Neuralink is planning to start human trials in 2023. The device could potentially help people with neurological conditions, but it also raises significant ethical concerns.",
    "url": "#",
    "source": "Reuters",
    "date": "September 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "IBM Introduces Breakthrough AI Fairness Toolkit",
    "description": "IBM has launched a new AI fairness toolkit designed to help developers build and test bias-free AI models. The toolkit promises to usher in a new era of ethical, transparent AI.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 24, 2022",
    "category": "Tools"
  }
];
