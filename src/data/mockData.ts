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
    "title": "AI Breakthrough: Machine Learning Deciphers Long Lost Languages",
    "description": "Researchers have recently developed an AI that can translate long-lost languages. The breakthrough could revolutionize the way we understand ancient civilizations.",
    "url": "#",
    "source": "The AI Journal",
    "date": "November 07, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Climate Change: A Powerful Tool or a Double-Edged Sword?",
    "description": "While AI has the potential to significantly aid in combating climate change, its energy consumption presents an ethical dilemma. Understanding this paradox is crucial in the era of sustainability.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 07, 2021",
    "category": "Ethics"
  },
  {
    "title": "Revolutionizing Retail: AI-Powered Shopping Experiences on the Rise",
    "description": "The integration of AI in retail is transforming shopping into a personalized experience. Retailers leveraging AI technologies have seen significant improvements in customer engagement and sales.",
    "url": "#",
    "source": "Forbes",
    "date": "November 07, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Innovation: New Tool Predicts Protein Structures",
    "description": "A new AI tool has been developed that accurately predicts protein structures. This could have far-reaching implications in drug discovery and biology.",
    "url": "#",
    "source": "Nature",
    "date": "November 07, 2021",
    "category": "Tools"
  },
  {
    "title": "Next-Gen AI: Quantum Computing Enhances Machine Learning",
    "description": "Quantum computing is set to revolutionize AI by significantly enhancing machine learning capabilities. This could lead to more efficient problem-solving and data processing.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 07, 2021",
    "category": "Technology"
  }
];
