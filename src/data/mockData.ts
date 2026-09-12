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
    "title": "AI Reaches New Heights in Predicting Alzheimer's",
    "description": "Scientists have developed an AI model that can predict the onset of Alzheimer's disease with unprecedented accuracy. This groundbreaking technology could revolutionize early detection and treatment strategies.",
    "url": "#",
    "source": "Nature Neuroscience",
    "date": "October 13, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Next-Gen AI Chip",
    "description": "A leading tech company has unveiled their new AI chip, which boasts faster processing speeds and more efficient power usage. This development could propel forward advancements in machine learning.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "October 13, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Raises $100M in Series B Funding",
    "description": "An emerging AI start-up has secured substantial series B funding, validating the increasing investment interest in artificial intelligence. The funds will be used to expand their machine learning capabilities and global reach.",
    "url": "#",
    "source": "Forbes",
    "date": "October 13, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: The New Frontier",
    "description": "As AI becomes more integrated into daily life, discussions around ethical AI are more critical than ever. Experts are calling for comprehensive guidelines to ensure the fair and responsible use of AI.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 13, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Text to Speech",
    "description": "A new AI tool capable of converting text to lifelike speech has been launched. This technology opens up exciting possibilities for accessibility and communication applications.",
    "url": "#",
    "source": "Wired",
    "date": "October 13, 2021",
    "category": "Tools"
  }
];
