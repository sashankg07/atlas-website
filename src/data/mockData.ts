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
    "title": "AI Breakthrough: New Model Outperforms Humans in Language Understanding",
    "description": "A team of researchers has developed an AI model that surpasses human performance in understanding and interpreting complex language tasks. This groundbreaking advancement could revolutionize the way we interact with computers.",
    "url": "#",
    "source": "The AI Times",
    "date": "December 06, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils AI Software to Predict Market Trends",
    "description": "A leading tech company has unveiled a state-of-the-art AI software capable of predicting market trends with superior accuracy. This tool could transform decision-making in the business world.",
    "url": "#",
    "source": "The AI Review",
    "date": "December 06, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released to Safeguard User Privacy",
    "description": "In response to growing concerns about user privacy and data security, a global AI ethics committee has released new guidelines. These rules aim to ensure that AI technology respects user rights and promotes transparency.",
    "url": "#",
    "source": "The AI Post",
    "date": "December 06, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Helping to Combat Climate Change: Recent Developments",
    "description": "Researchers are leveraging AI to combat climate change, using advanced algorithms to predict environmental patterns and develop sustainable solutions. This technology could be key in the fight against global warming.",
    "url": "#",
    "source": "The AI Journal",
    "date": "December 06, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Tool Streamlines Software Development",
    "description": "A new AI-powered tool promises to streamline software development by automating code generation. This tool could significantly expedite and simplify the development process for programmers.",
    "url": "#",
    "source": "The AI Tech News",
    "date": "December 06, 2021",
    "category": "Tools"
  }
];
