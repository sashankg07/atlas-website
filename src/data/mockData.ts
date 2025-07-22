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
    "title": "AI Revolutionizes Medical Diagnostics",
    "description": "A recent breakthrough in AI technology has led to the development of advanced diagnostic algorithms. These algorithms can predict diseases with a higher level of accuracy than ever before.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Helps in Climate Change Mitigation",
    "description": "Scientists have developed a novel AI system that can accurately predict the impacts of climate change, thus aiding in the formulation of effective climate policies.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Heavily in AI",
    "description": "Tech giants like Google and Apple continue to invest heavily in AI research and development, signaling a promising future for the industry.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Guidelines for AI Development Proposed",
    "description": "Leading AI researchers propose new ethical guidelines for AI development to ensure that the technology is used for the benefit of all humanity.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Business Processes",
    "description": "A new AI tool has been developed that can automate and streamline various business processes, leading to increased productivity and efficiency.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
