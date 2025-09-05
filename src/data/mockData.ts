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
    "title": "AI Transforms Radiology with Advanced Imaging Analysis",
    "description": "Groundbreaking AI technology is revolutionizing the field of radiology, offering improved image analysis that could enhance diagnosis accuracy. The technology can identify patterns invisible to the human eye, potentially leading to early detection of various conditions.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 05, 2021",
    "category": "Research"
  },
  {
    "title": "Startup Unveils AI Chip Outperforming Silicon Valley Giants",
    "description": "Emerging tech startup, AI Chipworks, has announced the development of a new AI processing chip. This high-performance chip promises faster processing speeds and lower energy consumption, outperforming established competitors.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 05, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Enhancing Customer Experience in Retail Industry",
    "description": "Major retailers are leveraging AI technology to improve customer experience, from personalized product recommendations to streamlined checkout processes. This trend signifies the increasing role of AI in shaping the future of retail.",
    "url": "#",
    "source": "Forbes",
    "date": "December 05, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Implications of AI in Surveillance Systems",
    "description": "As AI is increasingly used in advanced surveillance systems, concerns about privacy and ethics are rising. Experts are calling for stringent regulations to ensure responsible use of AI in surveillance.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Introduces New Language Processing Tool",
    "description": "OpenAI has unveiled a cutting-edge language processing tool, offering advanced capabilities in text generation and analysis. The tool is expected to have wide-ranging applications, from customer service bots to novel writing assistance.",
    "url": "#",
    "source": "Wired",
    "date": "December 05, 2021",
    "category": "Tools"
  }
];
