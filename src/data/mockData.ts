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
    "title": "Revolutionizing Healthcare: AI Detects Heart Disease in Record Time",
    "description": "A groundbreaking AI model has been developed that can detect early signs of heart disease faster than ever before. The model promises to revolutionize preventative healthcare, potentially saving millions of lives annually.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI-powered Robots to Boost E-commerce Efficiency",
    "description": "A leading tech company has launched a fleet of AI-powered robots designed to streamline warehouse operations. The robots are expected to significantly increase efficiency in the e-commerce sector.",
    "url": "#",
    "source": "The Financial Times",
    "date": "September 30, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethical Guidelines: A Step Towards Responsible AI",
    "description": "In a bid to encourage responsible AI development, a prestigious tech association has released a comprehensive set of ethical guidelines. The guide aims to prevent harmful AI practices and promote fairness and transparency.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Revolution in Gaming: AI Creates Realistic Virtual Worlds",
    "description": "In a major breakthrough, a tech giant has developed an AI tool that can create hyper-realistic virtual worlds for gaming. This leap in technology could usher in a new era of immersive gaming experiences.",
    "url": "#",
    "source": "BBC",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Tool to Predict Climate Change Effects",
    "description": "Scientists have unveiled a new AI tool capable of predicting the effects of climate change with unprecedented accuracy. The tool will help policymakers make informed decisions to combat the climate crisis.",
    "url": "#",
    "source": "The Washington Post",
    "date": "September 30, 2022",
    "category": "Research"
  }
];
