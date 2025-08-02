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
    "title": "AI Revolutionizes Medical Diagnostics",
    "description": "A breakthrough in AI technology has empowered computers to diagnose medical conditions with unprecedented accuracy. This development could lead to significant improvements in healthcare delivery worldwide.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 04, 2022",
    "category": "Technology"
  },
  {
    "title": "New AI Algorithm Optimizes E-commerce Logistics",
    "description": "A cutting-edge AI algorithm has been developed to streamline logistics in the e-commerce industry. This innovative tool promises to significantly reduce delivery times and improve customer satisfaction.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 04, 2022",
    "category": "Business"
  },
  {
    "title": "AI Pioneer Awarded Turing Award",
    "description": "A leading figure in the field of artificial intelligence has been awarded the prestigious Turing Award. Their groundbreaking research has pushed the boundaries of AI capabilities.",
    "url": "#",
    "source": "Nature",
    "date": "October 04, 2022",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surround AI Facial Recognition",
    "description": "Growing concerns about the ethics of AI facial recognition technology have sparked a global conversation. Critics argue that the technology is prone to abuse and infringes on privacy rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 04, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A novel AI tool can now predict the impact of climate change with remarkable precision. This new technology could play a crucial role in environmental planning and conservation efforts.",
    "url": "#",
    "source": "BBC News",
    "date": "October 04, 2022",
    "category": "Tools"
  }
];
