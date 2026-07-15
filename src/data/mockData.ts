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
    "title": "AI Breaks New Ground in Diagnosing Alzheimer's Early",
    "description": "Recent advancements in AI have resulted in the development of an algorithm capable of diagnosing Alzheimer's disease up to 10 years before symptoms appear. This breakthrough could revolutionize early detection and treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 12, 2021",
    "category": "Research"
  },
  {
    "title": "New AI-Powered Cybersecurity System Unveiled",
    "description": "Tech giants have released a state-of-the-art cybersecurity system powered by AI. It can identify and neutralize threats in real-time, promising to enhance security in an increasingly digital world.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 12, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Set to Transform the Retail Industry",
    "description": "From inventory management to personalized marketing, AI is poised to revolutionize the retail sector. Experts predict a significant impact on revenue and customer experience in the near future.",
    "url": "#",
    "source": "Forbes",
    "date": "November 12, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines Issued for Ethical AI Development",
    "description": "In response to growing concerns about AI and privacy, a leading tech ethics body has released new guidelines for ethical AI development. This move is seen as crucial in maintaining public trust in the technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 12, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Unveils New AI Language Model",
    "description": "OpenAI has revealed a new AI language model that promises to revolutionize how AI understands and generates human language. The tool is expected to have a significant impact across various industries.",
    "url": "#",
    "source": "Wired",
    "date": "November 12, 2021",
    "category": "Tools"
  }
];
