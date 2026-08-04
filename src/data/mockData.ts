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
    "title": "AI Breaks New Ground in Quantum Physics Research",
    "description": "Artificial intelligence is taking quantum physics by storm, with new AI models capable of predicting complex quantum systems. This breakthrough could pave the way for advanced research in multiple scientific disciplines.",
    "url": "#",
    "source": "The Science Times",
    "date": "October 10, 2022",
    "category": "Research"
  },
  {
    "title": "Revolutionizing Healthcare: AI Takes on Disease Prediction",
    "description": "In a major stride for healthcare, AI algorithms are now able to predict the onset of serious diseases with unprecedented accuracy. This technology may lead to significant advancements in early detection and prevention efforts.",
    "url": "#",
    "source": "HealthTech Magazine",
    "date": "October 10, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Acquires AI Startup in Multimillion Deal",
    "description": "In a strategic move, a leading tech company has acquired an up-and-coming AI startup. The acquisition is set to bolster the tech giant's capabilities in machine learning and data analysis.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 10, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: A New Framework for Responsible AI Development",
    "description": "A group of researchers have proposed a new framework for the ethical development and use of AI. This initiative seeks to address AI's potential impact on society and human rights.",
    "url": "#",
    "source": "Tech Ethics Journal",
    "date": "October 10, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI for Everyone: New Tool Simplifies Machine Learning",
    "description": "A new tool aims to make machine learning more accessible, allowing users with no coding experience to build and train AI models. The tool's release could democratize access to AI technologies.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 10, 2022",
    "category": "Tools"
  }
];
