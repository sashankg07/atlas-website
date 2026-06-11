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
    "title": "AI Revolutionizes Drug Discovery",
    "description": "In a groundbreaking application of AI, scientists have used machine learning to dramatically reduce the time and costs associated with drug discovery. This development opens up new possibilities for the rapid development of treatments for emergent diseases.",
    "url": "#",
    "source": "Nature Biotechnology",
    "date": "October 26, 2021",
    "category": "Research"
  },
  {
    "title": "AI-powered Predictive Analytics Transforming Business Landscape",
    "description": "Advanced AI algorithms are being used to predict consumer behavior, offering businesses a powerful tool for optimizing their operations. This technology is expected to drive a new wave of innovation in numerous sectors.",
    "url": "#",
    "source": "Harvard Business Review",
    "date": "October 26, 2021",
    "category": "Business"
  },
  {
    "title": "DeepMind's Latest AI Model Breaks Language Understanding Barriers",
    "description": "DeepMind has released a new AI model that demonstrates an unprecedented understanding of natural language. This development is expected to revolutionize the field of conversational AI.",
    "url": "#",
    "source": "The Verge",
    "date": "October 26, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Urgent Need for Transparency and Regulation",
    "description": "As AI becomes more integrated into our daily lives, experts are calling for greater transparency and regulation. Concerns about bias, privacy, and misuse of AI technologies underscore the urgency of this issue.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 26, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: The Future of Content Creation",
    "description": "AI-powered tools are reshaping content creation, offering unique capabilities such as automated text generation and image editing. These advancements are expected to redefine the creative industry.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 26, 2021",
    "category": "Tools"
  }
];
