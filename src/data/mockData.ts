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
    "title": "AI Breakthrough: New Algorithm Learns to Understand Context",
    "description": "Researchers have developed an AI algorithm capable of understanding context in human conversations, marking a significant leap in AI language processing capabilities. The breakthrough may open new possibilities in customer service, personal assistants, and mental health applications.",
    "url": "#",
    "source": "The AI Times",
    "date": "October 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Climate Prediction Models Show Promising Results",
    "description": "Climate researchers have started using AI to create more accurate predictions of climate change. The AI models are showing promising results, potentially revolutionizing our ability to forecast and mitigate the effects of climate change.",
    "url": "#",
    "source": "TechNews Daily",
    "date": "October 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Investments Skyrocket: The Next Frontier for Businesses",
    "description": "Investments in AI have dramatically increased in 2021 as businesses look to leverage AI in streamlining operations and driving innovation. This trend underlines the growing recognition of AI as a key factor in future business success.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: New Guidelines for Responsible AI Usage",
    "description": "A leading tech ethics body has released new guidelines for the responsible use of AI. The guidelines aim to address concerns over privacy, fairness, and transparency in AI applications.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "Launch of AI Tool Simplifies Machine Learning for Non-Techies",
    "description": "A new AI tool that simplifies machine learning processes for non-technical users has been launched. The tool aims to democratize access to AI, allowing more people to benefit from its capabilities.",
    "url": "#",
    "source": "TechRadar",
    "date": "October 30, 2021",
    "category": "Tools"
  }
];
