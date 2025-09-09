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
    "title": "AI breakthrough: Machine Learning Model Predicts Alzheimer's with 94% Accuracy",
    "description": "Scientists have developed an artificial intelligence model that can predict Alzheimer's disease with an accuracy of 94%. This breakthrough is expected to help in early diagnosis and treatment.",
    "url": "#",
    "source": "New York Times",
    "date": "September 26, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Business: Walmart Uses AI to Improve Supply Chain Management",
    "description": "Walmart has started using AI technology to enhance its supply chain management. The company aims to improve efficiency and reduce costs with this AI integration.",
    "url": "#",
    "source": "Forbes",
    "date": "September 26, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released by IEEE",
    "description": "The Institute of Electrical and Electronics Engineers (IEEE) has released new guidelines for ethical AI development. These guidelines aim to ensure that AI is developed and used in a manner that is beneficial and fair to all.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 26, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Google's DeepMind Develops AI That Can Understand Complex Protein Structures",
    "description": "Google's AI lab, DeepMind, has created an AI model capable of understanding complex protein structures. This development could lead to significant breakthroughs in medical research and drug discovery.",
    "url": "#",
    "source": "BBC News",
    "date": "September 26, 2021",
    "category": "Technology"
  },
  {
    "title": "OpenAI Introduces Codex, an AI-Powered Coding Assistant",
    "description": "OpenAI has unveiled Codex, an AI-powered tool that can generate code in response to natural language prompts. This tool aims to assist both novice and experienced developers in coding tasks.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 26, 2021",
    "category": "Tools"
  }
];
