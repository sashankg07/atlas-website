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
    "title": "AI Breaks Ground in Predicting Climate Change Effects",
    "description": "Researchers have developed a new AI model capable of predicting the effects of climate change more accurately and efficiently. The model can simulate complex environmental phenomena that were previously difficult to predict.",
    "url": "#",
    "source": "Nature",
    "date": "October 15, 2021",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizing Customer Experience in E-commerce",
    "description": "AI is transforming the e-commerce landscape by enhancing customer experience through personalized recommendations and streamlined operations. Businesses are leveraging machine learning algorithms to understand customer behavior better.",
    "url": "#",
    "source": "Forbes",
    "date": "October 15, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Helps Detect Early Stages of Parkinson's",
    "description": "A groundbreaking AI tool has been developed that can detect early stages of Parkinson's disease. The tool uses machine learning algorithms to analyze speech patterns and detect subtle changes associated with the disease.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 15, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI: A Rising Concern",
    "description": "The growing use of AI has sparked a global conversation about ethics in technology. Issues such as privacy, bias, and accountability have become central to discussions on AI's future.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 15, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Model, GPT-4",
    "description": "OpenAI has released its latest language model, GPT-4, promising better text generation and understanding. The model is expected to significantly impact various fields, like content creation, customer service, and more.",
    "url": "#",
    "source": "The Verge",
    "date": "October 15, 2021",
    "category": "Tools"
  }
];
