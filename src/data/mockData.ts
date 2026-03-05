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
    "title": "AI System Outperforms Humans in Identifying Rare Diseases",
    "description": "A new AI system has been developed that can diagnose rare diseases more accurately than human physicians. Using machine learning, the system analyzes patient data to make its diagnoses.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 15, 2022",
    "category": "Research"
  },
  {
    "title": "AI Start-up Raises $100 Million to Revolutionize E-commerce",
    "description": "An AI start-up has secured $100 million in funding to develop an AI tool that personalizes the e-commerce experience. The tool uses AI to predict customer preferences and make product recommendations.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 15, 2022",
    "category": "Business"
  },
  {
    "title": "New AI Technology Predicts Climate Change Effects",
    "description": "A groundbreaking AI tech can now predict the effects of climate change with unprecedented accuracy. The technology uses deep learning algorithms to analyze climate data and generate its forecasts.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 15, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI in Healthcare Raises Debates",
    "description": "The use of AI in healthcare has sparked ethical debates. Concerns center around issues of data privacy, as well as the potential for AI systems to make mistakes in patient diagnoses and treatment.",
    "url": "#",
    "source": "The Economist",
    "date": "October 15, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Processing Tool",
    "description": "OpenAI has released a new tool for natural language processing. The tool, called GPT-4, boasts improved language understanding and generation capabilities.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 15, 2022",
    "category": "Tools"
  }
];
