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
    "title": "AI Revolutionizes Disease Diagnosis - A New Era in Medical Science",
    "description": "Recent advancements in AI have made disease diagnosis faster, more accurate, and less invasive. This new technology could help reduce human error and speed up the treatment process.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 10, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Business: Unprecedented Growth in Efficiency",
    "description": "Companies worldwide are adopting AI to streamline their operations and improve efficiency. This shift is creating a highly competitive market, pushing businesses to innovate faster than ever.",
    "url": "#",
    "source": "Forbes",
    "date": "October 10, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Balancing Innovation with Responsibility",
    "description": "As AI becomes increasingly integrated into our daily lives, ethical considerations are more important than ever. Policymakers and tech companies are working together to ensure AI is developed and used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 10, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Transforms Digital Content Creation",
    "description": "A groundbreaking AI tool has been developed that simplifies the process of creating digital content. This could revolutionize the way artists, designers, and marketers work.",
    "url": "#",
    "source": "Wired",
    "date": "October 10, 2022",
    "category": "Tools"
  },
  {
    "title": "AI and Quantum Computing: A Powerful Combination",
    "description": "Recent research combines AI and quantum computing to solve complex problems faster. This breakthrough could lead to significant advancements in various fields, including medicine, finance, and climate science.",
    "url": "#",
    "source": "Nature",
    "date": "October 10, 2022",
    "category": "Technology"
  }
];
