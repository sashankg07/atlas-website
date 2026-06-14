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
    "title": "AI Revolutionizes Drug Discovery with Speed and Precision",
    "description": "Artificial Intelligence is accelerating the pace of drug discovery, making it faster, cheaper, and more accurate. This revolution is predicted to drastically reshape the pharmaceutical industry.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 23, 2021",
    "category": "Research"
  },
  {
    "title": "AI Takes Centre Stage in Climate Change Battle",
    "description": "Artificial Intelligence is becoming a key player in the fight against climate change. By predicting and analyzing trends, AI is helping us better understand and tackle the challenges posed by global warming.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 23, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giants Invest Heavily in AI for Business Transformation",
    "description": "Major tech companies are betting big on AI, with substantial investments aimed at harnessing the power of artificial intelligence to drive business growth and transformation.",
    "url": "#",
    "source": "Forbes",
    "date": "November 23, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Come into Spotlight Amidst Increased Adoption",
    "description": "As AI becomes more prevalent in our daily lives, the debate surrounding the ethical implications of its use is heating up, raising important questions about privacy, bias, and governance.",
    "url": "#",
    "source": "The Washington Post",
    "date": "November 23, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transforming the Landscape of Data Analysis",
    "description": "The recent launch of several AI tools promises to revolutionize data analysis, offering businesses unprecedented insights and decision-making capabilities.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "November 23, 2021",
    "category": "Tools"
  }
];
