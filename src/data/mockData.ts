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
    "title": "AI Revolutionizing Healthcare with Early Disease Detection",
    "description": "Researchers have developed a new AI model capable of predicting the onset of diseases even before symptoms appear. This breakthrough could revolutionize preventive healthcare strategies.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 24, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Heavily in AI for Climate Change Solutions",
    "description": "Leading tech companies are ramping up investments in AI to combat climate change. Innovative machine learning models are being developed to predict and mitigate the effects of global warming.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 24, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: The Debate over Facial Recognition Technology",
    "description": "Amid growing public concern, the ethics of using AI in facial recognition technology is under intense scrutiny. Critics argue it poses significant privacy and civil liberties risks.",
    "url": "#",
    "source": "BBC News",
    "date": "September 24, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Transforms Text to Life-like Speech",
    "description": "A new AI tool has been developed that can transform any text into remarkably life-like speech. This development is set to revolutionize various industries from audiobooks to customer service.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 24, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Breakthrough: Machines that Learn Like Humans",
    "description": "In a major breakthrough, researchers have developed an AI model that learns in a manner similar to human learning. This could pave the way for more sophisticated and intuitive AI systems.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 24, 2021",
    "category": "Technology"
  }
];
