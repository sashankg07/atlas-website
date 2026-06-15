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
    "title": "AI System Outperforms Humans in Protein Folding Prediction",
    "description": "A new AI model developed by DeepMind has dramatically improved the prediction of protein structures. The advancement could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 14, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Space: NASA's Mars Rover Utilizes Machine Learning",
    "description": "NASA's Perseverance Rover is leveraging AI to navigate the Martian terrain. This marks a significant step towards autonomous exploration in space missions.",
    "url": "#",
    "source": "BBC",
    "date": "October 14, 2022",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup to Boost Cloud Services",
    "description": "Microsoft has acquired an AI startup specializing in machine learning operations (MLOps). The deal is set to boost Microsoft's cloud services and AI capabilities.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 14, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: The Challenge of Bias Mitigation in Algorithms",
    "description": "Recent studies highlight the growing concern of biases in AI algorithms, emphasizing the need for more ethical AI practices. Researchers are urging for regulatory measures and transparency in AI developments.",
    "url": "#",
    "source": "The Economist",
    "date": "October 14, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Model API",
    "description": "OpenAI has launched a new API for its advanced language model, aiming to democratize access to AI-powered text generation. The tool is set to transform a wide range of sectors from education to customer service.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 14, 2022",
    "category": "Tools"
  }
];
