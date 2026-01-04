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
    "title": "Groundbreaking AI Algorithm Outperforms Humans in Object Recognition",
    "description": "Researchers from the Massachusetts Institute of Technology have developed an AI that can identify and categorize objects faster and more accurately than humans. This could revolutionize fields like autonomous vehicle navigation and medical imaging.",
    "url": "#",
    "source": "MIT News",
    "date": "October 05, 2021",
    "category": "Research"
  },
  {
    "title": "AI Startup Neuralink Aims to Implant AI Chips in Human Brains",
    "description": "Elon Musk's Neuralink is making strides in its ambitious goal of merging man with machine. They plan to start human trials of their AI brain implant, designed to treat neurological conditions and ultimately enhance human cognition.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 05, 2021",
    "category": "Business"
  },
  {
    "title": "AI Tools Revolutionize Remote Work in Post-Pandemic World",
    "description": "AI-powered tools are helping businesses adapt to the remote work trend, increasing productivity and efficiency. These technologies include AI chatbots, virtual assistants, and predictive analytics tools.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 05, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Dilemmas Surrounding Use of Facial Recognition AI",
    "description": "The use of AI in facial recognition technology has sparked a major debate on privacy and consent. Critics argue that it infringes on personal privacy, while proponents highlight its potential benefits in areas like security and law enforcement.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases GPT-3, the Latest in AI Text Generation",
    "description": "OpenAI has released GPT-3, its most advanced AI text generator yet. It has 175 billion machine learning parameters and can generate impressively human-like text.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "October 05, 2021",
    "category": "Tools"
  }
];
