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
    "title": "DeepMind's Latest AI System Outperforms Humans in 57 Atari Games",
    "description": "DeepMind's new AI model, Agent57, has managed to outperform humans in 57 classic Atari games, setting a new benchmark in the world of artificial intelligence. Agent57 uses a novel combination of methods to learn how to excel at these games.",
    "url": "#",
    "source": "The Verge",
    "date": "October 09, 2022",
    "category": "Research"
  },
  {
    "title": "OpenAI Launches New Language Prediction Model, GPT-4",
    "description": "OpenAI has released its latest language prediction model, GPT-4. The new model boasts enhanced comprehension and contextual understanding, making it the most powerful AI model to date.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 09, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup, Cognixion, Raises $20M to Develop 'SpeakPro'",
    "description": "AI startup Cognixion has secured $20M in funding to create 'SpeakPro', an AI-powered neuroprosthetic device aimed at giving speech to those who are unable. This is a significant breakthrough in assistive technology.",
    "url": "#",
    "source": "Forbes",
    "date": "October 09, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Controversy Surrounds Facial Recognition Tech Amid Privacy Concerns",
    "description": "As AI-based facial recognition technology becomes increasingly sophisticated, debates around privacy and ethical implications have been reignited. Critics argue for strict regulations to protect user data and privacy.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 09, 2022",
    "category": "Ethics"
  },
  {
    "title": "IBM Unveils 'Watson Assistant', an AI Tool for Customer Service",
    "description": "IBM has unveiled 'Watson Assistant', an AI tool designed to enhance customer service across various industries. The tool is expected to streamline customer interactions and provide quicker resolutions.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 09, 2022",
    "category": "Tools"
  }
];
