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
    "title": "AI Breakthrough: Machine Learning Models Predict Climate Changes",
    "description": "Scientists have developed new machine learning models that can accurately predict climate changes and extreme weather conditions. This AI-driven approach could revolutionize climate science.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Healthcare: Revolutionizing Diagnostics and Patient Care",
    "description": "Artificial Intelligence is transforming healthcare by improving diagnostics and patient care. Its applications range from early disease detection to personalized treatment plans.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "IBM Launches AI-Powered Automation Software for Businesses",
    "description": "IBM has launched an AI-powered automation software to streamline business operations. This innovation aims to increase efficiency and reduce costs in the corporate world.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Concerns Over Biased Algorithms Continue to Grow",
    "description": "As AI algorithms become increasingly integrated into society, concerns over algorithmic bias and discrimination are growing. Experts are calling for regulation and transparency to mitigate these issues.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google's New AI Tools Enable Developers to Build Smarter Apps",
    "description": "Google has launched a suite of AI tools to help developers build smarter and more intuitive applications. This will empower developers to create apps that can understand and interact with users in new ways.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
