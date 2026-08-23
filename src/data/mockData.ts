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
    "title": "AI Breaks New Ground in Medical Diagnostics",
    "description": "A recent breakthrough in AI technology has led to the development of a new tool that can accurately diagnose a range of medical conditions. The tool is expected to revolutionize the healthcare industry.",
    "url": "#",
    "source": "The New York Times",
    "date": "April 21, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Predicts Climate Change Impacts More Accurately",
    "description": "Researchers have developed a new AI model that predicts the effects of climate change with unprecedented accuracy. This could significantly improve our ability to prepare for future climate scenarios.",
    "url": "#",
    "source": "Nature",
    "date": "April 21, 2022",
    "category": "Research"
  },
  {
    "title": "E-commerce Giants Leverage AI for Efficient Supply Chain Management",
    "description": "Major e-commerce companies are now employing AI-powered solutions to streamline their supply chain operations, leading to increased efficiency and reduced costs.",
    "url": "#",
    "source": "Forbes",
    "date": "April 21, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Proposed",
    "description": "In light of increasing concerns about the impact of AI on society, a new set of ethical guidelines for AI development and use has been proposed by leading AI researchers.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 21, 2022",
    "category": "Ethics"
  },
  {
    "title": "Revolutionary AI-powered Editing Tool Launched",
    "description": "A new AI-powered editing tool that promises to make content creation easier for writers and editors alike has been launched. The tool uses machine learning to suggest improvements in real-time.",
    "url": "#",
    "source": "TechCrunch",
    "date": "April 21, 2022",
    "category": "Tools"
  }
];
