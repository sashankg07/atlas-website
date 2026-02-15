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
    "title": "AI Breaks New Ground in Predicting Climate Change",
    "description": "Artificial Intelligence is transforming the way scientists predict climate change, offering more accurate models. This breakthrough could be pivotal in understanding and combating global warming.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 26, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Drones: The Future of Delivery Service",
    "description": "AI technology is revolutionizing the delivery service industry, with drones now capable of delivering packages autonomously. This advancement promises to increase efficiency and reduce delivery times.",
    "url": "#",
    "source": "The Verge",
    "date": "October 26, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100 Million in Series B Funding",
    "description": "AI startup, DeepMind, has raised $100 million in its latest funding round, showcasing the increasing interest and investment in AI technologies.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 26, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise Over AI's Role in Hiring",
    "description": "Ethical concerns are escalating as AI becomes more prevalent in hiring processes. Critics argue that automated systems could perpetuate bias and discriminate against certain applicants.",
    "url": "#",
    "source": "BBC News",
    "date": "October 26, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google's New AI Tool Promises to Streamline Coding",
    "description": "Google has launched a new AI tool, Codex, which aims to make programming more accessible by providing suggestions to developers as they write code.",
    "url": "#",
    "source": "Wired",
    "date": "October 26, 2021",
    "category": "Tools"
  }
];
