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
    "title": "AI Breaks New Ground in Predicting Alzheimer's",
    "description": "A new AI model has showcased unprecedented accuracy in predicting the onset of Alzheimer's disease, years before the first symptoms appear. This breakthrough could revolutionize early detection and patient care.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 26, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giants Battle Over AI Chip Dominance",
    "description": "In a face-off between industry heavyweights, Microsoft and Google are vying for pole position in the AI chip market. They aim to deliver unparalleled processing power and energy efficiency in AI computations.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 26, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Scores $100 Million in Latest Funding Round",
    "description": "AI startup, DeepVision, has raised $100 million in a Series C funding round, demonstrating the continued investor interest in AI-driven solutions. DeepVision plans to use the funds to scale its image recognition technology.",
    "url": "#",
    "source": "Forbes",
    "date": "September 26, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Implications of AI in Surveillance",
    "description": "With the increasing use of AI in surveillance systems, ethical considerations are coming to the forefront. Experts call for clear guidelines to prevent misuse and safeguard individual privacy.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 26, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning Process",
    "description": "A new AI tool, called AutoML, is making waves by automating the time-consuming process of training machine learning algorithms. This tool could democratize access to AI and accelerate its adoption.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 26, 2022",
    "category": "Tools"
  }
];
