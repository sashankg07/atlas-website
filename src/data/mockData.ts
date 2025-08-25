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
    "title": "AI Revolutionizes Medical Imaging",
    "description": "Researchers have made a breakthrough in using AI for medical imaging, increasing the speed and accuracy of diagnoses. This innovation promises a new era of healthcare delivery.",
    "url": "#",
    "source": "Nature",
    "date": "September 22, 2022",
    "category": "Research"
  },
  {
    "title": "AI Empowers Renewable Energy Management",
    "description": "A new AI platform can predict energy production and demand with unprecedented precision, promising a greener future. This may pave the way for optimized renewable energy management.",
    "url": "#",
    "source": "IEEE Spectrum",
    "date": "September 22, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Raises $100 Million in Series B Funding",
    "description": "Despite the economic downturn, a promising AI start-up has successfully raised $100 million in Series B funding. The funds will be used to further develop their revolutionary AI product.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 22, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Debate on AI Ethics Intensifies",
    "description": "As AI technology advances, debates on its ethical implications are intensifying. Experts are calling for more transparency and regulation in AI applications.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 22, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Accelerates Data Analysis",
    "description": "A newly launched AI tool promises to simplify and speed up data analysis, making it more accessible to businesses of all sizes. The tool employs advanced AI algorithms to provide actionable insights.",
    "url": "#",
    "source": "CNET",
    "date": "September 22, 2022",
    "category": "Tools"
  }
];
