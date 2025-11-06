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
    "title": "Groundbreaking AI Algorithm Predicts Climate Change",
    "description": "A team of scientists have used artificial intelligence to accurately predict climate changes. This new AI model could revolutionize our understanding of global warming.",
    "url": "#",
    "source": "Nature Communications",
    "date": "October 20, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizing the Healthcare Industry",
    "description": "Artificial intelligence is being harnessed to improve patient care and research in the healthcare industry. Innovations include AI-powered diagnostic tools and predictive care solutions.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 20, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI Startups",
    "description": "A leading tech company has invested billions in AI startups, signaling a significant push towards developing more advanced AI capabilities.",
    "url": "#",
    "source": "Forbes",
    "date": "October 20, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: The New Frontier",
    "description": "AI ethics is becoming a key concern as AI development accelerates. Experts are calling for more robust regulatory frameworks to ensure ethical AI practices.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 20, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A new AI tool is transforming data analysis, offering unprecedented accuracy and efficiency. The tool uses machine learning to analyze complex datasets in seconds.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 20, 2021",
    "category": "Tools"
  }
];
