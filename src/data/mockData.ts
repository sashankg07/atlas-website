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
    "title": "Groundbreaking AI Models Helping Climate Scientists",
    "description": "Scientists are harnessing the power of artificial intelligence to analyze vast amounts of climate data and predict the future impacts of climate change more accurately than ever before.",
    "url": "#",
    "source": "Nature",
    "date": "June 07, 2022",
    "category": "Research"
  },
  {
    "title": "Emerging Trend: AI Revolutionizing the Retail Industry",
    "description": "With the ability to analyze customer behavior and optimize inventory, artificial intelligence is transforming the retail industry, enabling companies to provide personalized shopping experiences.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "June 07, 2022",
    "category": "Business"
  },
  {
    "title": "Evolution of AI in Healthcare: A New Era of Medical Diagnosis",
    "description": "Advanced AI algorithms are now capable of diagnosing diseases with remarkable accuracy, promising to revolutionize the healthcare sector and improve patient outcomes significantly.",
    "url": "#",
    "source": "The New York Times",
    "date": "June 07, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Dimensions of AI: Balancing Progress and Privacy",
    "description": "As AI technology evolves, ethical considerations are becoming increasingly important. Experts debate how to balance the benefits of AI with the need to protect individuals' privacy.",
    "url": "#",
    "source": "The Guardian",
    "date": "June 07, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Shaping the Future of Content Creation",
    "description": "Innovative AI tools are transforming content creation, enabling creators to automate processes and generate high-quality content more efficiently than ever.",
    "url": "#",
    "source": "Forbes",
    "date": "June 07, 2022",
    "category": "Tools"
  }
];
