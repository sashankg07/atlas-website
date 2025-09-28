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
    "title": "AI Beats Humans at Chess, Poker and Now, Computer Programming",
    "description": "Researchers at OpenAI have developed an AI model that can write code better than its human counterparts. This breakthrough could revolutionize software development in the near future.",
    "url": "#",
    "source": "New York Times",
    "date": "December 17, 2021",
    "category": "Research"
  },
  {
    "title": "Google's New AI Tool Predicts Weather Patterns with Unprecedented Accuracy",
    "description": "Google has developed a new AI tool that predicts weather patterns with an accuracy previously unseen. This tool could help in addressing the challenges presented by climate change.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 17, 2021",
    "category": "Technology"
  },
  {
    "title": "Facebook's AI Investment Sees Significant Returns",
    "description": "Facebook's significant investment in AI technology has seen exceptional returns, with AI-driven features boosting user engagement and ad revenue.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "December 17, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI's Role in Bias and Discrimination",
    "description": "As AI technology becomes more prevalent, it brings along ethical concerns. Critics argue the technology can perpetuate bias and discrimination if not properly managed.",
    "url": "#",
    "source": "The Economist",
    "date": "December 17, 2021",
    "category": "Ethics"
  },
  {
    "title": "Microsoft Introduces New AI Debugging Tool",
    "description": "Microsoft has launched a new AI-driven tool that assists developers in debugging their code more efficiently. The tool promises to significantly reduce debugging time and improve productivity.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 17, 2021",
    "category": "Tools"
  }
];
