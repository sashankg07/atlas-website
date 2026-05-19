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
    "title": "AI Predicts Alzheimer's Disease Years Before Diagnosis",
    "description": "A cutting-edge AI model has been developed by researchers that can predict the onset of Alzheimer's disease up to six years before a clinical diagnosis. This groundbreaking tool could revolutionize early detection and treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Next-Gen AI Chip",
    "description": "A leading tech giant has unveiled its latest AI chip, promising to deliver unprecedented computational power and energy efficiency. The chip is set to boost AI applications ranging from self-driving cars to advanced robotics.",
    "url": "#",
    "source": "The Verge",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100 Million in Series B Funding",
    "description": "An emerging AI startup has secured $100 million in Series B funding, marking one of the largest rounds in the AI sector this year. The funds will be used to accelerate the company's product development and global expansion.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Guidelines: A New Proposal",
    "description": "A group of international researchers has proposed a new set of guidelines for AI ethics, emphasizing transparency, accountability, and fairness. The proposal aims to mitigate the potential negative impacts of AI systems on society.",
    "url": "#",
    "source": "Nature",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning",
    "description": "A new AI tool has been launched that simplifies the machine learning process, making it more accessible to non-experts. The tool is expected to democratize AI development and foster innovation across industries.",
    "url": "#",
    "source": "Wired",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
