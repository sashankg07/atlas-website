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
    "title": "AI Breakthrough: Computers Now Understand Context",
    "description": "Researchers have developed a new AI model that can understand the context of a conversation, a significant advancement in natural language processing. This could revolutionize how we interact with AI in our daily lives.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "August 04, 2022",
    "category": "Research"
  },
  {
    "title": "AI Powered Drones Aid in Wildlife Conservation",
    "description": "AI is being used to power drones to monitor and protect wildlife across the globe. These smart drones can identify species, track movements, and alert officials to potential poaching.",
    "url": "#",
    "source": "BBC News",
    "date": "August 04, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Now a Must-Have in Business, Says New Report",
    "description": "According to a recent report, businesses that are failing to invest in AI risk falling behind their competitors. The report suggests that AI is no longer an optional extra, but a necessary tool for success.",
    "url": "#",
    "source": "Forbes",
    "date": "August 04, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Implications of AI in Healthcare",
    "description": "As AI becomes increasingly prevalent in healthcare, experts are calling for more focus on the ethical implications. The technology has potential to greatly improve patient care, but also raises concerns about privacy and consent.",
    "url": "#",
    "source": "The Guardian",
    "date": "August 04, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transform the Field of Design",
    "description": "New AI-powered tools are revolutionizing the field of design, automating tasks that once took hours and offering new ways to visualize and create. However, experts warn that the technology is no substitute for human creativity.",
    "url": "#",
    "source": "Wired",
    "date": "August 04, 2022",
    "category": "Tools"
  }
];
