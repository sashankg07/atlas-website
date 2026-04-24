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
    "title": "AI Breaks New Ground in Neurological Disorder Treatment",
    "description": "Researchers have developed a novel AI model that shows incredible promise in diagnosing and treating various neurological disorders. This breakthrough could redefine the way we approach mental health.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 24, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Next-Gen AI-Powered Virtual Assistant",
    "description": "A leading tech company has introduced its latest AI-powered virtual assistant which boasts advanced understanding of human speech, setting a new standard in the tech industry.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 24, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100M in Series B Funding",
    "description": "An AI start-up specializing in autonomous vehicles has secured $100 million in Series B funding, signaling investor confidence in AI's role in revolutionizing transportation.",
    "url": "#",
    "source": "Forbes",
    "date": "November 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Growing Concern",
    "description": "As AI continues to evolve, so does the concern about its ethical implications. Experts are calling for stricter regulations to manage these emerging technologies.",
    "url": "#",
    "source": "Wired",
    "date": "November 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact with Unprecedented Accuracy",
    "description": "A groundbreaking AI tool has been developed that can predict the impacts of climate change with greater accuracy than ever before, offering valuable insights for future planning.",
    "url": "#",
    "source": "Nature",
    "date": "November 24, 2022",
    "category": "Tools"
  }
];
