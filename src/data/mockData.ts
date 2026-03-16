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
    "title": "AI Breaks New Ground in Medical Diagnosis",
    "description": "A revolutionary AI system has demonstrated capabilities to diagnose specific medical conditions with accuracy surpassing that of expert doctors. The development is expected to revolutionize healthcare industry, providing support to medical professionals and improving patient outcomes.",
    "url": "#",
    "source": "AI Health News",
    "date": "June 04, 2022",
    "category": "Research"
  },
  {
    "title": "Leading Tech Firm Unveils Advanced AI Chip",
    "description": "A top technology company has unveiled a new AI chip, boasting improved machine learning capabilities and energy efficiency. The chip is set to power the next generation of AI technologies, from autonomous vehicles to voice recognition systems.",
    "url": "#",
    "source": "Tech Times",
    "date": "June 04, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Lands Record Investment",
    "description": "An AI start-up focusing on natural language processing has secured a record-breaking investment in a recent funding round. The funds will be used to further refine and expand the company's innovative technology.",
    "url": "#",
    "source": "Business Weekly",
    "date": "June 04, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines for AI Ethics Released",
    "description": "A prestigious international organization has released a new set of guidelines for AI ethics, aiming to address growing concerns over privacy, bias, and accountability in AI systems. The guidelines are expected to set a benchmark for AI development and use globally.",
    "url": "#",
    "source": "Ethics in AI Review",
    "date": "June 04, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A newly launched AI tool is set to revolutionize data analysis, offering unprecedented speed and accuracy in parsing large data sets. The tool will facilitate businesses in making data-driven decisions, enhancing efficiency and profitability.",
    "url": "#",
    "source": "AI Tools Today",
    "date": "June 04, 2022",
    "category": "Tools"
  }
];
