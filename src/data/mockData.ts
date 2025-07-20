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
    "title": "AI Predicts Climate Change Patterns with Unprecedented Accuracy",
    "description": "Scientists have developed an AI model capable of predicting climate change patterns with a degree of accuracy never seen before. This breakthrough could greatly aid in the global fight against climate change.",
    "url": "#",
    "source": "Science Daily",
    "date": "March 27, 2023",
    "category": "Research"
  },
  {
    "title": "AI-Powered Drones Assisting in Wildlife Conservation Efforts",
    "description": "AI technology is being used to power drones that can effectively monitor wildlife populations. This innovative approach promises to revolutionize the field of wildlife conservation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 27, 2023",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100M To Develop Next Generation AI Tools",
    "description": "A new AI start-up has successfully raised $100M in funding to develop cutting-edge AI tools. The firm aims to accelerate the implementation of AI across various industries.",
    "url": "#",
    "source": "Bloomberg",
    "date": "March 27, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Proposed Legislation to Regulate AI Ethics",
    "description": "A new legislation proposal seeks to establish a regulatory framework around AI ethics. The proposal aims to protect consumer data and promote transparency in AI development.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 27, 2023",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Software Development",
    "description": "A newly released AI tool is set to streamline software development, allowing developers to produce high-quality code more efficiently. The tool uses machine learning to automate parts of the coding process.",
    "url": "#",
    "source": "The Verge",
    "date": "March 27, 2023",
    "category": "Tools"
  }
];
