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
    "title": "AI Helps Scientists Understand Climate Change",
    "description": "Researchers are using artificial intelligence to gain a better understanding of climate change impacts. The AI model can predict climate patterns and natural disasters with unprecedented accuracy.",
    "url": "#",
    "source": "The Science Times",
    "date": "October 01, 2021",
    "category": "Research"
  },
  {
    "title": "Microsoft Announces New AI-Driven Cloud Services",
    "description": "Microsoft unveiled new cloud services with AI capabilities, aiming to accelerate digital transformation for businesses. These services promise to improve efficiency and provide valuable insights.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 01, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100 Million in Series C Funding",
    "description": "AI start-up, AI Corp, has secured $100 million in its latest funding round. The investment will be used to scale up operations and expand its AI-driven solutions.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 01, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Released",
    "description": "A global consortium has released a new set of ethical guidelines for AI development and usage. The guidelines aim to ensure AI technologies respect human rights and promote fairness.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 01, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google's New AI Tool Transforms Sketches Into Landscapes",
    "description": "Google's latest AI tool lets users convert simple sketches into realistic landscape images. This tool demonstrates the potential of AI in creative fields.",
    "url": "#",
    "source": "Wired",
    "date": "October 01, 2021",
    "category": "Tools"
  }
];
