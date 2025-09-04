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
    "title": "AI Now Capable of Predicting Alzheimer’s Years in Advance",
    "description": "Researchers have developed a groundbreaking AI that can predict Alzheimer's disease years before doctors. The technology has the potential to revolutionize early detection and treatment methods.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 07, 2021",
    "category": "Research"
  },
  {
    "title": "IBM's New AI Can Code Better than Humans",
    "description": "IBM’s latest AI development, CodeNet, is capable of writing cleaner, more efficient code than human programmers. This breakthrough could significantly accelerate software development cycles.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "November 07, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Disruption: How Automation is Transforming Job Markets",
    "description": "A new report highlights the impact of AI and automation on job markets, predicting significant shifts in labor demand in the next decade. The study suggests that millions of jobs may be transformed, created, or made redundant.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 07, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise Over AI's Role in Military Operations",
    "description": "As the use of AI in military operations grows, so does the debate over its ethical implications. Critics argue the technology could lead to unaccountable autonomous weapons, while proponents see its potential to save lives.",
    "url": "#",
    "source": "BBC News",
    "date": "November 07, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Unveils 'GPT-4', a Next-Gen Language Prediction Tool",
    "description": "OpenAI has rolled out GPT-4, the latest version of its powerful language prediction tool. This new iteration promises increased accuracy and versatility, further blurring the lines between human and machine-generated content.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 07, 2021",
    "category": "Tools"
  }
];
