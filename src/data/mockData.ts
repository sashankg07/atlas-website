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
    "title": "Groundbreaking AI Tool Predicts Climate Change Impact",
    "description": "Researchers have developed an AI tool that can accurately predict the impact of climate change. This breakthrough technology is expected to help shape future climate policies.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 03, 2022",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes E-commerce with Personalized Shopping Experiences",
    "description": "AI is transforming the e-commerce landscape by offering highly personalized shopping experiences. Retailers are leveraging these advances to improve customer engagement and boost sales.",
    "url": "#",
    "source": "Forbes",
    "date": "September 03, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released by Tech Giant",
    "description": "A leading tech company has released comprehensive AI ethics guidelines to promote responsible AI usage. This move is seen as a significant step towards ensuring AI's fair and transparent use.",
    "url": "#",
    "source": "BBC News",
    "date": "September 03, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tool Diagnoses COVID-19 using Chest X-Rays",
    "description": "A newly developed AI tool can now diagnose COVID-19 from chest X-rays with remarkable accuracy. This tool could potentially streamline the testing process in hospitals.",
    "url": "#",
    "source": "Scientific American",
    "date": "September 03, 2022",
    "category": "Technology"
  },
  {
    "title": "DeepMind's Latest AI Model Outperforms Human Experts",
    "description": "DeepMind's new AI model has demonstrated superior performance compared to human experts in complex decision-making tasks. This breakthrough could have far-reaching implications in various fields.",
    "url": "#",
    "source": "Nature",
    "date": "September 03, 2022",
    "category": "Research"
  }
];
