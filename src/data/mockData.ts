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
    "title": "AI Beats Humans at Understanding Text for the First Time",
    "description": "A new AI model developed by OpenAI has surpassed human performance in understanding and interpreting written text. The model, known as GPT-3, marks a significant milestone in the field of artificial intelligence.",
    "url": "#",
    "source": "The New York Times",
    "date": "April 30, 2022",
    "category": "Research"
  },
  {
    "title": "The AI Revolution in Healthcare: Predicting Disease Outbreaks",
    "description": "AI systems are now capable of predicting potential disease outbreaks, enabling healthcare professionals to react proactively. This breakthrough could revolutionize public health and disease prevention worldwide.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 30, 2022",
    "category": "Technology"
  },
  {
    "title": "IBM Unveils AI Designed to Assist in Climate Change Fight",
    "description": "IBM has unveiled an advanced AI system designed to help scientists, researchers, and policymakers tackle the ongoing climate crisis. The AI uses machine learning algorithms to analyze climate data and predict future trends.",
    "url": "#",
    "source": "Forbes",
    "date": "April 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Unveiled by the European Union",
    "description": "The EU has introduced new guidelines aimed at ensuring the ethical use of AI. The guidelines stress the importance of transparency and accountability in AI systems and their use.",
    "url": "#",
    "source": "BBC News",
    "date": "April 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "Google's New AI Tool Aims to Simplify Data Analysis",
    "description": "Google has launched a new AI tool designed to make data analysis more accessible to non-experts. The tool, known as AutoML, uses machine learning to automate parts of the data analysis process.",
    "url": "#",
    "source": "TechCrunch",
    "date": "April 30, 2022",
    "category": "Tools"
  }
];
