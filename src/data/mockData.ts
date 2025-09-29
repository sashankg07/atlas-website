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
    "title": "AI Breaks New Ground in Drug Discovery",
    "description": "Scientists have utilized artificial intelligence to discover a novel drug compound. This paves the way for faster, more efficient drug discovery in the future.",
    "url": "#",
    "source": "Nature Biotechnology",
    "date": "September 27, 2022",
    "category": "Research"
  },
  {
    "title": "AI Driven Drones Aid in Firefighting Efforts",
    "description": "Firefighters are beginning to employ AI-driven drone technology to help combat wildfires. The drones use AI to detect and track fires, significantly improving response times.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 27, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M to Revolutionize Customer Service",
    "description": "An AI startup has raised $100 million in Series C funding to develop an AI-powered customer service platform. The platform is predicted to drastically improve customer service efficiency and quality.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 27, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI Facial Recognition",
    "description": "As AI-powered facial recognition technology advances, so do concerns about its ethical implications. Experts call for increased regulation to protect individual privacy rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 27, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Development Tools Accelerate Machine Learning Projects",
    "description": "A new suite of AI development tools promises to simplify and accelerate machine learning projects. The tools aim to make AI more accessible to developers of all skill levels.",
    "url": "#",
    "source": "The Verge",
    "date": "September 27, 2022",
    "category": "Tools"
  }
];
