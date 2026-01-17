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
    "title": "AI Breakthrough: New Algorithm Teaches Itself",
    "description": "A new AI algorithm developed by researchers has the unique ability to teach itself and improve over time. The development could revolutionize the future of AI learning and problem solving.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "October 25, 2021",
    "category": "Research"
  },
  {
    "title": "AI Startup Raises $100M to Automate Customer Service",
    "description": "An AI startup has raised $100 million in Series C funding. The company aims to use AI to completely automate customer service, transforming the industry.",
    "url": "#",
    "source": "CNBC",
    "date": "October 25, 2021",
    "category": "Business"
  },
  {
    "title": "Data Ethics in AI: A Growing Concern",
    "description": "As AI technology advances, concerns over data ethics are increasing. Experts are calling for more stringent regulations to ensure responsible use of data in AI.",
    "url": "#",
    "source": "The Verge",
    "date": "October 25, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Introducing TensorFlow 3.0: New Features and Improvements",
    "description": "Google's AI framework, TensorFlow, has launched its latest version, TensorFlow 3.0. The new release comes with exciting features and improvements that promise to enhance AI development and machine learning.",
    "url": "#",
    "source": "Google AI Blog",
    "date": "October 25, 2021",
    "category": "Tools"
  },
  {
    "title": "Artificial Intelligence to Revolutionize Healthcare",
    "description": "Researchers are leveraging AI technology to revolutionize healthcare, from early disease detection to personalized treatment plans. These advancements could significantly improve patient care and outcomes.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 25, 2021",
    "category": "Technology"
  }
];
