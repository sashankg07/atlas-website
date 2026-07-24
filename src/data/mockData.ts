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
    "title": "Groundbreaking AI Algorithm Predicts Climate Change Impacts",
    "description": "A new AI model capable of predicting the impacts of climate change with unprecedented accuracy was unveiled today. The model, developed by a team of international scientists, aims to aid global efforts to mitigate climate impacts.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Launches AI-Based Customer Service Tool",
    "description": "In a significant development, a leading tech company has launched a new AI-based tool designed to revolutionize customer service. The tool uses AI to understand customer queries and provide instant, accurate responses.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $50M in Series B Funding",
    "description": "Pioneering AI startup, AI Solutions, announced today that they have raised $50M in series B funding. The funding will be used to further develop their innovative AI technologies and expand their team.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Development Released",
    "description": "A leading tech ethics body released new guidelines today for the ethical development and deployment of AI. The guidelines aim to ensure that AI technologies are used responsibly and do not harm society.",
    "url": "#",
    "source": "The Verge",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Streamlines Medical Image Processing",
    "description": "A new AI tool has been developed that dramatically reduces the time it takes to process medical images. The tool uses advanced AI algorithms to detect anomalies and generate accurate reports in real-time.",
    "url": "#",
    "source": "MedTech",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
