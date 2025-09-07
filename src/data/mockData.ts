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
    "title": "Cutting-edge AI Software Transforms Healthcare",
    "description": "New AI software is revolutionizing the healthcare industry by providing more accurate diagnostics faster than ever before. This could potentially save millions of lives and streamline healthcare worldwide.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "Ethical Concerns Rise as AI Continues to Evolve",
    "description": "As AI progresses, so do ethical concerns surrounding privacy, bias, and decision-making. Experts are calling for more regulations to ensure AI develops in a manner that benefits society as a whole.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Helps Businesses Predict Consumer Trends",
    "description": "Businesses are leveraging AI to predict consumer trends with unprecedented accuracy. This new AI-driven approach is shaping the future of marketing and sales strategies.",
    "url": "#",
    "source": "Business Insider",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A groundbreaking AI tool promises to revolutionize data analysis by automating complex tasks. This could potentially save countless hours and resources for businesses and academia alike.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "November 30, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Breakthrough in Climate Change Research",
    "description": "Researchers have used AI to predict the impact of climate change with a degree of accuracy previously thought impossible. This development could be pivotal in the fight against global warming.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "November 30, 2021",
    "category": "Research"
  }
];
