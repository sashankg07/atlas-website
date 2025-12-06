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
    "title": "AI Breaks Ground in Predicting Climate Change",
    "description": "In a significant breakthrough, researchers have developed an AI model capable of predicting climate changes with unprecedented accuracy. The technology has major implications for global warming mitigation efforts.",
    "url": "#",
    "source": "Nature",
    "date": "October 17, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Heavily in AI Ethics",
    "description": "Leading tech companies, including Google and Microsoft, are investing significantly in AI ethics, aiming to address growing concerns about AI's impact on society and individual privacy.",
    "url": "#",
    "source": "The Verge",
    "date": "October 17, 2021",
    "category": "Ethics"
  },
  {
    "title": "Revolutionizing Healthcare: AI and Predictive Diagnostics",
    "description": "AI has started revolutionizing healthcare with predictive diagnostics, enabling doctors to detect diseases like cancer at much earlier stages and increasing the chances of successful treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 17, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-powered Tools Transforming the World of Design",
    "description": "AI-powered design tools are changing the landscape of graphic design, allowing designers to generate high-quality work more efficiently than ever before.",
    "url": "#",
    "source": "Wired",
    "date": "October 17, 2021",
    "category": "Tools"
  },
  {
    "title": "How AI is Shaping the Future of Fintech",
    "description": "Artificial intelligence is increasingly being used in the fintech sector, streamlining operations, reducing fraud, and personalizing customer experiences. Experts believe this trend will continue to grow in the coming years.",
    "url": "#",
    "source": "Financial Times",
    "date": "October 17, 2021",
    "category": "Business"
  }
];
