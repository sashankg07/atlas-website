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
    "title": "AI Breakthrough: New Machine Learning Model Predicts Climate Trends",
    "description": "Scientists have developed an AI model capable of predicting climate patterns with unprecedented accuracy. This technology may revolutionize our understanding and response to climate change.",
    "url": "#",
    "source": "Nature",
    "date": "November 16, 2021",
    "category": "Research"
  },
  {
    "title": "AI Now Able to Write Code: The Dawn of the AI Developer",
    "description": "In a groundbreaking development, AI systems can now write functional code, potentially transforming the field of software development.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 16, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M to Improve Autonomous Vehicles",
    "description": "An AI startup focusing on autonomous vehicle technology has recently raised $100M in Series B funding, highlighting the accelerating investment in AI technologies.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "November 16, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: Ensuring Fairness in Machine Learning",
    "description": "As AI continues to integrate into society, ethical discussions are on the rise about ensuring fairness and avoiding bias in machine learning models.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 16, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Detects Deepfakes with Unprecedented Accuracy",
    "description": "A newly launched AI tool offers improved detection of deepfakes, offering a potential shield against digital misinformation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 16, 2021",
    "category": "Tools"
  }
];
