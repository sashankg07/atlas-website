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
    "title": "AI Breaks New Ground in Protein Folding Prediction",
    "description": "Google's DeepMind has announced a major breakthrough in the field of bioinformatics, using their AI system AlphaFold to accurately predict protein structures. This could revolutionize medicine and biology.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 25, 2021",
    "category": "Research"
  },
  {
    "title": "AI Tools Transforming the Landscape of Digital Marketing",
    "description": "Sophisticated AI tools are reshaping digital marketing strategies by offering unprecedented insights into consumer behavior, enhancing personalized customer experiences, and optimizing marketing efforts.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 25, 2021",
    "category": "Business"
  },
  {
    "title": "OpenAI's GPT-3 Powers New Generation of Chatbots",
    "description": "OpenAI's language model GPT-3 is lending its power to a new wave of chatbots, delivering unprecedented levels of natural language understanding and interaction.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 25, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Challenges of AI: Balancing Innovation with Responsibility",
    "description": "As AI technology advances rapidly, ethical concerns including data privacy, algorithmic bias, and job displacement are gaining prominence. Policymakers and technology leaders are grappling with these challenges.",
    "url": "#",
    "source": "The Economist",
    "date": "November 25, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Speeds Up Drug Discovery",
    "description": "A new AI tool, developed by researchers at Stanford University, is able to predict the potential of a drug candidate in early stages of development, significantly reducing time and costs.",
    "url": "#",
    "source": "Science Daily",
    "date": "November 25, 2021",
    "category": "Tools"
  }
];
