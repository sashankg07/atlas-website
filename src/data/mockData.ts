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
    "title": "AI Breakthrough: Machine Learning Models Predict Disease Outcomes",
    "description": "Scientists have developed new machine learning models that can predict disease outcomes with unprecedented accuracy. The breakthrough is expected to revolutionize healthcare, enabling early diagnosis and personalized treatment plans.",
    "url": "#",
    "source": "Science Daily",
    "date": "November 25, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Heavily in AI to Shape the Future of Work",
    "description": "Leading tech companies like Google and Microsoft are investing billions in AI to reshape the future of work. Their AI-powered tools aim to improve productivity, facilitate remote work, and drive innovation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 25, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released to Promote Responsible Use",
    "description": "In response to growing concerns, a global consortium of AI researchers has released new ethics guidelines. These aim to promote responsible use of AI, with a focus on fairness, transparency, and privacy.",
    "url": "#",
    "source": "The Verge",
    "date": "November 25, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Innovations: A New Wave of AI-powered Chatbots",
    "description": "The latest AI technology has spurred the development of a new generation of chatbots. These AI-powered bots are more responsive, intuitive, and capable of complex interactions, redefining customer service standards.",
    "url": "#",
    "source": "Wired",
    "date": "November 25, 2021",
    "category": "Technology"
  },
  {
    "title": "OpenAI Unveils New AI Tool for Natural Language Processing",
    "description": "OpenAI has unveiled a new AI tool that advances natural language processing to new heights. The tool, named GPT-4, promises to revolutionize tasks from translation to content generation.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "November 25, 2021",
    "category": "Tools"
  }
];
