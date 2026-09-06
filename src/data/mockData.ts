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
    "title": "Revolutionary AI Predicts Climate Change Impact",
    "description": "Researchers have developed a new AI model capable of predicting the impact of climate change with unprecedented accuracy. This breakthrough could prove instrumental in planning for the future.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Supercharges Remote Work Efficiency",
    "description": "As the pandemic continues to reshape the work landscape, AI tools are being leveraged to increase productivity and efficiency in remote work environments.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100M in Series C Funding",
    "description": "In a testament to the increasing value of AI in the business world, a leading AI start-up has successfully raised $100 million in its latest funding round.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI Facial Recognition",
    "description": "As AI facial recognition tech advances, ethical debates intensify. Advocates call for regulations to prevent potential misuse and protect individuals' privacy rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A new AI tool promises to revolutionize data analysis, making it faster and more accessible to non-experts, enabling businesses to make data-driven decisions more effectively.",
    "url": "#",
    "source": "Wired",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
