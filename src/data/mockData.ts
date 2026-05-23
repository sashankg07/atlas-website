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
    "title": "AI Revolutionizes Cancer Detection: New Breakthrough in Medical Research",
    "description": "A revolutionary AI model has been developed that reportedly increases the accuracy and speed of cancer diagnoses. This breakthrough could potentially save millions of lives in the future.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 15, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Embrace AI: A New Era in Business Intelligence",
    "description": "Major tech companies are increasingly integrating AI into their business intelligence strategies. This trend is transforming how businesses operate and make decisions.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 15, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines: Navigating the Future of AI Development",
    "description": "Renowned AI experts and ethicists have unveiled a set of guidelines designed to ensure ethical considerations in AI development. The guidelines aim to address concerns about bias and fairness in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 15, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tools Transforming Graphic Design: Creativity Meets Technology",
    "description": "A new wave of AI tools is reshaping the field of graphic design. These tools enable designers to automate mundane tasks, freeing them to focus on creativity and innovation.",
    "url": "#",
    "source": "Forbes",
    "date": "November 15, 2021",
    "category": "Tools"
  },
  {
    "title": "Groundbreaking AI Chip Unveiled: Changing the Landscape of AI Technology",
    "description": "A new AI chip has been released that promises to drastically improve the efficiency of AI processing. This development represents a significant leap forward in AI hardware technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 15, 2021",
    "category": "Technology"
  }
];
