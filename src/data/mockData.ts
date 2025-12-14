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
    "title": "AI Breaks New Ground in Cancer Detection",
    "description": "Researchers have unveiled an AI model that can identify cancerous tissues faster than human experts. The breakthrough could revolutionize the field of medical diagnostics.",
    "url": "#",
    "source": "Medical AI Today",
    "date": "November 01, 2021",
    "category": "Research"
  },
  {
    "title": "Autonomous Vehicle Technology Leaps Forward with Latest AI Innovations",
    "description": "In a groundbreaking development, a tech firm has unveiled an AI system that significantly improves the decision-making abilities of self-driving cars. The technology promises to bolster safety in autonomous vehicles.",
    "url": "#",
    "source": "Tech Innovations Daily",
    "date": "November 01, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Lands Major Investment for Next-Gen Predictive Analytics",
    "description": "A rising AI startup has secured a significant investment to further develop its cutting-edge predictive analytics platform. The tool uses AI to generate real-time forecasts for businesses.",
    "url": "#",
    "source": "AI Business News",
    "date": "November 01, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines Proposed for Ethical AI Development",
    "description": "A renowned ethics committee has proposed a new set of guidelines for the ethical development of AI. The move aims to address growing concerns about AI's societal impact.",
    "url": "#",
    "source": "AI Ethics Weekly",
    "date": "November 01, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI-Powered Tool Transforms Data Processing",
    "description": "A leading tech company has launched a new AI tool that streamlines data processing. The tool automates tasks, allowing businesses to focus on insights and decision-making.",
    "url": "#",
    "source": "AI Tools Review",
    "date": "November 01, 2021",
    "category": "Tools"
  }
];
