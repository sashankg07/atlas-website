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
    "title": "AI Predicts Alzheimer’s Disease Years Before Diagnosis",
    "description": "New research reveals that artificial intelligence could predict Alzheimer's years before doctors. This breakthrough could lead to early intervention and treatment, potentially leading to better outcomes for patients.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 11, 2021",
    "category": "Research"
  },
  {
    "title": "Leading Tech Company Unveils Powerful New AI Chip",
    "description": "A global tech giant has recently unveiled their latest AI chip, promising unmatched machine learning capabilities. The chip is expected to revolutionize various industries, from healthcare to logistics.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 11, 2021",
    "category": "Technology"
  },
  {
    "title": "Artificial Intelligence Shakes Up the Finance Industry",
    "description": "AI is making waves in the finance industry, with businesses adopting machine learning algorithms for risk assessment, fraud detection, and financial planning. It's a trend that's set to transform the industry.",
    "url": "#",
    "source": "Forbes",
    "date": "November 11, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Exploring the Ethical Implications of AI in Law Enforcement",
    "description": "As law enforcement agencies increasingly turn to AI to aid in their work, new questions arise regarding privacy, bias, and accountability. This highlights the need for robust ethical frameworks around AI use.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 11, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Revolutionize Graphic Design",
    "description": "A suite of AI-powered tools is changing the landscape of graphic design, allowing artists to create high-quality work in less time. These tools are accessible to professionals and novices alike.",
    "url": "#",
    "source": "Wired",
    "date": "November 11, 2021",
    "category": "Tools"
  }
];
