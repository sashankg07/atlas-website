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
    "title": "DeepMind Develops AI That Predicts Protein Structures with Unparalleled Accuracy",
    "description": "DeepMind's newest AI, AlphaFold, is capable of predicting the 3D structures of proteins with accuracy comparable to experimental results. This breakthrough could revolutionize drug discovery and biological research.",
    "url": "#",
    "source": "Nature",
    "date": "June 26, 2022",
    "category": "Research"
  },
  {
    "title": "OpenAI Introduces ChatGPT, a Step Forward in Conversational AI",
    "description": "OpenAI's latest AI model, ChatGPT, has been fine-tuned for human-like conversation. It can generate creative content, answer questions, and even write Python code.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "June 26, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM Debuts AutoAI, Bringing Automation to AI Workflows",
    "description": "IBM's new AutoAI system aims to automate the process of training and deploying AI models, significantly reducing the time and expertise required.",
    "url": "#",
    "source": "Forbes",
    "date": "June 26, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Facebook's New AI Ethics Advisory Board Raises Questions",
    "description": "Facebook has established an AI ethics advisory board to oversee the company's AI development. However, critics question the transparency and effectiveness of the board.",
    "url": "#",
    "source": "The New York Times",
    "date": "June 26, 2022",
    "category": "Ethics"
  },
  {
    "title": "Nvidia Launches Jarvis, an AI Framework for Conversational Models",
    "description": "Nvidia's Jarvis framework aims to simplify the process of developing and deploying conversational AI models. It provides pre-trained models, tools, and APIs for developers.",
    "url": "#",
    "source": "TechCrunch",
    "date": "June 26, 2022",
    "category": "Tools"
  }
];
