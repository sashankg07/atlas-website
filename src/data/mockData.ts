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
    "title": "AI Predicts Alzheimer's Disease Years before Diagnosis",
    "description": "Researchers have developed an AI tool that can predict Alzheimer's disease years before clinical diagnosis. The breakthrough could drastically improve early detection and treatment.",
    "url": "#",
    "source": "Nature",
    "date": "September 27, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Smartphone Cameras Redefining Photography",
    "description": "The use of AI in smartphone cameras is transforming the way people capture images. The technology is enabling features such as automatic scene detection and precision editing.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 27, 2021",
    "category": "Technology"
  },
  {
    "title": "Tesla's AI Day: Unveiling a Path towards Self-Driving Cars",
    "description": "Elon Musk's Tesla unveiled plans to use AI to progress towards fully autonomous vehicles at their recent AI Day. The strategy includes the development of a humanoid robot for dangerous or repetitive tasks.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 27, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Under Scrutiny in European Union",
    "description": "The European Union is revising its AI regulatory framework, placing a stronger emphasis on ethical considerations. The move aims to ensure AI technologies respect fundamental rights and values.",
    "url": "#",
    "source": "Reuters",
    "date": "September 27, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Machine Learning Model Building",
    "description": "A recently launched AI tool promises to simplify the process of building machine learning models. The tool uses automation to ease the typically complex and time-consuming process.",
    "url": "#",
    "source": "Wired",
    "date": "September 27, 2021",
    "category": "Tools"
  }
];
