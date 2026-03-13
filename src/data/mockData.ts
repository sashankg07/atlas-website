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
    "title": "AI Revolutionizes Cancer Treatment",
    "description": "Recent developments in AI technology have led to breakthroughs in cancer diagnosis and treatment. AI algorithms are now capable of identifying cancerous cells with remarkable accuracy.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 16, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Launches New AI-powered Product",
    "description": "A leading technology company has unveiled its latest AI-powered product, setting new standards for speed, efficiency, and user-friendliness. The product will make AI accessible to a wider consumer base.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 16, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startups Boom in 2021",
    "description": "This year saw a significant increase in venture capital funding for AI startups. This trend reflects growing confidence in AI's potential to transform various industries.",
    "url": "#",
    "source": "Forbes",
    "date": "December 16, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Addressing Ethical Concerns in AI",
    "description": "The rapid development of AI technologies has sparked a global conversation about ethics and regulation. Experts call for increased transparency and accountability in AI systems.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 16, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transform Data Analysis",
    "description": "A suite of new AI tools is revolutionizing data analysis, offering unprecedented insights and predictive capabilities. These tools promise to democratize data science.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 16, 2021",
    "category": "Tools"
  }
];
