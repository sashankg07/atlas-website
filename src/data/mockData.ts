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
    "title": "AI Transforms Drug Discovery Landscape",
    "description": "Cutting-edge AI technology is revolutionizing the pharmaceutical industry by expediting drug discovery and development. The technology is predicted to save billions in R&D costs and dramatically accelerate time to market.",
    "url": "#",
    "source": "Nature",
    "date": "November 06, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics: Navigating the Balance Between Innovation and Regulation",
    "description": "As AI becomes increasingly pervasive, ethical considerations are coming to the forefront. Policymakers and AI developers are working together to ensure responsible AI deployment while maintaining a conducive environment for innovation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 06, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI-Powered Cybersecurity Tools: The New Frontier",
    "description": "AI's potential in enhancing cybersecurity measures is being realized with the development of advanced tools capable of predicting and mitigating cyber threats before they occur. These tools are becoming indispensable in the era of increasing digital threats.",
    "url": "#",
    "source": "Wired",
    "date": "November 06, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Retail: Personalising Customer Experience",
    "description": "AI is changing the retail game by providing personalized experiences to customers. From virtual shopping assistants to AI-driven product recommendations, retailers are leveraging AI to stay competitive in the digital marketplace.",
    "url": "#",
    "source": "Forbes",
    "date": "November 06, 2021",
    "category": "Business"
  },
  {
    "title": "OpenAI's GPT-3: The Next Generation AI Language Model",
    "description": "OpenAI's GPT-3, the most advanced language model to date, is making waves with its ability to generate remarkably human-like text. Its applications are endless, from drafting emails to writing software code.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 06, 2021",
    "category": "Tools"
  }
];
