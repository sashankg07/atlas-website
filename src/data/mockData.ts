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
    "title": "Revolutionizing Healthcare: AI Models Predict Disease Outcomes",
    "description": "A groundbreaking development in AI technology allows prediction of disease outcomes with increased accuracy. This breakthrough could revolutionize the healthcare industry and make patient care more precise and effective.",
    "url": "#",
    "source": "The AI Times",
    "date": "November 07, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Transforms Image Editing",
    "description": "A new AI tool has been unveiled that significantly simplifies image editing tasks. The tool uses machine learning to automate complex editing processes, promising to make life easier for designers and artists.",
    "url": "#",
    "source": "Tech AI Daily",
    "date": "November 07, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Ethical Guidelines: A Step Towards Responsible AI",
    "description": "Leading tech companies have joined forces to establish a set of ethical guidelines for AI development. The move aims to ensure that AI technologies are developed and used responsibly, prioritizing human rights and data privacy.",
    "url": "#",
    "source": "AI Ethics Weekly",
    "date": "November 07, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Business: Transforming Customer Experience",
    "description": "Businesses are leveraging AI to transform customer experience, using chatbots and predictive analytics to personalize interactions. Experts predict this trend will continue to grow as more businesses recognize the potential of AI.",
    "url": "#",
    "source": "AI Business Insider",
    "date": "November 07, 2021",
    "category": "Business"
  },
  {
    "title": "AI Breakthrough: Deep Learning Outperforms Humans in Reading Comprehension",
    "description": "In a recent breakthrough, an AI model has outperformed humans in a reading comprehension test. This development could have significant implications for automated text analysis and summarization.",
    "url": "#",
    "source": "AI Research Digest",
    "date": "November 07, 2021",
    "category": "Technology"
  }
];
