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
    "title": "New AI Model Predicts Climate Change Impact",
    "description": "Researchers have developed an innovative AI model capable of predicting long-term climate patterns. This breakthrough could have significant implications for future climate change policy and planning.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 10, 2022",
    "category": "Research"
  },
  {
    "title": "AI Startup Raises $100M for Retail Automation",
    "description": "An AI startup has raised $100 million in Series B funding to further its mission of automating retail processes through AI. The funding will be used to refine the AI's learning capabilities and expand operations.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 10, 2022",
    "category": "Business"
  },
  {
    "title": "AI Takes Center Stage in Cancer Detection",
    "description": "A new study reveals that AI models can accurately detect cancer from medical images, potentially revolutionizing early detection and treatment. The AI system outperformed human doctors in identifying certain types of cancer.",
    "url": "#",
    "source": "Scientific American",
    "date": "November 10, 2022",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Guidelines for AI Deployment Unveiled",
    "description": "A leading tech company has released a comprehensive set of ethical guidelines for AI deployment. The document aims to guide developers and policymakers in ensuring AI systems are used responsibly and fairly.",
    "url": "#",
    "source": "The Verge",
    "date": "November 10, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Image Processing",
    "description": "A new AI tool has been launched that simplifies the process of editing and optimizing images. The tool uses machine learning techniques to automate routine tasks, saving users time and effort.",
    "url": "#",
    "source": "Wired",
    "date": "November 10, 2022",
    "category": "Tools"
  }
];
