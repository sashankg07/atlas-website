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
    "title": "Groundbreaking AI System Decodes Brain Signals into Text",
    "description": "Scientists have developed an AI system capable of translating brain signals into text with unprecedented accuracy. This breakthrough could provide a voice to those unable to speak.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "March 23, 2023",
    "category": "Research"
  },
  {
    "title": "AI Beats Human Experts in Spotting Breast Cancer",
    "description": "A new AI model has surpassed human radiologists in detecting breast cancer in mammograms. The technology promises to revolutionize early detection and treatment.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "March 23, 2023",
    "category": "Technology"
  },
  {
    "title": "IBM Unveils AI that Can Debate with Humans",
    "description": "IBM has unveiled Project Debater, an AI system that can engage in a complex debate with humans. This marks a significant step forward in natural language processing.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "March 23, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: A Global Framework Emerges",
    "description": "A coalition of tech companies, academics, and NGOs have proposed the first global framework for ethical AI. The initiative aims to promote transparency, fairness, and accountability in AI.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 23, 2023",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Unveils GPT-4: Even More Powerful Language Model",
    "description": "OpenAI has released GPT-4, its latest language model. The AI tool is expected to dramatically enhance a range of applications, from chatbots to content generation.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "March 23, 2023",
    "category": "Tools"
  }
];
