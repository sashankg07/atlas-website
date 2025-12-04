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
    "title": "Groundbreaking AI Model Mimics the Human Brain",
    "description": "In a significant advancement of artificial intelligence, researchers have created a model that mimics the human brain's processing power. This model opens up a new frontier in understanding human cognition and consciousness.",
    "url": "#",
    "source": "AI Today",
    "date": "September 28, 2021",
    "category": "Research"
  },
  {
    "title": "Artificial Intelligence: The Game Changer in Climate Change",
    "description": "AI is being hailed as a powerful tool in the battle against climate change. From optimizing energy use to predicting weather patterns, AI is revolutionizing the way we understand and respond to environmental issues.",
    "url": "#",
    "source": "Tech World News",
    "date": "September 28, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $200 Million in Series C Funding",
    "description": "In a clear sign of AI's increasing value in the business world, an AI startup has raised a staggering $200 million in its latest funding round. The funds will be used to expand the company's AI solutions across various industries.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 28, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Innovation with Responsibility",
    "description": "As AI technology advances, ethical considerations become increasingly important. Experts are calling for a balanced approach that encourages innovation while also addressing potential ethical issues.",
    "url": "#",
    "source": "The AI Journal",
    "date": "September 28, 2021",
    "category": "Ethics"
  },
  {
    "title": "Latest AI Tools Transforms Data Analysis",
    "description": "New AI tools are transforming the field of data analysis, making it possible to process large volumes of data more quickly and accurately than ever before. This is set to revolutionize many industries, from healthcare to finance.",
    "url": "#",
    "source": "Data Science Weekly",
    "date": "September 28, 2021",
    "category": "Tools"
  }
];
