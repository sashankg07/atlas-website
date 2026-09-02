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
    "title": "AI Revolutionizes Early Cancer Detection",
    "description": "A recent breakthrough in AI technology has led to the development of an algorithm capable of detecting early-stage cancers with unprecedented accuracy. This could potentially revolutionize the medical field, saving countless lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 22, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Acquires AI Startup for Billion Dollar Deal",
    "description": "In a bold move, a leading tech company has acquired an AI startup specializing in machine learning. The billion-dollar deal is set to escalate the tech giant's capabilities in AI development.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 22, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tool Streamlines Software Development",
    "description": "A groundbreaking AI tool has been developed to predict and rectify coding errors in software development. This promising tool could significantly reduce time and costs associated with programming.",
    "url": "#",
    "source": "Wired",
    "date": "September 22, 2022",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI Facial Recognition",
    "description": "As AI facial recognition technology advances, concerns about privacy and misuse are increasingly coming to the fore. Experts call for regulations to prevent potential abuses.",
    "url": "#",
    "source": "BBC News",
    "date": "September 22, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Predicts Climate Change Patterns with Unseen Precision",
    "description": "Scientists have designed an AI model that predicts the impact of climate change with remarkable accuracy. This technology could be instrumental in helping the world prepare for and combat climate change.",
    "url": "#",
    "source": "Scientific American",
    "date": "September 22, 2022",
    "category": "Technology"
  }
];
