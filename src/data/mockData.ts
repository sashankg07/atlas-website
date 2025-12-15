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
    "title": "Groundbreaking AI Algorithm Predicts Climate Change Impact",
    "description": "Scientists have developed a new AI model capable of predicting the environmental impact of climate change with unprecedented accuracy. This breakthrough may assist in the creation of more effective strategies for climate mitigation.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 01, 2022",
    "category": "Research"
  },
  {
    "title": "AI Transforming the Retail Industry Amid Pandemic",
    "description": "As the world adapts to the new normal, AI is playing a crucial role in reshaping the retail industry. With features for personalized shopping experiences to supply chain optimization, AI is the new game-changer.",
    "url": "#",
    "source": "BBC",
    "date": "September 01, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Tool Predicts Alzheimer’s Disease Years Before Onset",
    "description": "A team of researchers have developed an AI tool that can predict the onset of Alzheimer's disease years before the first symptoms appear. This could revolutionize early detection and treatment.",
    "url": "#",
    "source": "Nature",
    "date": "September 01, 2022",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: Balancing Benefits and Risks",
    "description": "As AI technology continues to evolve, ethical considerations are more important than ever. Experts discuss the importance of transparency, accountability, and public engagement in AI development and usage.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 01, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI in Agriculture: The Future of Farming",
    "description": "With the introduction of AI tools in farming, agriculture is undergoing a major transformation. From crop monitoring to weather prediction, AI is ensuring increased productivity and sustainability.",
    "url": "#",
    "source": "The Economist",
    "date": "September 01, 2022",
    "category": "Technology"
  }
];
