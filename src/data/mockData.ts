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
    "title": "Artificial Intelligence Breaks New Ground in Disease Prediction",
    "description": "Researchers have developed a new AI model capable of predicting the progression of genetic diseases. This breakthrough could revolutionize personalized medicine and patient care.",
    "url": "#",
    "source": "Nature",
    "date": "September 22, 2022",
    "category": "Research"
  },
  {
    "title": "AI Transforms the Landscape of E-commerce",
    "description": "Leading e-commerce companies are using AI to personalize customer shopping experiences. The technology analyzes consumer behavior to predict preferences and recommend products.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 22, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released by Tech Giants",
    "description": "In response to growing public concern, major technology companies have released new guidelines to ensure ethical use of AI. The initiative aims to curb misuse and promote transparency.",
    "url": "#",
    "source": "The Verge",
    "date": "September 22, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Powers Next Generation of Climate Change Models",
    "description": "Scientists are leveraging AI to develop more accurate climate change prediction models. The technology is capable of analyzing vast amounts of data to help understand complex weather patterns.",
    "url": "#",
    "source": "Scientific American",
    "date": "September 22, 2022",
    "category": "Technology"
  },
  {
    "title": "New Tool Uses AI to Enhance Video Streaming Quality",
    "description": "A groundbreaking new tool capitalizes on AI to optimize video streaming quality in real-time. The tool promises to reduce buffering and improve the viewing experience for millions of users.",
    "url": "#",
    "source": "Wired",
    "date": "September 22, 2022",
    "category": "Tools"
  }
];
