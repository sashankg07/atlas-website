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
    "title": "Revolutionary AI Algorithm Predicts Climate Change Impact",
    "description": "A cutting-edge artificial intelligence model has been developed to predict the impact of climate change more accurately than ever before. The AI model can analyze complex climate patterns and predict future changes with unprecedented precision.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 03, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest in AI for Healthcare",
    "description": "Major technology companies are investing heavily in AI innovations for healthcare. The goal is to use AI to improve diagnostic accuracy, streamline patient care, and optimize treatment plans.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 03, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released",
    "description": "A group of leading AI researchers have released a new set of ethical guidelines for AI development. The guidelines aim to ensure AI is used responsibly and does not contribute to societal harm.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 03, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Transforms the Gaming Industry",
    "description": "Artificial intelligence is transforming the gaming industry by creating more immersive and realistic experiences. AI algorithms are used to generate realistic graphics, enhance game mechanics, and create adaptive difficulty levels.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 03, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A new AI tool has been developed that streamlines data analysis, making it more accessible to non-experts. The tool uses machine learning algorithms to analyze complex datasets and provide insightful results.",
    "url": "#",
    "source": "Nature",
    "date": "October 03, 2021",
    "category": "Tools"
  }
];
