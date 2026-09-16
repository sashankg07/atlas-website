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
    "title": "AI Outperforms Humans in Designing Microchips",
    "description": "Researchers from Google have developed an AI that can design computer microchips faster and more efficiently than human engineers. The AI system has already been used to create the next generation of Google’s artificial intelligence processors.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 26, 2021",
    "category": "Research"
  },
  {
    "title": "AI Predicts Climate Change Impact on Ocean Life",
    "description": "Scientists use AI to predict how climate change will affect life in the world's oceans. The technology will help in developing strategies for sustainable fishing and conservation efforts.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 26, 2021",
    "category": "Technology"
  },
  {
    "title": "Microsoft Invests in AI to Improve Healthcare Accessibility",
    "description": "Microsoft is investing heavily in AI technologies to provide accessible and affordable healthcare services. The focus is on using AI to predict, diagnose, and treat diseases more effectively.",
    "url": "#",
    "source": "Forbes",
    "date": "October 26, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Concerns Spark Global Debate",
    "description": "As AI continues to evolve, ethical concerns are sparking global debates. Discussions focus on privacy, bias, decision transparency, and the impact of AI on jobs.",
    "url": "#",
    "source": "The Washington Post",
    "date": "October 26, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transforming Data Analysis",
    "description": "New AI-powered tools are transforming data analysis, making it easier, faster, and more accurate. These tools enable businesses to make more informed decisions and predictions.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 26, 2021",
    "category": "Tools"
  }
];
