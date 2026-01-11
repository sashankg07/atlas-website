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
    "title": "AI Breakthrough: New Algorithm Mimics Human Learning",
    "description": "Researchers have developed a new AI algorithm that mimics the learning patterns of the human brain. This breakthrough could revolutionize how AI systems learn and adapt over time.",
    "url": "#",
    "source": "Scientific American",
    "date": "November 24, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils AI-Powered Virtual Assistant",
    "description": "A leading technology company has unveiled a new AI-powered virtual assistant. The new tool is expected to significantly streamline tasks and enhance productivity for users.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 24, 2021",
    "category": "Technology"
  },
  {
    "title": "Artificial Intelligence Transforming the Business Landscape",
    "description": "AI is drastically reshaping the business landscape, with many companies adopting AI-driven solutions to optimize operations and improve customer experience.",
    "url": "#",
    "source": "Business Insider",
    "date": "November 24, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Innovation and Responsibility",
    "description": "As AI technology advances, ethical considerations come to the forefront. Experts stress the importance of balancing innovation with responsibility to ensure AI serves humanity in a beneficial way.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 24, 2021",
    "category": "Ethics"
  },
  {
    "title": "Revolutionary AI Tools Enhance Data Analysis",
    "description": "New AI tools are revolutionizing data analysis, enabling businesses to extract valuable insights from their data like never before. These advancements are predicted to drastically improve decision-making processes across various sectors.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 24, 2021",
    "category": "Tools"
  }
];
