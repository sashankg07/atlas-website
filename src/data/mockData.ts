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
    "title": "Revolutionizing Medicine: AI Detects Rare Diseases in Minutes",
    "description": "AI has made a groundbreaking achievement by identifying rare genetic disorders in record time, potentially saving countless lives. This breakthrough could revolutionize the healthcare industry and the way diseases are diagnosed.",
    "url": "#",
    "source": "The AI Times",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI and Climate Change: A Match Made in Heaven",
    "description": "Researchers have successfully harnessed AI's predictive capabilities to forecast climate change patterns. This could play a pivotal role in helping governments and organizations mitigate the impacts of global warming.",
    "url": "#",
    "source": "Tech Today",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "Artificial Intelligence Shakes Up the Stock Market",
    "description": "With its unprecedented data processing abilities, AI is transforming the financial sector. Banks and investment firms are using AI to predict market trends, optimize portfolios, and improve risk management.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Innovation and Accountability",
    "description": "As the capabilities of AI continue to grow, so do ethical concerns. Experts call for stronger regulations to ensure AI technologies are developed and used responsibly and equitably.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "Unveiling the Latest AI Tools for Content Creation",
    "description": "AI is redefining content creation with tools that automate and enhance the process. From writing assistance to graphic design, these tools are transforming the creative industry.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
