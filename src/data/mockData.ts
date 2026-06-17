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
    "title": "AI Outperforms Humans in Chess, Go, and Now Poker",
    "description": "A new AI model, developed by researchers, has outperformed human world champions in six-player poker. This breakthrough could have broad implications in business negotiations and cybersecurity.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 24, 2021",
    "category": "Research"
  },
  {
    "title": "Nvidia’s New AI Language Model Mimics Human Writing Styles",
    "description": "Nvidia has released an advanced AI model capable of mimicking human writing styles, raising both excitement and ethical questions about the future of AI in communications.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 24, 2021",
    "category": "Technology"
  },
  {
    "title": "Chinese Tech Giant Baidu Unveils AI Chip for Cloud Computing",
    "description": "Baidu, China's leading search engine company, has launched a new AI chip designed to improve cloud computing services, marking a significant step in China's push to enhance its domestic tech industry.",
    "url": "#",
    "source": "Forbes",
    "date": "November 24, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: The Importance of Making AI Serve the People",
    "description": "As AI continues to transform industries, experts emphasize the need for ethical guidelines to ensure that AI technologies are developed and used for the benefit of all.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 24, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Helps Detect Deepfakes with 94% Accuracy",
    "description": "Researchers have developed an AI tool capable of detecting deepfake videos with 94% accuracy, potentially offering a significant boost in the fight against digital misinformation.",
    "url": "#",
    "source": "CNN",
    "date": "November 24, 2021",
    "category": "Tools"
  }
];
