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
    "title": "AI Transforms Drug Discovery Landscape",
    "description": "Innovative AI algorithms are expediting the drug discovery process, promising faster and more effective treatments. The technology provides a significant boost to precision medicine.",
    "url": "#",
    "source": "Nature",
    "date": "December 10, 2021",
    "category": "Research"
  },
  {
    "title": "AI and Climate Change: A Potential Game Changer",
    "description": "Artificial Intelligence is being leveraged to tackle issues of climate change. Machine learning models are predicting and analyzing environmental patterns with impressive accuracy.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 10, 2021",
    "category": "Technology"
  },
  {
    "title": "The Rise of AI in the Business World",
    "description": "Modern businesses are rapidly adopting AI to streamline operations and enhance customer experience. The technology is proving to be a valuable asset in decision-making processes.",
    "url": "#",
    "source": "Forbes",
    "date": "December 10, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI Adoption",
    "description": "As AI becomes increasingly prevalent, ethical concerns are gaining prominence. The debate around privacy and bias in AI continues to grow.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 10, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Revolutionize Data Analysis",
    "description": "The advent of powerful AI tools is transforming data analysis. These tools are enabling data scientists to extract more insightful information from complex data sets.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 10, 2021",
    "category": "Tools"
  }
];
