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
    "title": "AI Model Predicts Climate Change Impact",
    "description": "Researchers have developed a new AI model that accurately predicts the long-term effects of climate change. The model uses machine learning to analyze data and could substantially aid efforts to mitigate climate change.",
    "url": "#",
    "source": "Nature",
    "date": "October 04, 2021",
    "category": "Research"
  },
  {
    "title": "New AI-Driven Healthcare Tools Revolutionize Patient Care",
    "description": "A new suite of AI tools is transforming healthcare by enabling personalized patient care and disease prediction. These advancements are expected to significantly boost healthcare outcomes and efficiency.",
    "url": "#",
    "source": "HealthTech Magazine",
    "date": "October 04, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI Startups",
    "description": "A leading technology company has announced a multi-billion dollar investment in AI startups. This move signals a strong industry belief in the future of AI and its potential to revolutionize various sectors.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 04, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Over AI Facial Recognition Technology",
    "description": "As AI facial recognition technology advances, it's sparking ethical debates around privacy and bias. Advocates argue for regulation to ensure responsible use of this powerful technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 04, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Software Tool Streamlines Data Analysis",
    "description": "A newly released AI tool promises to make data analysis more accessible, efficient, and accurate. The software uses machine learning to automate and optimize data analysis processes.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 04, 2021",
    "category": "Tools"
  }
];
