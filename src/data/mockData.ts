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
    "title": "AI Revolutionizing Medical Diagnostics",
    "description": "Recent advancements in AI technology are set to transform the field of medical diagnostics. Machine learning algorithms now have the potential to detect diseases with a higher degree of accuracy than ever before.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 29, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Chip Accelerates Machine Learning",
    "description": "Tech giant Intel has unveiled a new AI chip that promises to dramatically speed up machine learning processes, potentially leading to significant advancements in AI capabilities.",
    "url": "#",
    "source": "The Verge",
    "date": "September 29, 2022",
    "category": "Technology"
  },
  {
    "title": "AI in Retail: The Future of Shopping",
    "description": "From personalized recommendations to virtual fitting rooms, the use of AI in the retail industry is reshaping the way we shop. This technology promises to provide a more personalized and efficient shopping experience.",
    "url": "#",
    "source": "Forbes",
    "date": "September 29, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI in Surveillance",
    "description": "As more governments and companies utilize AI in surveillance systems, concerns about privacy and ethics are growing. Experts call for stricter regulations to prevent misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Simplifies Data Analysis",
    "description": "A new AI tool promises to make data analysis easier for businesses by automating the process of data cleaning and preparation. The tool aims to save time and improve the accuracy of data-driven decision making.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2022",
    "category": "Tools"
  }
];
