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
    "title": "AI Revolutionizes Cancer Detection with Deep Learning",
    "description": "A recent breakthrough in AI research has led to a deep learning model capable of detecting certain types of cancer with remarkable accuracy. This advancement could drastically improve early diagnosis and treatment.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics in Focus: Controversial Facial Recognition Tech",
    "description": "As facial recognition technology becomes increasingly advanced, questions about privacy and discrimination have taken center stage. Policymakers and tech companies alike are grappling with the ethical implications.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "Autonomous Vehicles: AI Drives the Future of Transportation",
    "description": "With AI at the helm, autonomous vehicles are becoming a reality. Companies are investing billions in this technology, promising safer and more efficient transportation.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Startup Raises $100M to Streamline Customer Service",
    "description": "An AI startup has raised a significant funding round to enhance its customer service automation solution. The tool leverages AI to handle common inquiries, freeing up human agents for more complex tasks.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A newly launched AI tool aims to simplify data analysis, making it accessible to non-tech professionals. The tool uses AI to interpret and visualize data, eliminating the need for complex coding skills.",
    "url": "#",
    "source": "Wired",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
