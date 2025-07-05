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
    "title": "AI's Revolutionary Role in Disease Diagnosis",
    "description": "Recent developments in AI technology have led to breakthroughs in disease diagnosis, enabling faster and more accurate results. This could change the face of healthcare as we know it.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "Integrating AI in Everyday Appliances: The Future is Here",
    "description": "Companies are now integrating AI into everyday appliances, creating smart homes that learn and adapt to user behavior. This heralds a new era in home technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: The New Competitive Advantage",
    "description": "Businesses are leveraging AI to gain a competitive edge, using it to improve efficiency, drive innovation, and create personalized customer experiences.",
    "url": "#",
    "source": "Forbes",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: Balancing Progress with Caution",
    "description": "As AI continues to advance, ethicists are grappling with the implications of these technologies, urging the industry to balance progress with ethical considerations.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transforming the Landscape of Graphic Design",
    "description": "New AI-powered tools are revolutionizing graphic design, automating complex processes and allowing designers to focus on creativity and innovation.",
    "url": "#",
    "source": "Adobe Blog",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
