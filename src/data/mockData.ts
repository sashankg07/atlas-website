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
    "title": "Revolutionizing Healthcare: AI Powered Predictive Analysis",
    "description": "Researchers have developed a new AI algorithm capable of predicting patient health outcomes. This breakthrough is expected to revolutionize healthcare, allowing for earlier interventions and improved patient care.",
    "url": "#",
    "source": "Nature Biomedical Engineering",
    "date": "October 31, 2022",
    "category": "Research"
  },
  {
    "title": "AI Learns to Paint in the Style of the Great Masters",
    "description": "A new AI system has been trained to create artwork that mirrors the style of great masters like Van Gogh and Picasso. This development is not only fascinating for artists but also opens up new possibilities for the digital art industry.",
    "url": "#",
    "source": "Artificial Intelligence Magazine",
    "date": "October 31, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Secures $200 Million in Series C Funding",
    "description": "AI start-up, Intellivision, has secured $200 million in Series C funding, highlighting the continued growth and investment interest in AI businesses. The funds will be used to enhance their AI-driven solutions and expand their global reach.",
    "url": "#",
    "source": "Forbes",
    "date": "October 31, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Balancing AI Benefits and Ethical Concerns",
    "description": "As AI continues to develop and permeate various aspects of life, ethical concerns are on the rise. Experts are calling for clear regulations and guidelines to ensure that AI systems are used responsibly and ethically.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 31, 2022",
    "category": "Ethics"
  },
  {
    "title": "New Open-Source AI Tool Accelerates Machine Learning Research",
    "description": "A new open-source AI tool promises to significantly accelerate the process of machine learning research. The tool, called 'FastML', is designed to automate and streamline many of the more time-consuming aspects of machine learning.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 31, 2022",
    "category": "Tools"
  }
];
