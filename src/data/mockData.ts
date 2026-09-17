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
    "title": "Groundbreaking AI Algorithm Predicts Climate Change Patterns",
    "description": "Scientists have developed a revolutionary AI algorithm capable of predicting climate change patterns with unprecedented accuracy. The breakthrough could greatly enhance our ability to prepare for climate disasters.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 21, 2022",
    "category": "Research"
  },
  {
    "title": "AI Software Outperforms Humans in Coding Competition",
    "description": "In a milestone for artificial intelligence, an AI software has outperformed human participants in a global coding competition. The AI's success indicates potential for AI in software development and debugging.",
    "url": "#",
    "source": "Wired",
    "date": "September 21, 2022",
    "category": "Technology"
  },
  {
    "title": "Startup Uses AI to Streamline Supply Chain Processes",
    "description": "A promising startup is leveraging AI to streamline supply chain processes, promising to reduce costs and increase efficiency. The company's AI-powered platform has already attracted significant venture capital interest.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 21, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Ethical Guidelines Released by AI Ethics Institute",
    "description": "The AI Ethics Institute has released a new set of guidelines aimed at governing the ethical use of AI. The guidelines focus on maintaining transparency and reducing bias in AI systems.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 21, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Transforms Sketches into Realistic Images",
    "description": "A new AI tool is making waves by transforming simple sketches into photorealistic images. The tool, which is free to use, opens up new possibilities for artists and designers.",
    "url": "#",
    "source": "BBC News",
    "date": "September 21, 2022",
    "category": "Tools"
  }
];
