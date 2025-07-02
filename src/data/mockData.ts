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
    "description": "A groundbreaking AI model has been developed that expedites the drug discovery process. The model, leveraging deep learning, accurately predicts drug interactions, potentially saving years of research.",
    "url": "#",
    "source": "The Science Times",
    "date": "June 04, 2022",
    "category": "Research"
  },
  {
    "title": "Next-Gen AI Predicts Climate Change Impacts",
    "description": "An innovative AI system has been introduced to predict the impacts of climate change with remarkable accuracy. The technology could play a pivotal role in informing global climate policies and strategies.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "June 04, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises Record Investment",
    "description": "AI startup, DeepThink, has raised a record $200M in its latest funding round. The company's cutting-edge AI solutions have attracted significant interest from major tech investors.",
    "url": "#",
    "source": "TechCrunch",
    "date": "June 04, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI in Healthcare",
    "description": "As AI continues to make strides in healthcare, concerns about patient privacy and data security are emerging. Experts call for robust regulatory frameworks to ensure ethical use of AI.",
    "url": "#",
    "source": "Healthcare IT News",
    "date": "June 04, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning",
    "description": "Tech giant, AI Hub, has released a new tool that simplifies machine learning processes. The tool, named AutoML, enables developers to build models without extensive knowledge in machine learning.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "June 04, 2022",
    "category": "Tools"
  }
];
