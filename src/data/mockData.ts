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
    "title": "AI Breaks New Ground in Cancer Diagnosis",
    "description": "A team of researchers has developed an AI model that can diagnose cancer with a higher accuracy rate than human doctors. This breakthrough could revolutionize the healthcare industry, making early detection more accessible and accurate.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 04, 2023",
    "category": "Research"
  },
  {
    "title": "Tech Giants Adopt AI for Sustainable Solutions",
    "description": "Major tech companies, including Microsoft and Google, are leveraging AI to tackle climate change. These AI-powered initiatives aim to reduce carbon emissions and promote sustainable practices.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 04, 2023",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Raises $200 Million in Latest Funding Round",
    "description": "In a testament to the growing importance of AI in business, a Silicon Valley start-up specializing in AI solutions has successfully raised $200 million in its latest funding round.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 04, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: A Growing Debate",
    "description": "As AI continues to integrate into society, the debate over its ethical implications intensifies. From privacy concerns to job displacement, experts are calling for comprehensive regulations.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 04, 2023",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transform the Creative Industry",
    "description": "A new wave of AI-powered tools is revolutionizing the creative industry, offering unprecedented capabilities for image editing, music production, and content creation.",
    "url": "#",
    "source": "Wired",
    "date": "October 04, 2023",
    "category": "Tools"
  }
];
