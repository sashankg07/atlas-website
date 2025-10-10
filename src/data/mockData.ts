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
    "title": "Major Breakthrough in AI Language Understanding: The Rise of GPT-3",
    "description": "OpenAI's GPT-3 has revolutionized the field of natural language processing with its impressive language understanding capabilities. It can write essays, answer questions, and even write software code.",
    "url": "#",
    "source": "The Verge",
    "date": "September 29, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: New Developments in Diagnosing Diseases",
    "description": "Advanced AI algorithms are now being used to accurately diagnose a variety of diseases, potentially leading to early detection and better patient outcomes.",
    "url": "#",
    "source": "Medical News Today",
    "date": "September 29, 2022",
    "category": "Technology"
  },
  {
    "title": "AI and Ethics: The Ongoing Debate on AI Fairness",
    "description": "As AI continues to integrate into society, the debate on its ethical implications intensifies. Key issues include data privacy, algorithmic fairness, and the digital divide.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Microsoft Acquires AI Startup to Improve Cloud Capabilities",
    "description": "Microsoft has acquired an AI startup to further bolster its cloud capabilities. The move is seen as a strategic step to compete with other tech giants in the booming cloud market.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tools to Boost Image Recognition Accuracy",
    "description": "Emerging AI tools are enhancing image recognition capabilities, opening new possibilities in fields like security, retail, and healthcare.",
    "url": "#",
    "source": "Wired",
    "date": "September 29, 2022",
    "category": "Tools"
  }
];
