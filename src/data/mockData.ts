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
    "title": "AI Breaks Ground with Unprecedented Language Understanding Capabilities",
    "description": "A new AI model has demonstrated an unprecedented understanding of natural language, outperforming previous models in benchmark tests. The development could revolutionize how we interact with AI, from customer service to personal assistants.",
    "url": "#",
    "source": "The AI Journal",
    "date": "October 29, 2021",
    "category": "Research"
  },
  {
    "title": "Groundbreaking AI Tool Predicts Climate Change Impact",
    "description": "Scientists have developed an AI tool that can accurately predict the impact of climate change. The tool could be instrumental in helping policymakers make informed decisions about climate change mitigation strategies.",
    "url": "#",
    "source": "Science Daily",
    "date": "October 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises Millions in Funding for Healthcare Innovation",
    "description": "A promising AI startup has secured millions in funding to develop AI solutions for healthcare. The company aims to improve diagnostics and treatment plans through machine learning.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: Navigating the Challenges of Bias and Fairness",
    "description": "As AI becomes increasingly integrated into our lives, the issue of bias and fairness has come to the forefront. Experts discuss potential solutions and the importance of transparency in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI Tools for Developers",
    "description": "Google has launched a suite of new AI tools for developers, aimed at making AI development more accessible and efficient. The tools will help developers create AI applications with less coding.",
    "url": "#",
    "source": "CNET",
    "date": "October 29, 2021",
    "category": "Tools"
  }
];
