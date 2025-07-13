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
    "title": "AI Breaks Ground in Disease Diagnosis",
    "description": "Recent advancements in artificial intelligence have led to a breakthrough in the field of disease diagnosis. AI systems are now able to diagnose certain conditions with accuracy surpassing that of human doctors.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "Big Tech Invests Heavily in AI for Cloud Computing",
    "description": "Major tech companies are investing billions in AI to enhance cloud computing capabilities. The move is expected to significantly streamline data processing and analytics.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 30, 2022",
    "category": "Business"
  },
  {
    "title": "AI-Powered Robotics Transforming the Manufacturing Industry",
    "description": "The use of AI in robotics is revolutionizing the manufacturing industry by improving efficiency and reducing human error. Experts predict this trend will continue to grow in the coming years.",
    "url": "#",
    "source": "BBC News",
    "date": "September 30, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Under Scrutiny After Bias Allegations",
    "description": "The ethics of AI are being critically examined after allegations of bias in machine learning algorithms. This has sparked a debate on the need for clearer regulation and transparency in the AI industry.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Promises to Revolutionize Data Analysis",
    "description": "A newly developed AI tool is set to change the landscape of data analysis. The system uses machine learning to interpret and visualize complex datasets, making the data more accessible.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
