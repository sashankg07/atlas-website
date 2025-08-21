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
    "description": "A groundbreaking AI model developed by leading scientists accurately predicts climate change patterns. This innovation could help policy-makers make more informed decisions about climate change mitigation.",
    "url": "#",
    "source": "Nature",
    "date": "March 25, 2022",
    "category": "Research"
  },
  {
    "title": "AI Enters the Classroom: New Tool Enhances Online Learning",
    "description": "An innovative AI tool is transforming online education by providing personalized learning experiences. The tool uses machine learning to adapt content to individual student's needs, promising to reshape the future of education.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 25, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $50 Million to Revolutionize Healthcare",
    "description": "AI startup, MedTech, has secured $50 million in funding to further develop AI solutions capable of diagnosing diseases early. This could revolutionize healthcare and save countless lives.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "March 25, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate Ignited: Autonomous Cars in the Spotlight",
    "description": "The debate over AI ethics intensifies as autonomous vehicles become more common. Can AI be programmed to make ethical decisions in critical situations? The question remains unanswered.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 25, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Helps Developers Create More Inclusive Apps",
    "description": "A new AI-powered tool aims to help developers create more inclusive apps by identifying potential biases in their algorithms. The tool promises to promote fairness and inclusivity in the tech industry.",
    "url": "#",
    "source": "Wired",
    "date": "March 25, 2022",
    "category": "Tools"
  }
];
