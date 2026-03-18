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
    "description": "AI is making waves in the pharmaceutical industry by drastically speeding up the drug discovery process. This could potentially save years of research and countless lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Takes on Climate Change: A New Era of Environmental Solutions",
    "description": "AI is now being utilized to combat climate change, offering innovative solutions to one of the world's most pressing issues. It's a game-changer for environmental conservation.",
    "url": "#",
    "source": "BBC News",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "The AI Startup Boom: A New Wave of Investment",
    "description": "Investments in AI startups have reached unprecedented levels, signaling a future where AI will be at the forefront of business and industry.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: Balancing Innovation with Accountability",
    "description": "As AI continues to evolve, so does the discussion around ethical considerations. Experts stress the importance of accountability and transparency in AI development.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI's New Software: A Leap Forward in AI Tools",
    "description": "OpenAI has released a new software that promises to make AI more accessible to developers, signaling a significant advancement in the field.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
