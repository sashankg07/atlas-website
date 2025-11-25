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
    "title": "AI Breakthrough in Drug Discovery",
    "description": "A groundbreaking development in AI has resulted in an algorithm that can predict new potential drugs, revolutionizing the pharmaceutical industry. The AI model, known as a 'drug discovery engine', can hypothesize new drug molecules.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 11, 2021",
    "category": "Research"
  },
  {
    "title": "AI Transforming the World of Finance",
    "description": "Artificial Intelligence has begun to make a significant impact on the financial industry. From risk assessment to automated investing, AI is providing new ways to analyze and interpret financial data.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "November 11, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released",
    "description": "A leading technology think-tank has released a comprehensive set of recommendations for AI ethics. These guidelines aim to ensure AI development is conducted responsibly and ethically, protecting user privacy and security.",
    "url": "#",
    "source": "BBC News",
    "date": "November 11, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Now Capable of More Advanced Image Recognition",
    "description": "Researchers have developed an AI model capable of recognizing images with unprecedented accuracy. This breakthrough could have significant implications for fields ranging from security to healthcare.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 11, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Programming Tool Eases Development Process",
    "description": "A new tool using AI to assist in programming can write lines of code in response to natural language requests, making the development process more efficient. This tool is set to revolutionize the way we code.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 11, 2021",
    "category": "Tools"
  }
];
