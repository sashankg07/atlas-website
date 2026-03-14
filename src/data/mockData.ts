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
    "title": "AI Breakthrough: Neural Networks Decode Brain Activity",
    "description": "Researchers have developed an AI model that can interpret human brain activity with unprecedented accuracy. The new development could revolutionize neurology and the treatment of neurological disorders.",
    "url": "#",
    "source": "Nature Neuroscience",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "New AI System Predicts Climate Change Impact More Precisely",
    "description": "A groundbreaking AI technology has been developed that can predict the impacts of climate change with unparalleled precision. This could help governments and organizations to prepare more effectively for future scenarios.",
    "url": "#",
    "source": "Science Daily",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "Google Unleashes Quantum AI Capabilities for Business",
    "description": "Google has announced the launch of its Quantum AI services for businesses, aiming to revolutionize industries with its superior computing capabilities. This step is expected to provide a significant boost to the tech giant's AI portfolio.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: The Debate Over Facial Recognition Technology",
    "description": "As facial recognition technology becomes increasingly sophisticated, the ethical implications of its use are under intense scrutiny. Governments and corporations are grappling with the balance between security and privacy.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Launches Powerful Language Model API",
    "description": "OpenAI has launched a new language model API that promises to bring human-like text generation to more developers. This tool could significantly improve the quality of conversational AI and other language-based applications.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
