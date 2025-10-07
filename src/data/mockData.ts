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
    "title": "AI Breaks Ground in Early Cancer Detection",
    "description": "Recent advancements in AI technology have led to breakthroughs in early cancer detection. Leveraging machine learning algorithms, researchers are able to identify cancerous cells earlier than traditional methods.",
    "url": "#",
    "source": "Science Daily",
    "date": "October 25, 2021",
    "category": "Research"
  },
  {
    "title": "Sophia the Robot Launches NFT Art",
    "description": "Sophia, the world's first humanoid robot, has created and auctioned her own NFT art, showcasing the intersection of AI and creativity.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 25, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Powers New Wave of Customer Service Solutions",
    "description": "Businesses are increasingly turning to AI to enhance customer service. AI chatbots and virtual assistants are leading the trend, providing 24/7 support and personalized experiences.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 25, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI in Warfare",
    "description": "The use of AI in warfare is raising significant ethical concerns. Experts call for international regulations to prevent potential misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 25, 2021",
    "category": "Ethics"
  },
  {
    "title": "New OpenAI Tool Aims to Make AI More Accessible",
    "description": "OpenAI has released a new tool designed to simplify the process of training AI models. This could democratize access to AI, enabling more people to harness its potential.",
    "url": "#",
    "source": "Wired",
    "date": "October 25, 2021",
    "category": "Tools"
  }
];
