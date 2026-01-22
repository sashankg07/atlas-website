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
    "title": "AI Revolutionizes Drug Discovery",
    "description": "Artificial intelligence is transforming the pharmaceutical industry by expediting drug discovery and development. New AI models are capable of predicting drug outcomes and side effects, radically reducing the timeframe and cost of R&D.",
    "url": "#",
    "source": "The New York Times",
    "date": "April 13, 2022",
    "category": "Research"
  },
  {
    "title": "AI to Combat Climate Change: A New Frontier",
    "description": "Scientists are leveraging artificial intelligence to address climate change challenges. Machine learning models are being utilized to predict climate patterns and propose sustainable solutions.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 13, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI Startups",
    "description": "A leading tech company has pumped billions into AI startups this year, highlighting the growing interest and investment in AI and machine learning technologies across industries.",
    "url": "#",
    "source": "Forbes",
    "date": "April 13, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Navigating the Gray Areas",
    "description": "As AI permeates various sectors, ethical considerations are coming to the fore. Experts call for robust guidelines to ensure responsible and fair use of AI technologies.",
    "url": "#",
    "source": "The Washington Post",
    "date": "April 13, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A novel AI tool is set to revolutionize data analysis by automating complex processes. The tool promises to make data analytics more accessible to non-specialists.",
    "url": "#",
    "source": "TechCrunch",
    "date": "April 13, 2022",
    "category": "Tools"
  }
];
