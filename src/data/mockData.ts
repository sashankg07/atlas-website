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
    "title": "AI Breakthrough in Cancer Detection",
    "description": "Researchers have developed an AI model capable of detecting early-stage cancer with unprecedented accuracy. This breakthrough may revolutionize future medical diagnostics.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 21, 2022",
    "category": "Research"
  },
  {
    "title": "AI Driven Smart Farming: The Future of Agriculture",
    "description": "A new wave of AI technology is transforming farming, with smart AI systems helping to increase crop yields and reduce environmental impact.",
    "url": "#",
    "source": "Forbes",
    "date": "September 21, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant's Investment in AI Startups Hits Record High",
    "description": "Tech giants are investing heavily in AI startups, signaling a strong belief in the potential of artificial intelligence to shape the future of business.",
    "url": "#",
    "source": "Bloomberg",
    "date": "September 21, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Over AI's Role in Hiring",
    "description": "There is growing debate over the use of AI in hiring processes. Critics argue these systems may perpetuate bias, pointing to the need for more regulation.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 21, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Transforming the World of Graphic Design",
    "description": "New AI tools are revolutionizing graphic design, automating time-consuming tasks and unlocking new creative possibilities.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 21, 2022",
    "category": "Tools"
  }
];
