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
    "title": "AI Sets New Record in Protein Folding Predictions",
    "description": "Artificial intelligence has made a historic breakthrough in the field of biology by predicting the complex structure of proteins. The breakthrough has the potential to accelerate research in diseases, drug discovery, and more.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "December 01, 2021",
    "category": "Research"
  },
  {
    "title": "AI Ethics Framework: A New Norm in Tech Companies",
    "description": "More tech companies are implementing AI ethics frameworks to ensure the responsible use of artificial intelligence. This new norm aims to address issues such as bias, privacy, and transparency.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 01, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Revolutionizes the Retail Industry",
    "description": "The retail sector is experiencing a digital transformation with the adoption of AI technologies. AI is being used for inventory management, customer service, and personalized marketing.",
    "url": "#",
    "source": "Forbes",
    "date": "December 01, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-Powered Drones: A Game-Changer for Delivery Services",
    "description": "The use of AI in drones is revolutionizing delivery services, providing faster and more efficient options. Companies are now investing in drone technology for last-mile deliveries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 01, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Tools to Streamline Software Development",
    "description": "New AI-powered tools are making it easier for developers to write, review, and maintain code. These tools are streamlining the software development process by automating code generation, bug detection, and more.",
    "url": "#",
    "source": "Wired",
    "date": "December 01, 2021",
    "category": "Tools"
  }
];
