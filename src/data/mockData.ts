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
    "title": "AI Breakthrough: Elon Musk's Neuralink Successfully Tests Brain Chip in a Monkey",
    "description": "Elon Musk's Neuralink has successfully tested a prototype of its brain implant device in a monkey, paving the way for human trials. The device could potentially help people with neurological conditions and disabilities.",
    "url": "#",
    "source": "The Verge",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "DeepMind Unveils Latest AI Model Capable of Predicting Climate Change Patterns",
    "description": "DeepMind has revealed a new AI model capable of predicting climate change patterns with unprecedented accuracy. The breakthrough could inform future environmental policies and strategies.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "Microsoft's New AI Tool Helps Businesses Optimize Energy Efficiency",
    "description": "Microsoft has launched a new AI tool that assists businesses in optimizing energy efficiency and reducing carbon emissions. This aligns with the growing trend of technology being used to combat climate change.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Under Scrutiny: The Debate Over Facial Recognition Technology",
    "description": "As facial recognition technology becomes increasingly prevalent, concerns about its ethical implications have sparked a global debate. Critics worry about potential misuse and violations of privacy.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "Google's Teachable Machine: Democratizing AI With User-Friendly Tools",
    "description": "Google's Teachable Machine is making AI more accessible, allowing anyone to create machine learning models without coding knowledge. This tool is empowering individuals and businesses to leverage AI in innovative ways.",
    "url": "#",
    "source": "Wired",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
