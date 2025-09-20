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
    "title": "AI Breaks New Ground in Quantum Computing",
    "description": "Researchers have developed an AI that can solve complex quantum computing problems, pushing the boundaries of what these futuristic machines can do. This development paves the way for vast improvements in computational power.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 07, 2022",
    "category": "Research"
  },
  {
    "title": "AI Now Predicts Climate Change Patterns With Unprecedented Accuracy",
    "description": "A new AI model is helping scientists predict climate change patterns with a level of precision previously thought impossible. This breakthrough could play a crucial role in our understanding of Earth's future climate.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 07, 2022",
    "category": "Technology"
  },
  {
    "title": "Startup Uses AI to Revolutionize Supply Chain Management",
    "description": "A promising startup is leveraging AI to optimize supply chains, helping businesses navigate the ongoing global logistics challenges. The technology promises to minimize disruptions and increase efficiency.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 07, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: The New Frontier in Technology Regulation",
    "description": "As AI continues to play a larger role in our everyday lives, the ethics surrounding its use become more critical. Governments worldwide are now considering legislation to ensure AI development adheres to ethical standards.",
    "url": "#",
    "source": "The Washington Post",
    "date": "October 07, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms the World of Graphic Design",
    "description": "A newly launched AI tool is set to transform graphic design, with capabilities to generate creative designs within seconds. It could democratize design by making it more accessible to non-professionals.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 07, 2022",
    "category": "Tools"
  }
];
