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
    "title": "AI Breaks New Ground in Disease Diagnosis",
    "description": "Revolutionizing the field of medical diagnosis, an AI model has demonstrated the ability to accurately detect diseases from medical imaging. This breakthrough has the potential to speed up diagnosis and treatment.",
    "url": "#",
    "source": "The AI Times",
    "date": "October 27, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Next-Gen AI Processor",
    "description": "One of the leading tech companies has revealed a new AI processor with enhanced capabilities and efficiency. The new chip promises to accelerate AI research and implementation.",
    "url": "#",
    "source": "AI Daily",
    "date": "October 27, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises Millions in Funding Round",
    "description": "A promising AI startup has secured millions in its latest funding round. The startup aims to leverage AI to provide innovative solutions for businesses.",
    "url": "#",
    "source": "Business Insider AI",
    "date": "October 27, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines for Ethical AI Unveiled",
    "description": "In a bid to ensure responsible AI usage, a renowned body has released new guidelines. These comprehensive guidelines focus on AI ethics and responsible AI development.",
    "url": "#",
    "source": "AI Ethics Weekly",
    "date": "October 27, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Releases New Language Processing Tool",
    "description": "OpenAI has launched a new language processing tool that promises to revolutionize AI-assisted writing. The tool is expected to greatly enhance the capabilities of AI in content generation.",
    "url": "#",
    "source": "TechCrunch AI",
    "date": "October 27, 2021",
    "category": "Tools"
  }
];
