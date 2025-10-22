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
    "title": "AI Breakthrough: Facebook's New AI Can 'See' In the Dark",
    "description": "Facebook's latest AI model can accurately reconstruct images taken in almost total darkness, a significant leap forward in computer vision technology. This technology could revolutionize night-time photography, security systems, and more.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 05, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Uncovers New Antibiotic to Fight Superbugs",
    "description": "Researchers at MIT have used machine learning to discover a new antibiotic compound. This breakthrough could pave the way for AI-assisted drug discovery, potentially revolutionizing the pharmaceutical industry.",
    "url": "#",
    "source": "BBC News",
    "date": "December 05, 2021",
    "category": "Research"
  },
  {
    "title": "Google's AI Ethics Scandal: A Timeline",
    "description": "Google's handling of AI ethics research and its treatment of prominent researchers have come under scrutiny. This article provides a detailed timeline of the unfolding controversy.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 05, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Business: The Rise of Predictive Analytics",
    "description": "More and more businesses are leveraging the power of AI for predictive analytics. This trend is reshaping multiple industries, from finance to healthcare, enabling data-driven decision making like never before.",
    "url": "#",
    "source": "Forbes",
    "date": "December 05, 2021",
    "category": "Business"
  },
  {
    "title": "OpenAI's GPT-3: The State-of-the-Art Language Model",
    "description": "OpenAI's GPT-3, the latest in a line of impressive language AI models, is pushing the boundaries of what's possible in natural language processing. The model can generate incredibly human-like text, opening up a wealth of potential applications.",
    "url": "#",
    "source": "Wired",
    "date": "December 05, 2021",
    "category": "Tools"
  }
];
