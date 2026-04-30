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
    "description": "A ground-breaking AI model has proven capable of diagnosing diseases with an accuracy surpassing human doctors. This revolutionary development could reshape the medical industry.",
    "url": "#",
    "source": "BBC News",
    "date": "September 23, 2022",
    "category": "Research"
  },
  {
    "title": "AI-driven Climate Change Solutions Gain Momentum",
    "description": "Innovative AI technologies are being harnessed to combat climate change, offering new hope for environmental preservation efforts. These solutions range from predictive climate models to energy-efficient algorithms.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 23, 2022",
    "category": "Technology"
  },
  {
    "title": "Big Business Adopts AI for Competitive Edge",
    "description": "Corporations are increasingly implementing AI solutions for strategic advantages, leading to massive productivity boosts and efficiency gains. This adoption wave signals a paradigm shift in business strategy.",
    "url": "#",
    "source": "Forbes",
    "date": "September 23, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Concerns Rise Over Bias in AI Decision-Making",
    "description": "Concerns over inherent biases in AI algorithms have sparked intense debates in the tech community. This issue underlines the urgent need for inclusive and ethical AI development practices.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 23, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transform Software Development",
    "description": "Emerging AI-powered tools are revolutionizing software development, automating complex tasks and significantly reducing production times. These advancements are set to redefine the tech landscape.",
    "url": "#",
    "source": "Wired",
    "date": "September 23, 2022",
    "category": "Tools"
  }
];
