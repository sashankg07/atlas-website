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
    "title": "Revolutionary AI Model Predicts Climate Change Patterns",
    "description": "Recent developments in AI technology have led to a breakthrough model that accurately predicts climate change patterns. This could significantly aid in our efforts to tackle global warming.",
    "url": "#",
    "source": "Nature",
    "date": "September 15, 2022",
    "category": "Research"
  },
  {
    "title": "AI: The New Frontier in Cybersecurity",
    "description": "As cyber threats evolve, AI is playing an increasingly crucial role in cybersecurity. AI-driven systems are now capable of detecting and neutralizing threats with unprecedented speed and accuracy.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 15, 2022",
    "category": "Technology"
  },
  {
    "title": "Big Tech Invests in AI for Healthcare Solutions",
    "description": "Major tech companies are investing heavily in AI to revolutionize healthcare. These developments promise improved diagnostics, personalized treatment, and increased accessibility to quality care.",
    "url": "#",
    "source": "Forbes",
    "date": "September 15, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Guidelines for AI Development Under Scrutiny",
    "description": "The increasing presence of AI in society has drawn attention to the ethical guidelines governing its development. Recent debates highlight the need for transparency, fairness, and accountability in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 15, 2022",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Launches New AI Tool for Language Processing",
    "description": "OpenAI has launched a new AI tool that promises to transform language processing. The tool is expected to greatly enhance machine understanding and generation of human language.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 15, 2022",
    "category": "Tools"
  }
];
