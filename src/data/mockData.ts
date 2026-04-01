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
    "title": "AI Breaks New Ground in Cancer Diagnosis",
    "description": "Recent advancements in AI have enabled early and accurate detection of cancerous cells. The technology promises a revolution in healthcare, making cancer diagnosis faster and more reliable.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "Autonomous Vehicles: The Future of Transportation Driven by AI",
    "description": "Artificial intelligence is propelling the autonomous vehicles industry forward, promising safer and more efficient transportation. Major automobile manufacturers have begun integrating AI technology into their latest models.",
    "url": "#",
    "source": "The Verge",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "How AI Is Transforming the Business Landscape",
    "description": "From automating routine tasks to predicting market trends, AI is reshaping the way businesses operate. The technology is expected to generate trillions in economic value over the next decade.",
    "url": "#",
    "source": "Bloomberg",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Challenges in AI: A Rising Concern",
    "description": "As AI increasingly permeates our lives, concerns over its ethical implications are growing. Experts call for clear regulations and transparency to ensure the technology is used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Streamline Data Analysis",
    "description": "The advent of AI-powered tools has made data analysis more accessible and efficient. These tools are helping businesses make data-driven decisions more quickly and accurately.",
    "url": "#",
    "source": "Wired",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
