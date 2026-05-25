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
    "title": "Revolutionizing Healthcare: AI-Powered Diagnosis Tool Receives FDA Approval",
    "description": "A new AI tool designed to diagnose diseases has received FDA approval, setting a precedent for future AI applications in healthcare. This breakthrough development could significantly enhance the speed and accuracy of diagnoses.",
    "url": "#",
    "source": "New York Times",
    "date": "December 31, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Tackles Climate Change: New Forecasting Model Predicts Climate Patterns",
    "description": "A group of international scientists have developed an AI model that can accurately predict climate patterns. This tool could contribute significantly to global efforts to mitigate and adapt to climate change.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 31, 2022",
    "category": "Research"
  },
  {
    "title": "AI Ethics: Balancing Innovation and Regulation in the Age of AI",
    "description": "As AI continues to integrate into society, ethical considerations become increasingly important. Experts are calling for a balance between fostering innovation and ensuring ethical safeguards in AI applications.",
    "url": "#",
    "source": "BBC News",
    "date": "December 31, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Retail: New Technology Transforms the Shopping Experience",
    "description": "Advancements in AI are transforming the retail industry, from personalized shopping experiences to efficient supply chain management. These changes indicate a promising future for AI in the business sector.",
    "url": "#",
    "source": "Forbes",
    "date": "December 31, 2022",
    "category": "Business"
  },
  {
    "title": "AI Tools: A New Language Model Outperforms its Predecessors",
    "description": "A newly developed AI language model is showing promising results, outperforming previous models in understanding and generating human-like text. This development marks a significant step forward in Natural Language Processing.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 31, 2022",
    "category": "Tools"
  }
];
