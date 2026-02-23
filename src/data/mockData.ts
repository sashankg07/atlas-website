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
    "title": "AI Breakthrough: DeepMind's AlphaFold Solves Protein Folding Problem",
    "description": "DeepMind's AlphaFold AI has made a groundbreaking advancement by solving the decades old protein folding problem. This could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 22, 2021",
    "category": "Research"
  },
  {
    "title": "OpenAI Unveils DALL-E: AI That Generates Images from Text",
    "description": "OpenAI has released a new AI model, DALL-E, that can generate images from text descriptions, showcasing the startlingly creative potential of AI.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 22, 2021",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup Nuance for $19.7 Billion",
    "description": "Microsoft is set to acquire AI startup Nuance Communications, specializing in healthcare tech, for a whopping $19.7 billion, marking its largest acquisition in the AI field.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 22, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "EU Proposes Strict Regulations for High-Risk AI Applications",
    "description": "The European Union has proposed stringent regulations for high-risk AI applications, in an effort to ensure safety and uphold fundamental rights.",
    "url": "#",
    "source": "Reuters",
    "date": "October 22, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Releases TensorFlow 2.5: New Features and Improvements",
    "description": "Google has released TensorFlow 2.5, the latest version of its open-source machine learning library, with new features and various improvements.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 22, 2021",
    "category": "Tools"
  }
];
