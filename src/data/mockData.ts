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
    "title": "New AI Model Predicts Climate Change Impact More Accurately",
    "description": "Researchers have developed an innovative AI model that predicts the impacts of climate change with unprecedented accuracy. The model outperforms traditional methods, providing more precise predictions and opening new avenues for climate change mitigation.",
    "url": "#",
    "source": "Nature",
    "date": "September 27, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Cybersecurity System Could Revolutionize Online Safety",
    "description": "A groundbreaking AI-powered cybersecurity system has been unveiled, boasting an ability to detect and neutralize threats in real-time. This advancement could significantly enhance online safety and data protection.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 27, 2021",
    "category": "Technology"
  },
  {
    "title": "Big Tech Investing Heavily in AI to Streamline Operations",
    "description": "Major tech companies are investing billions in AI to optimize their operations and deliver enhanced services. This trend indicates a widespread recognition of AI's transformative potential in the business sector.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 27, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Under Spotlight After Controversial Facial Recognition Decision",
    "description": "The ethics of AI have been called into question following a controversial decision involving the use of facial recognition technology. The incident has sparked a renewed debate over the need for regulation in the field of AI.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 27, 2021",
    "category": "Ethics"
  },
  {
    "title": "Revolutionary AI Tools Transforming Video Editing",
    "description": "New AI tools are revolutionizing the field of video editing, making it more accessible and efficient. These tools leverage machine learning to automate complex tasks, significantly reducing editing time and enabling creators to focus more on the creative process.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 27, 2021",
    "category": "Tools"
  }
];
