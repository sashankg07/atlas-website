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
    "title": "AI Breakthrough: Machine Learning Models Can Now Predict Climate Change",
    "description": "Scientists have successfully trained artificial intelligence models to accurately predict climate change patterns. This revolutionary development could play a pivotal role in environmental policy decisions.",
    "url": "#",
    "source": "Nature",
    "date": "November 05, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Big in AI for Healthcare",
    "description": "Major tech companies, including Google and Microsoft, are investing heavily in AI-driven healthcare solutions. These investments hold promise for personalized medicine and improved patient care.",
    "url": "#",
    "source": "Forbes",
    "date": "November 05, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Addressing Bias in Machine Learning Systems",
    "description": "An international team of researchers has proposed new guidelines to tackle inherent biases in AI systems. The guidelines aim to ensure that AI technologies are developed and used in an ethical and fair manner.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 05, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Transforms Text into Realistic Speech",
    "description": "A new AI tool is revolutionizing text-to-speech technology. The tool generates human-like speech, greatly enhancing user experience for audio content consumers.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 05, 2021",
    "category": "Tools"
  },
  {
    "title": "AI and Quantum Computing: A New Frontier",
    "description": "Researchers are exploring the intersection of AI and quantum computing, pushing the limits of what's possible in machine learning. The development holds tremendous potential for solving complex problems.",
    "url": "#",
    "source": "Wired",
    "date": "November 05, 2021",
    "category": "Technology"
  }
];
