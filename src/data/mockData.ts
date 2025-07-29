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
    "title": "Groundbreaking AI System Detects Disease Outbreaks Before They Happen",
    "description": "Scientists have developed an AI system that can predict disease outbreaks weeks before they occur. The novel technology could potentially save millions of lives by allowing for early intervention and treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Investing Heavily in AI for Cloud Computing",
    "description": "Major tech companies, including Google and Amazon, are significantly increasing their investments in AI technology to enhance their cloud computing services. These enhancements could revolutionize the way businesses store and manage data.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Business"
  },
  {
    "title": "AI Tool Revolutionizes Wildlife Conservation Efforts",
    "description": "A new AI tool has been developed to analyze camera trap images, making it significantly easier for wildlife conservationists to monitor and protect endangered species. The tool can identify species with over 90% accuracy.",
    "url": "#",
    "source": "National Geographic",
    "date": "September 30, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Growing Concern",
    "description": "As AI technology continues to advance, ethical concerns regarding privacy, bias, and decision-making are rising to the forefront of discussions. Experts argue that regulations need to keep pace with technological advancements.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI-Powered Tool Streamlines Software Development",
    "description": "A new AI-powered tool is changing the game in software development by predicting potential bugs before they occur. The tool aims to make the development process more efficient and reduce overall costs.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
