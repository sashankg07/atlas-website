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
    "title": "AI Helps Scientists Understand Climate Change Impacts",
    "description": "Researchers have begun using artificial intelligence to better understand the impacts of climate change. The AI models simulate and predict climate patterns with unprecedented accuracy.",
    "url": "#",
    "source": "Nature",
    "date": "October 31, 2021",
    "category": "Research"
  },
  {
    "title": "Revolutionizing Healthcare: AI's Role in Disease Prediction",
    "description": "AI is playing a critical role in early disease detection and prediction, transforming the healthcare industry. With machine learning algorithms, doctors can now predict disease progression and tailor treatments accordingly.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 31, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giants Invest Heavily in AI Development",
    "description": "Major technology companies like Google, Apple, and Microsoft are investing billions in artificial intelligence research and development. AI is expected to drive the next wave of technological innovation.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 31, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Rising Concern",
    "description": "As AI becomes more integrated into daily life, ethical considerations are coming to the forefront. Experts call for regulations to address potential biases and privacy concerns.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 31, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Transforming the Creative Industry",
    "description": "Artificial Intelligence tools are reshaping the creative industry, from graphic design to music production. These tools offer enhanced capabilities and open new avenues for creativity.",
    "url": "#",
    "source": "Forbes",
    "date": "October 31, 2021",
    "category": "Tools"
  }
];
