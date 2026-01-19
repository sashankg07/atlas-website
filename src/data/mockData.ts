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
    "title": "AI Revolutionizes Drug Discovery",
    "description": "Artificial Intelligence is making waves in the pharmaceutical industry by accelerating drug discovery. New AI models can now predict potential drug candidates in mere days, a process that used to take years.",
    "url": "#",
    "source": "The New York Times",
    "date": "July 20, 2021",
    "category": "Research"
  },
  {
    "title": "AI Outperforms Humans in Coding Challenge",
    "description": "In a significant breakthrough, an AI model has outperformed human programmers in a code-writing contest for the first time. This development indicates the growing potential of AI in the software development field.",
    "url": "#",
    "source": "BBC News",
    "date": "July 20, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giants Invest Heavily in AI",
    "description": "Major tech corporations like Google, Apple, and Microsoft are investing billions in AI development. As AI continues to transform various industries, these investments could shape the future of technology.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "July 20, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Justice: Promise and Peril",
    "description": "AI is being increasingly used in the justice system, with promising results in areas like case prediction. However, concerns about bias and transparency persist, highlighting the need for ethical guidelines.",
    "url": "#",
    "source": "The Guardian",
    "date": "July 20, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Animation Industry",
    "description": "A new AI-powered tool is set to revolutionize the animation industry. The tool can generate high-quality animations in real-time, significantly reducing the time and effort required to create animations.",
    "url": "#",
    "source": "Wired",
    "date": "July 20, 2021",
    "category": "Tools"
  }
];
