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
    "title": "AI Breakthrough in Climate Change Modelling",
    "description": "Researchers have used AI to significantly improve climate change models, providing more accurate predictions. This development could have profound implications for our understanding of the climate crisis.",
    "url": "#",
    "source": "AI Weekly",
    "date": "October 05, 2021",
    "category": "Research"
  },
  {
    "title": "AI Empowers New Age of Personalized Medicine",
    "description": "AI is revolutionizing healthcare with personalized medicine, enabling doctors to tailor treatments to individual patients. This could significantly improve patient outcomes and reduce healthcare costs.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 05, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M for Autonomous Delivery Drones",
    "description": "An AI startup has raised $100 million in funding to develop autonomous delivery drones. The company aims to transform the logistics industry with its groundbreaking technology.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 05, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Development Released",
    "description": "A leading tech organization has released new ethical guidelines for AI development. The guidelines aim to ensure AI technologies are developed and used responsibly.",
    "url": "#",
    "source": "The Verge",
    "date": "October 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A new AI tool is transforming data analysis by automating complex tasks. The tool allows data scientists to focus on high-level analysis, increasing efficiency and productivity.",
    "url": "#",
    "source": "AI Trends",
    "date": "October 05, 2021",
    "category": "Tools"
  }
];
