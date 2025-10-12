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
    "title": "AI Breakthrough: Machine Learning Discovers Novel Antibiotic",
    "description": "In a significant breakthrough for healthcare, AI has identified a new antibiotic able to eliminate strains of bacteria resistant to all known antiseptics. This marks a major step in the fight against antibiotic resistance.",
    "url": "#",
    "source": "New York Times",
    "date": "March 11, 2022",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes Climate Change Predictions",
    "description": "New AI models are providing more accurate and detailed climate change predictions. These models will help scientists understand the impacts of climate change and develop strategies to mitigate its effects.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 11, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Raises $200M in Series C Funding",
    "description": "AI start-up, SynthAI, has raised $200 million in Series C funding. The company plans to use the funding to expand its AI solutions across various industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 11, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: New Framework for Equitable AI Development",
    "description": "A team of researchers has proposed a new framework for ethical AI development. The framework aims to ensure AI systems are built and used in a way that respects human rights and promotes fairness.",
    "url": "#",
    "source": "Nature",
    "date": "March 11, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Enhances Image Recognition Capabilities",
    "description": "Tech giant, InfiniVision, has launched a new AI tool that significantly enhances image recognition capabilities. The tool is expected to revolutionize sectors relying heavily on image recognition, such as security and healthcare.",
    "url": "#",
    "source": "Wired",
    "date": "March 11, 2022",
    "category": "Tools"
  }
];
