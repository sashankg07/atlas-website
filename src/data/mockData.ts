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
    "title": "AI Breakthrough: Achieving Superhuman Performance in Dota 2",
    "description": "A cutting-edge AI developed by OpenAI, named OpenAI Five, has achieved superhuman performance in the complex online video game, Dota 2. This is a significant step forward in the field of reinforcement learning and multi-agent systems.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "November 07, 2022",
    "category": "Research"
  },
  {
    "title": "Google's New Quantum Computing Experiment Could Revolutionize AI",
    "description": "Google's Quantum AI team has developed a time-crystal on a quantum computer. The breakthrough could revolutionize AI algorithms and computing power, opening new avenues for machine learning.",
    "url": "#",
    "source": "The Verge",
    "date": "November 07, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM Unveils Next-Gen AI Software That Mimics the Human Brain",
    "description": "IBM has unveiled a new AI software that closely mimics the learning process of the human brain. This software could enable AI to learn more efficiently and effectively, leading to more sophisticated applications.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 07, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Concerns Raised Over Biased AI in Job Recruitment",
    "description": "There is growing concern that AI used in job recruitment can perpetuate bias, despite its potential to streamline the hiring process. Experts call for more transparency and regulation in AI recruitment tools.",
    "url": "#",
    "source": "BBC News",
    "date": "November 07, 2022",
    "category": "Ethics"
  },
  {
    "title": "Adobe Introduces AI-Powered Tools to Streamline Creative Process",
    "description": "Adobe has rolled out several AI-powered tools aimed at streamlining the creative process. These tools leverage machine learning to automate tedious tasks, allowing creatives to focus on ideation and design.",
    "url": "#",
    "source": "Adobe Newsroom",
    "date": "November 07, 2022",
    "category": "Tools"
  }
];
