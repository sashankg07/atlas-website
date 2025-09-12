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
    "title": "A Breakthrough in AI Language Understanding with GPT-4",
    "description": "OpenAI has unveiled GPT-4, the latest version of its AI language model, with unprecedented language understanding capabilities. The model boasts significant improvements in translation, dialogue, and text generation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 20, 2022",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizing the Healthcare Industry Amid Pandemic",
    "description": "AI tools are playing a critical role in combating the ongoing pandemic, from predicting virus mutations to aiding in vaccine distribution. Experts predict a lasting impact on the healthcare industry.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 20, 2022",
    "category": "Technology"
  },
  {
    "title": "Startup Develops AI to Streamline Supply Chain Management",
    "description": "SupplyAI, a startup based in San Francisco, has developed an AI solution to optimize supply chain management. The tool promises to reduce inefficiencies and improve decision-making in the industry.",
    "url": "#",
    "source": "Forbes",
    "date": "October 20, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Questions Arise from AI Facial Recognition",
    "description": "The rise of AI facial recognition software has raised serious ethical concerns, including issues of privacy and racial bias. Policymakers are grappling with how to regulate this rapidly evolving technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 20, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A new AI-based tool developed by ClimateAI promises to provide accurate predictions of the impact of climate change. The tool aims to aid policymakers and businesses in making informed environmental decisions.",
    "url": "#",
    "source": "Nature",
    "date": "October 20, 2022",
    "category": "Tools"
  }
];
