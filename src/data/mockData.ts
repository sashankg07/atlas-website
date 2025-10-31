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
    "title": "AI Breaks New Ground in Cancer Diagnosis",
    "description": "Recent advancements in AI technology have led to a breakthrough in cancer diagnosis. By analyzing medical imaging data, AI can now diagnose certain types of cancer with unprecedented accuracy.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 20, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giants Race to Dominate the AI Market",
    "description": "Big tech companies are battling to stand at the forefront of the AI revolution. Investments in AI have skyrocketed, as companies strive to leverage the technology for competitive advantage.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "December 20, 2022",
    "category": "Business"
  },
  {
    "title": "Revolutionizing Agriculture with AI",
    "description": "Artificial Intelligence is being used to transform agricultural practices. Innovative AI applications are helping farmers to monitor crops, predict yields, and manage resources more efficiently.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 20, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Dilemma of Facial Recognition",
    "description": "The increasing use of AI in facial recognition technology has sparked debates on privacy and consent. Critics argue that current regulations are inadequate to address the ethical implications of the technology.",
    "url": "#",
    "source": "The Washington Post",
    "date": "December 20, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A new AI tool has been developed to predict the impact of climate change. The tool uses machine learning algorithms to analyze environmental data and forecast future climate scenarios.",
    "url": "#",
    "source": "The Economist",
    "date": "December 20, 2022",
    "category": "Tools"
  }
];
