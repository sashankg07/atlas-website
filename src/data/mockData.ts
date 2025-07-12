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
    "title": "Groundbreaking AI Model Predicts Climate Change Impact",
    "description": "Scientists have developed a new artificial intelligence model capable of accurately predicting the long-term effects of climate change. The model combines machine learning algorithms with robust climate data to predict changes over the next century.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 17, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes the E-Commerce Industry",
    "description": "The latest AI trends are transforming the e-commerce industry, providing personalized shopping experiences and improving customer service. AI-powered chatbots and recommendation engines are becoming the norm in online shopping.",
    "url": "#",
    "source": "Forbes",
    "date": "October 17, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Balancing Innovation and Responsibility",
    "description": "As AI continues to evolve, ethical concerns such as data privacy and algorithmic bias are coming to the forefront. Experts discuss the balance between pushing the boundaries of AI and ensuring its responsible use.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 17, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Tool Helps in Early Detection of Alzheimer's",
    "description": "A new AI tool can identify early signs of Alzheimer's disease years before symptoms appear. The tool analyses brain scans to detect subtle changes that could suggest the onset of the disease.",
    "url": "#",
    "source": "BBC News",
    "date": "October 17, 2021",
    "category": "Technology"
  },
  {
    "title": "Unveiling the AI Trends for 2022",
    "description": "From increased AI transparency to the rise of quantum computing, the AI landscape is set for some major shifts in 2022. Here's a look at the top trends to watch out for in the coming year.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 17, 2021",
    "category": "Research"
  }
];
