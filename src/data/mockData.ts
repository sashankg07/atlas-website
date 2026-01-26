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
    "title": "AI Achieves Breakthrough in Protein Folding Problem",
    "description": "Google's DeepMind has reportedly solved the decades-old 'protein folding' problem, marking a significant milestone in biology. The breakthrough could aid in solving major health crises, including cancer and COVID-19.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 13, 2022",
    "category": "Research"
  },
  {
    "title": "IBM Releases New AI Tool to Combat Online Harassment",
    "description": "IBM has launched a new AI tool designed to detect and mitigate online harassment. The tool aims to make the internet a safer place by identifying harmful content and enabling effective moderation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 13, 2022",
    "category": "Tools"
  },
  {
    "title": "AI Adoption Skyrockets Among Fortune 500 Companies",
    "description": "A recent report shows that AI adoption has increased significantly amongst Fortune 500 companies. The survey results highlight AI's potential to drive business performance and efficiency.",
    "url": "#",
    "source": "Forbes",
    "date": "October 13, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics in Question Following Facial Recognition Misidentification",
    "description": "The recent wrongful arrest due to misidentification by a facial recognition system has sparked a debate on AI ethics. Critics argue for more robust regulation and transparency in AI deployments, particularly in law enforcement.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 13, 2022",
    "category": "Ethics"
  },
  {
    "title": "NVIDIA Unveils Next Generation AI Chips",
    "description": "NVIDIA has unveiled its next-generation AI chips, promising unprecedented computational power and energy efficiency. The new chip is expected to accelerate the development and deployment of AI solutions.",
    "url": "#",
    "source": "Reuters",
    "date": "October 13, 2022",
    "category": "Technology"
  }
];
