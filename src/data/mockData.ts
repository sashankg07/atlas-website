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
    "title": "AI Trains Itself to Understand Quantum Physics",
    "description": "A new artificially intelligent system has demonstrated the ability to self-learn quantum mechanics. This groundbreaking development could revolutionize the way we handle complex scientific computations.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 01, 2021",
    "category": "Research"
  },
  {
    "title": "Facebook’s Metaverse: A New Era of AI and VR",
    "description": "Facebook announced its plan to create a 'Metaverse', a shared virtual reality space that leverages the power of AI and VR technologies. Critics and enthusiasts alike are eager to see how this changes the landscape of social media and digital interaction.",
    "url": "#",
    "source": "The Verge",
    "date": "November 01, 2021",
    "category": "Technology"
  },
  {
    "title": "AI-powered Robots Transforming the Manufacturing Industry",
    "description": "Artificial Intelligence is being utilized to develop autonomous robots that are improving efficiency in the manufacturing industry. These advancements are expected to boost productivity and reduce operational costs.",
    "url": "#",
    "source": "Forbes",
    "date": "November 01, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI in Surveillance",
    "description": "As AI becomes more prominent in surveillance technologies, ethical questions arise about privacy and consent. Policymakers and tech companies are now challenged with balancing security benefits and potential abuses.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 01, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google's New AI Tool Helps Decipher Ancient Texts",
    "description": "Google has launched a new AI tool that assists in translating and understanding ancient scripts. This tool is expected to help historians and linguists make important discoveries about our past.",
    "url": "#",
    "source": "Wired",
    "date": "November 01, 2021",
    "category": "Tools"
  }
];
