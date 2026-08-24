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
    "title": "Revolutionary AI Model Predicts Climate Change Effects With Unparalleled Precision",
    "description": "A team of international researchers has developed an AI model capable of predicting the effects of climate change with unprecedented accuracy. The breakthrough could greatly aid in global climate change mitigation efforts.",
    "url": "#",
    "source": "Nature",
    "date": "November 24, 2021",
    "category": "Research"
  },
  {
    "title": "Google's New AI Tool Transforms Smartphone Photography",
    "description": "Google has unveiled a powerful AI tool that enhances smartphone photography, delivering professional-grade results. The tool leverages machine learning to optimize lighting, composition, and other key elements.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 24, 2021",
    "category": "Technology"
  },
  {
    "title": "IBM Acquires AI Startup to Boost Cloud Capabilities",
    "description": "IBM has announced the acquisition of an AI startup specializing in cloud optimization. The move is set to significantly enhance IBM's AI-infused cloud offerings.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "November 24, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Call for Strict Regulations on AI Facial Recognition Systems",
    "description": "In light of growing privacy concerns, experts are calling for stricter regulations on the use of AI facial recognition systems. The move is aimed at preventing misuse and protecting individual privacy rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 24, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Processing Tool",
    "description": "OpenAI has released a new language processing tool that promises to advance AI's understanding of human language. The tool is expected to have wide-reaching applications, from chatbots to content generation.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 24, 2021",
    "category": "Tools"
  }
];
