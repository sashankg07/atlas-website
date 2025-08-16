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
    "title": "Ground-breaking AI Tool Predicts Climate Change Impact",
    "description": "Researchers have developed a new AI tool that can predict the impact of climate change with unprecedented accuracy. Using machine learning algorithms, the tool can analyze vast amounts of environmental data to predict future changes.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 13, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Introduces AI-Powered Healthcare Solutions",
    "description": "Leading tech company has unveiled a new suite of AI-powered healthcare solutions that can analyze patient data and provide predictive analysis, drastically improving patient care and efficiency in health systems.",
    "url": "#",
    "source": "Wired",
    "date": "October 13, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Bags $200M in Series C Funding",
    "description": "An AI startup specializing in autonomous vehicles has managed to secure $200 million in its latest funding round. The funds will be used to accelerate the development and deployment of their self-driving technology.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 13, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics of AI Use in Surveillance Debated in Congress",
    "description": "The use of AI in surveillance technologies is under scrutiny, with lawmakers debating the ethical implications. Discussions focus on balancing national security needs with individual privacy rights.",
    "url": "#",
    "source": "The Washington Post",
    "date": "October 13, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Software Development",
    "description": "A new tool uses AI to help software developers identify and fix bugs in their code more quickly and efficiently. The tool is expected to drastically reduce the time spent on debugging, improving productivity.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 13, 2021",
    "category": "Tools"
  }
];
