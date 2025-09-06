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
    "title": "AI Breaks Ground with Quantum Computing Integration",
    "description": "Researchers have made a significant breakthrough by successfully integrating AI with quantum computing. This could potentially revolutionize the speed and efficiency of AI processing capabilities.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "November 23, 2021",
    "category": "Research"
  },
  {
    "title": "AI Startup Raises Millions for Innovative Speech Recognition Technology",
    "description": "A rising AI startup has raised significant funding for its unique speech recognition technology that promises to greatly enhance voice-activated AI systems.",
    "url": "#",
    "source": "Forbes",
    "date": "November 23, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A new AI tool has been developed that can accurately predict the impact of climate change. The tool will aid in creating effective strategies against global warming.",
    "url": "#",
    "source": "Nature",
    "date": "November 23, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI in Military Applications",
    "description": "As AI's role in military applications grows, so too do the ethical concerns. Experts call for clear guidelines and regulations to govern the use of AI in warfare.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 23, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Revolutionizes Medical Diagnostics",
    "description": "AI is set to transform the field of medical diagnostics, with a new system that can detect diseases more quickly and accurately than ever before.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 23, 2021",
    "category": "Technology"
  }
];
