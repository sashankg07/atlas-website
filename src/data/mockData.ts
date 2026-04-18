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
    "title": "AI Revolutionizes Healthcare Diagnostics",
    "description": "Groundbreaking AI technology is transforming the healthcare sector by enabling faster and more accurate diagnostics. This development is expected to significantly improve patient outcomes and reduce healthcare costs.",
    "url": "#",
    "source": "AI Today",
    "date": "November 03, 2021",
    "category": "Technology"
  },
  {
    "title": "IBM's New AI Model Predicts Climate Change Impact",
    "description": "IBM's latest AI model is set to revolutionize climate change predictions. The model can accurately forecast the impact of climate change on local environments around the globe.",
    "url": "#",
    "source": "The AI Journal",
    "date": "November 03, 2021",
    "category": "Research"
  },
  {
    "title": "Ethical Implications of AI in Surveillance Explored",
    "description": "As AI technology becomes increasingly integrated into surveillance systems, concerns about privacy and ethics are rising. Experts call for stricter regulations and transparent practices.",
    "url": "#",
    "source": "AI News Network",
    "date": "November 03, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Startups Booming Amid Pandemic",
    "description": "The AI startup scene is experiencing significant growth, with investors pouring in billions of dollars despite the ongoing pandemic. This trend underscores the increasing relevance of AI across various industries.",
    "url": "#",
    "source": "AI Business Times",
    "date": "November 03, 2021",
    "category": "Business"
  },
  {
    "title": "Google's New AI Tool Helps Preserve Endangered Languages",
    "description": "Google's latest AI tool aims to preserve endangered languages by using AI to understand, translate, and teach these languages. The tool could play a crucial role in cultural preservation.",
    "url": "#",
    "source": "AI Tech News",
    "date": "November 03, 2021",
    "category": "Tools"
  }
];
