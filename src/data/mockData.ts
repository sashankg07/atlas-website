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
    "title": "AI Revolutionizes Medical Imaging",
    "description": "Artificial Intelligence is transforming the field of medical imaging, enhancing diagnostics and treatment plans. With the power of AI, healthcare professionals can identify and analyze diseases more accurately and efficiently.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 17, 2021",
    "category": "Technology"
  },
  {
    "title": "Emerging AI Trends in E-commerce",
    "description": "From personalized recommendations to intelligent search functions, AI is reshaping the e-commerce landscape. Businesses are leveraging AI to improve customer experience and boost sales.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 17, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Balancing Benefits and Risks",
    "description": "As AI continues to advance, ethical considerations are becoming increasingly important. Experts call for careful management of AI to prevent misuse and ensure it benefits society as a whole.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 17, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A new AI-powered tool is helping researchers analyze complex datasets with ease. The tool's advanced algorithms can extract meaningful insights from raw data, accelerating the pace of research.",
    "url": "#",
    "source": "Nature",
    "date": "September 17, 2021",
    "category": "Tools"
  },
  {
    "title": "Breakthrough in AI Research: Machines Learning to Reason",
    "description": "A groundbreaking study has demonstrated that machines can now learn to reason abstractly, a significant leap forward in AI research. This could pave the way for more intelligent and versatile AI systems.",
    "url": "#",
    "source": "Science Daily",
    "date": "September 17, 2021",
    "category": "Research"
  }
];
