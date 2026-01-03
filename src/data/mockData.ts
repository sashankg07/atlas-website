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
    "title": "Revolutionizing Medicine: AI Diagnoses Skin Cancer with 95% Accuracy",
    "description": "In a recent breakthrough, researchers have developed an AI model that can diagnose skin cancer with an accuracy of 95%, exceeding the average accuracy of dermatologists. This development has the potential to revolutionize skin cancer diagnostics and treatment.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 19, 2021",
    "category": "Research"
  },
  {
    "title": "AI-powered Chatbots Transforming Customer Service Industry",
    "description": "An increasing number of businesses are leveraging AI chatbots to enhance their customer service operations. These chatbots are capable of understanding and responding to customer queries in real-time, leading to improved customer satisfaction and efficiency.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 19, 2021",
    "category": "Business"
  },
  {
    "title": "Google's New AI Ethics Policy Promises Greater Transparency",
    "description": "Google has announced a new set of AI ethics policies, promising more transparency and accountability in its AI operations. The move comes in response to previous controversies and criticism over the company's AI projects.",
    "url": "#",
    "source": "The Verge",
    "date": "December 19, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "OpenAI Releases New Language Model API",
    "description": "OpenAI has unveiled its latest language model API, offering developers a new way to integrate AI into their products and services. The API supports a range of language tasks, including translation, summarization, and content generation.",
    "url": "#",
    "source": "Wired",
    "date": "December 19, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Breakthrough: Machines Learning to Reason",
    "description": "Researchers have developed a new AI system capable of basic reasoning, a significant leap towards more intelligent and autonomous AI systems. The system, which learns to make logical deductions, could have wide-ranging implications for AI development.",
    "url": "#",
    "source": "Nature",
    "date": "December 19, 2021",
    "category": "Technology"
  }
];
