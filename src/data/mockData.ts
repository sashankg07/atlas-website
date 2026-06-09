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
    "title": "AI Technology: The Next Frontier in Climate Change Mitigation",
    "description": "Researchers have developed a new AI model capable of predicting the future impact of climate change with unprecedented accuracy. The tool will provide policy makers with the necessary data to make informed decisions on climate change mitigation strategies.",
    "url": "#",
    "source": "Nature Communications",
    "date": "March 10, 2023",
    "category": "Research"
  },
  {
    "title": "Innovative AI Tool Revolutionizes Market Analysis",
    "description": "A cutting-edge AI tool is transforming the field of market analysis by predicting consumer behavior with unparalleled precision. This breakthrough could enable businesses to make more informed decisions and maximize their profits.",
    "url": "#",
    "source": "Forbes",
    "date": "March 10, 2023",
    "category": "Business"
  },
  {
    "title": "AI Ethics: The Quest for Responsible AI Development",
    "description": "As AI technology continues to evolve, experts are calling for the development of robust ethical guidelines. These guidelines would ensure that AI is developed and used in a manner that is beneficial to all of humanity.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "March 10, 2023",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Healthcare: A New Era of Medical Diagnosis",
    "description": "Recent breakthroughs in AI technology have opened up new possibilities for medical diagnosis. AI tools can now detect diseases, including cancer, with an accuracy rate that surpasses that of human doctors.",
    "url": "#",
    "source": "The Lancet",
    "date": "March 10, 2023",
    "category": "Technology"
  },
  {
    "title": "New AI Software Accelerates Deep Learning Research",
    "description": "A newly developed AI software is set to revolutionize the field of deep learning. The software significantly reduces the time and computational resources required for training deep learning models, thereby accelerating the pace of research.",
    "url": "#",
    "source": "Science Daily",
    "date": "March 10, 2023",
    "category": "Tools"
  }
];
