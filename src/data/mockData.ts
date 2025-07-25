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
    "title": "AI Breaks New Ground in Predicting Alzheimer’s",
    "description": "A recent breakthrough in artificial intelligence has led to the development of an AI model capable of predicting Alzheimer's disease years before clinical diagnosis. This could revolutionize early treatment approaches and patient care.",
    "url": "#",
    "source": "Nature",
    "date": "October 31, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Powered Drones Take Flight for Environmental Monitoring",
    "description": "In a bid to combat climate change, scientists have developed AI-powered drones capable of monitoring environmental changes. These drones can track and analyze data more efficiently than human-led methods.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 31, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giants Investing Heavily in AI for Business Expansion",
    "description": "Several global tech giants are prioritizing investments in artificial intelligence to drive business growth. AI tools like machine learning, data analytics, and predictive modeling are becoming crucial for business strategies.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 31, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise Over AI's Role in Military Applications",
    "description": "As AI technology advances, its application in military and defense operations is raising ethical concerns. Critics stress the need for clear regulations to prevent potential misuse and unintended consequences.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 31, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Revolutionizes Image Recognition",
    "description": "Researchers have developed a new AI tool that significantly enhances image recognition capabilities. This tool has potential applications in various sectors, including healthcare, surveillance, and autonomous vehicles.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 31, 2022",
    "category": "Tools"
  }
];
