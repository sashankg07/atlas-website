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
    "description": "Researchers have developed an AI model that can predict the likelihood of cancer earlier than traditional methods. This breakthrough could drastically change the future of healthcare, making it more proactive than reactive.",
    "url": "#",
    "source": "The AI Journal",
    "date": "September 21, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Launches New AI-powered Virtual Assistant",
    "description": "The newest virtual assistant on the market takes voice recognition to the next level by using AI to learn and adapt to each user's unique needs, promising a more personalized experience than ever before.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 21, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100M in Series B Funding",
    "description": "The AI start-up, known for its innovative use of machine learning in logistics, has successfully raised $100 million in its latest funding round, signifying investor confidence in the AI sector.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 21, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI Facial Recognition",
    "description": "The use of AI in facial recognition technology has stoked controversy due to its potential misuse in surveillance and privacy infringement, sparking important discussions on the ethical implications of AI.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 21, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A newly released AI tool aims to simplify complex data analysis, making it more accessible to businesses of all sizes. Its intuitive interface and powerful AI engine are set to revolutionize the way companies understand their data.",
    "url": "#",
    "source": "Data Science Weekly",
    "date": "September 21, 2022",
    "category": "Tools"
  }
];
