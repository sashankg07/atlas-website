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
    "title": "AI Outperforms Humans in Designing Microchips",
    "description": "Google researchers have developed an artificial intelligence that can quickly learn to design computer chips better than humans. The AI completes the task in just a few hours, compared to the months it takes for human engineers.",
    "url": "#",
    "source": "The Verge",
    "date": "October 02, 2021",
    "category": "Technology"
  },
  {
    "title": "Revolutionizing Healthcare: AI Predicts Heart Disease with Unprecedented Accuracy",
    "description": "A new AI model developed by Stanford University researchers can predict the risk of heart disease with an accuracy rate of 90%. This breakthrough could potentially save billions in healthcare costs.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 02, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: IBM Releases AI Fairness Toolkit",
    "description": "IBM has released an open-source toolkit aimed at ensuring fairness in AI. The toolkit allows developers to assess and mitigate bias in their AI models, promoting transparency and accountability.",
    "url": "#",
    "source": "IBM News Room",
    "date": "October 02, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Business: Salesforce Introduces AI-Powered Customer Service",
    "description": "Salesforce has announced a new AI-powered service cloud, designed to help companies predict customer needs and deliver personalized customer service. The AI tool uses machine learning to analyze past interactions and anticipate future needs.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 02, 2021",
    "category": "Business"
  },
  {
    "title": "OpenAI Releases New Language Processing Tool, GPT-3",
    "description": "OpenAI has released the third version of its Generative Pretrained Transformer (GPT-3), a language processing AI that can generate human-like text. The tool is capable of tasks such as translation, question answering, and even writing essays.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "October 02, 2021",
    "category": "Tools"
  }
];
