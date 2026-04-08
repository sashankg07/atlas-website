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
    "title": "Quantum AI Breaks New Ground in Machine Learning",
    "description": "Scientists have developed a new quantum machine learning algorithm that outperforms classical methods. This could revolutionize AI, opening up a whole new way to process information.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 27, 2022",
    "category": "Research"
  },
  {
    "title": "AI-Powered Robots to Assist in Construction Projects",
    "description": "A leading tech company has introduced AI-powered robots designed to assist in large-scale construction projects. The robots are intended to streamline operations and improve worker safety.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 27, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Raises $100M in Series B Funding",
    "description": "An innovative AI start-up has successfully raised $100 million in its latest funding round. The funds will be used to expand its AI solutions across various industries.",
    "url": "#",
    "source": "Forbes",
    "date": "September 27, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Progress and Human Rights",
    "description": "As AI continues to evolve, experts call for a balance between technological progress and human rights. They stress the importance of ethical guidelines in AI development.",
    "url": "#",
    "source": "New York Times",
    "date": "September 27, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Revolutionizes Image Recognition",
    "description": "A newly developed AI tool enhances image recognition, with potential applications in healthcare, agriculture, and security. The tool promises to make image-based AI systems more accurate and efficient.",
    "url": "#",
    "source": "The Verge",
    "date": "September 27, 2022",
    "category": "Tools"
  }
];
