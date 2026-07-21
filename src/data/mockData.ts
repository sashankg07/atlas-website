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
    "title": "AI Tech Revolutionizing Healthcare Sector",
    "description": "Recent AI developments have shown promising potential in revolutionizing the healthcare sector. Deep learning algorithms are being used to assist doctors in diagnosing diseases with remarkable accuracy.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 28, 2021",
    "category": "Technology"
  },
  {
    "title": "Leading Tech Firm Unveils Advanced AI Chip",
    "description": "A leading tech firm has announced the release of a new AI chip that promises to significantly improve the efficiency of machine learning tasks. The chip is expected to power the next generation of AI applications.",
    "url": "#",
    "source": "BBC News",
    "date": "November 28, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Ethical Guidelines Under Review",
    "description": "In light of recent AI developments and breakthroughs, experts are calling for a comprehensive review of current AI ethical guidelines. The move is aimed at addressing potential ethical dilemmas that could arise from the AI technology's rapid advancement.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 28, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Research Pushes Boundaries of AI Capabilities",
    "description": "A recent study has revealed groundbreaking results that could push the boundaries of AI capabilities. The research focuses on developing AI systems that can understand and interpret human emotions.",
    "url": "#",
    "source": "Nature",
    "date": "November 28, 2021",
    "category": "Research"
  },
  {
    "title": "AI Tools Transforming Digital Marketing",
    "description": "AI tools are now being used to transform digital marketing strategies. These tools allow businesses to analyze consumer behavior and tailor their marketing strategies accordingly.",
    "url": "#",
    "source": "Forbes",
    "date": "November 28, 2021",
    "category": "Business"
  }
];
