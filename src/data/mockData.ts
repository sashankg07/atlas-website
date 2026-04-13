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
    "title": "AI Breaks New Ground in Disease Diagnosis",
    "description": "In a groundbreaking development, a new AI model has shown exceptional results in diagnosing diseases. It promises to revolutionize the field of medical diagnostics.",
    "url": "#",
    "source": "New York Times",
    "date": "September 23, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Heavily in AI Tools",
    "description": "Leading technology companies are making significant investments in AI tools. This trend underscores the growing importance of AI in today's digital world.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 23, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Set to Transform the Business Landscape",
    "description": "With its potential for automating tasks and improving decision-making, AI is poised to bring about massive changes in the business sector.",
    "url": "#",
    "source": "Forbes",
    "date": "September 23, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surround AI Developments",
    "description": "As AI continues to evolve, so do ethical concerns surrounding its use. Experts call for robust regulations to ensure the technology is used responsibly.",
    "url": "#",
    "source": "The Washington Post",
    "date": "September 23, 2021",
    "category": "Ethics"
  },
  {
    "title": "Latest AI Tools Open New Horizons for Developers",
    "description": "The emergence of new AI tools is a boon for developers. The tools not only streamline development processes but also open up new possibilities.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 23, 2021",
    "category": "Tools"
  }
];
