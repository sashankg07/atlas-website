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
    "title": "AI Predicts Climate Change Patterns with Unprecedented Accuracy",
    "description": "A groundbreaking AI model developed by researchers has shown potential in predicting climate change patterns with remarkable precision. The model utilizes deep learning algorithms to analyze vast amounts of climate data and make accurate predictions.",
    "url": "#",
    "source": "Nature",
    "date": "November 05, 2021",
    "category": "Research"
  },
  {
    "title": "AI Transforming Healthcare: Personalized Medicine on the Rise",
    "description": "AI technologies are reshaping the healthcare industry, delivering personalized medicine that targets individual genetic makeup. These developments could revolutionize treatments for numerous diseases, including cancer.",
    "url": "#",
    "source": "Forbes",
    "date": "November 05, 2021",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup to Bolster Cloud Services",
    "description": "Microsoft recently announced the acquisition of a prominent AI startup, aiming to enhance its cloud services. The acquisition highlights the growing role of AI in business strategies.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "November 05, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Questioned in Recent Autonomous Vehicle Incidents",
    "description": "Recent incidents involving autonomous vehicles have raised important questions about AI ethics and safety. Experts are calling for better regulations and transparency in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI Tools to Streamline Workflow",
    "description": "Google has introduced a set of AI-powered tools designed to boost productivity and streamline workflow. The tools leverage machine learning to automate routine tasks, freeing up time for more strategic work.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 05, 2021",
    "category": "Tools"
  }
];
