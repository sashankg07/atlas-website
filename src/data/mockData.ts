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
    "title": "AI Revolutionizes Cancer Detection",
    "description": "In a major breakthrough, researchers have developed a new AI model that can identify cancerous tissues with remarkable accuracy. This could potentially transform the field of medical diagnostics.",
    "url": "#",
    "source": "Nature",
    "date": "September 23, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Heavily in AI for Cloud Computing",
    "description": "Major tech companies like Google and Amazon are investing billions in AI to enhance their cloud computing capabilities. They believe this integration can lead to more efficient and powerful services.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 23, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: A New Frontier in Legislation",
    "description": "As AI technology continues to advance, lawmakers are grappling with the ethical implications. New legislation is being drafted to ensure AI is developed and used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 23, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tools Drive Efficiency in Manufacturing",
    "description": "Innovative AI tools are being introduced in manufacturing, improving efficiency and reducing waste. These new technologies promise a more sustainable future for the industry.",
    "url": "#",
    "source": "The Verge",
    "date": "September 23, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Supercomputers: The Next Big Leap in Technology",
    "description": "AI supercomputers are being hailed as the next giant leap in technology. These powerful machines could be the key to solving some of the world's most complex problems.",
    "url": "#",
    "source": "Wired",
    "date": "September 23, 2021",
    "category": "Technology"
  }
];
