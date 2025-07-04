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
    "title": "AI Breaks New Ground in Early Cancer Detection",
    "description": "Researchers have developed a new AI model that can detect early stages of various cancers with higher accuracy than ever before. This AI-powered breakthrough could revolutionize the medical field and potentially save millions of lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 26, 2021",
    "category": "Research"
  },
  {
    "title": "Leading Tech Company Unveils Next-Gen AI Chip",
    "description": "A leading tech firm has just unveiled its latest AI chip, promising to deliver unprecedented computational power and efficiency. This could potentially herald a new era of AI capabilities across multiple industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 26, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Secures $100M in Series B Funding",
    "description": "An innovative AI startup, known for its groundbreaking work in machine learning, has secured a whopping $100M in Series B funding. This signifies investors' growing confidence in the AI industry and its potential.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 26, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI Facial Recognition",
    "description": "As AI-powered facial recognition technology becomes increasingly prevalent, ethical concerns are mounting. Critics argue that without proper regulations, this technology could potentially be misused, infringing on privacy rights.",
    "url": "#",
    "source": "Washington Post",
    "date": "September 26, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Software Development",
    "description": "A new tool leveraging AI has been introduced to streamline software development, significantly reducing coding time while improving code quality. This tool can potentially revolutionize the field of software engineering.",
    "url": "#",
    "source": "Wired",
    "date": "September 26, 2021",
    "category": "Tools"
  }
];
