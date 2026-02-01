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
    "title": "Revolutionizing Healthcare: AI Predicts Heart Disease with Unprecedented Accuracy",
    "description": "Researchers have developed an AI model that can predict the onset of heart disease with 95% accuracy. This breakthrough could potentially save millions of lives every year.",
    "url": "#",
    "source": "AI Today",
    "date": "October 04, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Accelerates Drug Discovery",
    "description": "A cutting-edge AI tool has been designed to accelerate the drug discovery process. The technology can accurately predict the effectiveness of new drugs, significantly reducing the time and cost of clinical trials.",
    "url": "#",
    "source": "Tech Times",
    "date": "October 04, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M in Series C Funding",
    "description": "AI startup, BrainWave, has successfully raised $100 million in Series C funding. The company plans to use the funding to expand its AI capabilities and enter new markets.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 04, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: Balancing Innovation and Human Rights",
    "description": "As AI continues to advance, experts are calling for policies that balance technological innovation with human rights. This includes ethical guidelines on the use of AI in surveillance and decision-making.",
    "url": "#",
    "source": "The AI Ethics Journal",
    "date": "October 04, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI’s Next Frontier: Self-Taught Machines",
    "description": "A new AI model, capable of learning without human supervision, has been developed. This represents a significant step towards truly autonomous AI systems.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "October 04, 2021",
    "category": "Tools"
  }
];
