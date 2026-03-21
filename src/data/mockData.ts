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
    "title": "Tech Giant Amazon Unveils Its New AI-based Customer Support Bot",
    "description": "Amazon has launched a highly sophisticated AI chatbot that is capable of handling complex customer queries. The bot leverages machine learning to improve its responses over time.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "March 27, 2022",
    "category": "Business"
  },
  {
    "title": "MIT Researchers Develop AI That Can Predict Alzheimer's",
    "description": "A team of researchers at MIT has developed an AI model that can predict the onset of Alzheimer's disease five years in advance. This breakthrough could revolutionize early detection and treatment strategies.",
    "url": "#",
    "source": "MIT News",
    "date": "March 27, 2022",
    "category": "Research"
  },
  {
    "title": "AI Ethics Spotlight: IBM's AI Fairness Toolkit",
    "description": "IBM has released an AI toolkit designed to mitigate bias in AI algorithms. This move highlights the growing importance of ethical considerations in AI development.",
    "url": "#",
    "source": "IBM News Room",
    "date": "March 27, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "OpenAI Introduces New Language Processing Tool",
    "description": "OpenAI has introduced a cutting-edge language processing tool that understands and generates human-like text. This tool is expected to have a significant impact on various industries.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "March 27, 2022",
    "category": "Tools"
  },
  {
    "title": "AI Revolutionizing Autonomous Driving: Tesla's New Update",
    "description": "Tesla has released a new software update that significantly improves its vehicles' autonomous driving capabilities. The update leverages advanced AI technologies to enhance performance and safety.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 27, 2022",
    "category": "Technology"
  }
];
