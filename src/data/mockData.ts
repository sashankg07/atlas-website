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
    "title": "AI Breakthrough: Machines Now Able to Learn Without Human Supervision",
    "description": "A recent development in artificial intelligence research has allowed machines to learn autonomously, without the need for human supervision. This breakthrough could lead to unprecedented advancements in the field.",
    "url": "#",
    "source": "The Verge",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Tool Predicts Climate Change Effects with Unprecedented Accuracy",
    "description": "A new artificial intelligence tool has been developed that predicts the effects of climate change with greater accuracy than ever before. This groundbreaking technology could have significant implications for environmental science.",
    "url": "#",
    "source": "New Scientist",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Google Invests Billions in AI Startups",
    "description": "Google is increasing its investments in artificial intelligence startups in a bid to stay ahead in the rapidly evolving field. The tech giant sees AI as the future of technology and is committed to leading the way.",
    "url": "#",
    "source": "Bloomberg",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI Continue to Grow",
    "description": "As artificial intelligence continues to advance, so do concerns about its ethical implications. Experts call for more regulation and oversight to ensure that AI is developed and used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Toolkit Promises to Make Machine Learning More Accessible",
    "description": "A new AI toolkit has been launched that promises to make machine learning more accessible to non-specialists. The toolkit offers a range of easy-to-use tools and resources for those looking to harness the power of AI.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
