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
    "title": "AI Revolutionizes Cancer Detection: New Developments in Medical Imaging",
    "description": "The latest developments in AI technology are transforming the field of medical imaging, making early and accurate detection of cancer possible. This breakthrough has the potential to save millions of lives worldwide.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 23, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giants Adopt Responsible AI Practices: A Step Towards Ethical AI",
    "description": "Leading tech companies such as Google and Microsoft are adopting responsible AI practices in a bid to ensure ethical considerations are at the forefront of AI development.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 23, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI in Retail: Personalized Shopping Experiences Redefined",
    "description": "AI technology is being leveraged to create highly personalized shopping experiences. Retailers are using AI to analyze customer behavior and provide tailored product recommendations.",
    "url": "#",
    "source": "Forbes",
    "date": "October 23, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Predicts Climate Change Effects with Unprecedented Accuracy",
    "description": "Researchers have developed an AI tool that can predict the effects of climate change with remarkable accuracy. This technology could help policymakers make informed decisions to combat climate change.",
    "url": "#",
    "source": "Science Daily",
    "date": "October 23, 2022",
    "category": "Technology"
  },
  {
    "title": "Artificial Intelligence Breaks New Ground in Language Understanding",
    "description": "A new AI model shows unprecedented performance in understanding and generating human language. This breakthrough could revolutionize machine-human interaction.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 23, 2022",
    "category": "Research"
  }
];
