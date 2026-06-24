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
    "title": "Revolutionary AI Algorithm Transforms Drug Discovery",
    "description": "Researchers have recently developed an AI algorithm capable of accelerating the drug discovery process. This innovative AI tool can predict a drug's effectiveness and potential side effects, swiftly moving medical science forward.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "March 03, 2023",
    "category": "Research"
  },
  {
    "title": "AI Now Integral to Modern Business Strategy",
    "description": "Artificial Intelligence is increasingly being integrated into business strategies, as companies recognize its value in enhancing decision-making processes and improving customer experience.",
    "url": "#",
    "source": "Forbes",
    "date": "March 03, 2023",
    "category": "Business"
  },
  {
    "title": "Advancements in AI Ethics: Creating Fairer Algorithms",
    "description": "In a breakthrough study, researchers have proposed a new framework for developing fair and unbiased AI algorithms. This could change the way AI systems make decisions, impacting a range of sectors from finance to healthcare.",
    "url": "#",
    "source": "Harvard Business Review",
    "date": "March 03, 2023",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A new AI tool offers a solution to the data analysis bottleneck. By automating complex data analytics tasks, the tool promises to vastly improve efficiency across various industries.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "March 03, 2023",
    "category": "Tools"
  },
  {
    "title": "AI in Space Exploration: Mars Rover Gets AI Upgrade",
    "description": "NASA's Mars Rover gets an AI upgrade, enhancing its autonomous capabilities. This development will allow the Rover to make real-time decisions during its exploration missions.",
    "url": "#",
    "source": "CNN",
    "date": "March 03, 2023",
    "category": "Technology"
  }
];
