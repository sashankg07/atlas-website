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
    "title": "MIT Researchers Develop AI That Learns Without Data",
    "description": "Scientists from MIT have developed an AI model that can learn to identify objects within an image, without needing any prior knowledge in the form of training data. The breakthrough could significantly reduce the resources required to train AI models in the future.",
    "url": "#",
    "source": "MIT News",
    "date": "September 27, 2021",
    "category": "Research"
  },
  {
    "title": "DeepMind's AI System Masters Complex Game 'Go' Without Human Input",
    "description": "DeepMind's latest AI model, AlphaGo Zero, has mastered the complex board game 'Go' without any human input. The AI taught itself from scratch and surpassed the abilities of its predecessors within just 3 days.",
    "url": "#",
    "source": "DeepMind Blog",
    "date": "September 27, 2021",
    "category": "Technology"
  },
  {
    "title": "Amazon Introduces Astro, An AI-Powered Home Robot",
    "description": "Amazon has unveiled 'Astro', an AI-powered household robot that can navigate a user's home to perform tasks like checking on pets, assisting with video calls, and providing home security surveillance.",
    "url": "#",
    "source": "Amazon News",
    "date": "September 27, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Concerns Mount as Facial Recognition Use Grows",
    "description": "As facial recognition technology becomes increasingly prevalent, concerns are growing about the ethical implications. Critics argue that the technology could infringe on privacy rights and perpetuate racial discrimination.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 27, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases Codex, an AI-Powered Coding Assistant",
    "description": "OpenAI has released Codex, an AI tool that assists with coding tasks by predicting what piece of code comes next. It is expected to revolutionize the field of software development by increasing efficiency and reducing errors.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "September 27, 2021",
    "category": "Tools"
  }
];
