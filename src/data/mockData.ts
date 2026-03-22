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
    "title": "AI Breaks New Ground in Predicting Climate Change Impact",
    "description": "A team of scientists has developed an AI model capable of providing highly accurate predictions of climate change impact. This breakthrough could be instrumental in formulating global environmental policies.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "September 21, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes Cancer Diagnosis with Unprecedented Accuracy",
    "description": "In a ground-breaking development, AI has demonstrated the ability to diagnose certain types of cancer with an accuracy surpassing that of human doctors. This could revolutionize the field of medical diagnosis.",
    "url": "#",
    "source": "The Lancet",
    "date": "September 21, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI for Business Automation",
    "description": "A leading tech corporation has announced a multi-billion dollar investment in AI technologies aimed at business automation. This move is expected to significantly disrupt the business landscape.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 21, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise in AI Facial Recognition Technology",
    "description": "The increasing use of AI in facial recognition technologies has raised serious ethical concerns. Critics argue for increased regulation to protect privacy and prevent misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 21, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis, Unveils Trends at Light Speed",
    "description": "An innovative AI tool has been unveiled that can streamline data analysis and detect trends faster than ever before. This has vast implications for a multitude of sectors, from finance to healthcare.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 21, 2021",
    "category": "Tools"
  }
];
