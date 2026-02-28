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
    "title": "Major Breakthrough in AI Language Understanding",
    "description": "Researchers have unveiled a new AI model capable of understanding and interpreting human language with unprecedented accuracy. The development promises significant advancements in AI-human interactions.",
    "url": "#",
    "source": "AI Today",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI Tools Revolutionizing the Healthcare Industry",
    "description": "AI-driven diagnostic tools are making waves in the healthcare industry, promising faster and more accurate patient diagnosis. These tools are expected to drastically improve patient care.",
    "url": "#",
    "source": "Tech Weekly",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "Major Tech Firm Invests Billions in AI",
    "description": "A renowned tech company is investing billions into AI development, signaling strong belief in the technology's potential. The investment is expected to spur significant advancements in AI technology.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethics of AI: A Growing Concern",
    "description": "As AI technology becomes increasingly integrated into our lives, questions around ethics and regulations grow. Experts call for clear guidelines to ensure responsible AI use.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Promises Better Data Analysis",
    "description": "A newly launched AI tool is set to enhance data analysis, offering businesses better insights and decision-making capabilities. The tool promises to revolutionize the way businesses handle data.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
