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
    "title": "AI Revolutionizes Medical Diagnostics",
    "description": "Groundbreaking AI technology has begun to reshape the field of medical diagnostics. The technology is now capable of diagnosing diseases with a higher accuracy rate than human doctors.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 04, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Ethics Debate: Balancing Innovation and Public Interest",
    "description": "As AI technology continues to advance rapidly, debates have emerged about its ethical implications. Experts call for balanced regulations to foster innovation while protecting public interest.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 04, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Takes Centre Stage in Climate Change Mitigation",
    "description": "AI has become a crucial tool in the fight against climate change. New research shows how machine learning can help predict and mitigate the impacts of climate change effectively.",
    "url": "#",
    "source": "BBC News",
    "date": "October 04, 2022",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Major Tech Firm Acquires AI Startup in Multi-Million Dollar Deal",
    "description": "In a bid to enhance its AI capabilities, a leading tech firm has acquired a promising AI startup. The deal marks a significant trend in the business world's growing investment in AI.",
    "url": "#",
    "source": "Forbes",
    "date": "October 04, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tool Streamlines Software Development",
    "description": "A new AI tool promises to revolutionize software development by automating complex coding tasks. The tool has the potential to significantly speed up development and reduce errors.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 04, 2022",
    "category": "Tools"
  }
];
