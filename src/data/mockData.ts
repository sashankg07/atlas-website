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
    "title": "New AI Algorithm Predicts Alzheimer's with Unprecedented Accuracy",
    "description": "Researchers have developed an AI algorithm that can predict Alzheimer's disease with nearly 100% accuracy, years before clinical symptoms appear. This breakthrough could revolutionize early detection and treatment.",
    "url": "#",
    "source": "The Scientific American",
    "date": "October 06, 2022",
    "category": "Research"
  },
  {
    "title": "Google's Quantum Computer Achieves AI 'Supremacy'",
    "description": "Google's quantum computer has achieved a milestone known as 'quantum supremacy' in AI computations. It performed a specific task in 200 seconds that would take the world’s fastest supercomputer 10,000 years to accomplish.",
    "url": "#",
    "source": "Wired",
    "date": "October 06, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM Unveils AI That Can Debate with Humans",
    "description": "IBM's Project Debater, an AI system that can engage in live debate with humans, is a major stride in natural language processing. The AI proved capable of forming cogent arguments and responding to its human opponents.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 06, 2022",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Microsoft Invests $1 Billion in OpenAI to Develop Artificial General Intelligence",
    "description": "Microsoft has invested $1 billion in OpenAI, with the aim of developing Artificial General Intelligence (AGI) that can perform any intellectual task that a human being can. The partnership aims to promote ethical AI use and prepare for AGI’s impact on society.",
    "url": "#",
    "source": "Forbes",
    "date": "October 06, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Course Launched by Stanford University",
    "description": "Stanford University has launched a new course focused on the ethical implications of AI. The course aims to equip future AI professionals with the skills to develop this technology responsibly.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 06, 2022",
    "category": "Ethics"
  }
];
