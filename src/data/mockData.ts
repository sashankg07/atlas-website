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
    "title": "Revolutionizing Medicine: AI Predicts Heart Disease with Unprecedented Accuracy",
    "description": "A breakthrough study reveals that AI can now predict heart disease with greater accuracy than ever before. This advancement promises to revolutionize the field of cardiology, potentially saving countless lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI Powering Sustainable Energy: Google's New DeepMind Project",
    "description": "Google's AI wing, DeepMind, has announced a new project aimed at using artificial intelligence to optimize energy consumption. The project aims to make significant strides in the fight against climate change.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM Doubles Down on AI Investments, Signaling a Shift in Business Strategy",
    "description": "IBM has announced a significant increase in its investment in AI technologies. This move signifies a strategic shift for the company, highlighting the growing importance of AI in the business world.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: Balancing Innovation with Responsibility",
    "description": "A growing debate around the ethical implications of AI development raises important questions about responsibility and regulation. More than ever, innovators are being called upon to consider the societal impacts of their creations.",
    "url": "#",
    "source": "The Economist",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Text Data into Valuable Insights",
    "description": "A newly developed AI tool promises to help businesses transform their text data into actionable insights. The tool uses advanced natural language processing to analyze large volumes of text, revealing patterns and trends.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
