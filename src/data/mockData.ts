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
    "title": "Groundbreaking AI System Predicts Climate Change Impact",
    "description": "Researchers have developed a new AI model capable of predicting the impacts of climate change more accurately than ever before. This breakthrough could help policymakers make more informed decisions to mitigate the effects of global warming.",
    "url": "#",
    "source": "Nature AI",
    "date": "December 16, 2022",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes Drug Discovery, Accelerates COVID-19 Treatments",
    "description": "Artificial intelligence is proving instrumental in speeding up the process of drug discovery, with recent breakthroughs in COVID-19 treatments being attributed to AI. This represents a major development for the pharmaceutical industry and global health.",
    "url": "#",
    "source": "The AI Times",
    "date": "December 16, 2022",
    "category": "Technology"
  },
  {
    "title": "Business Intelligence Meets AI: A New Era for Data-Driven Decisions",
    "description": "Companies are increasingly integrating artificial intelligence with business intelligence tools, enabling more nuanced data analysis and fostering data-driven decision making. This trend is transforming the business landscape, offering a competitive edge to those who adopt it.",
    "url": "#",
    "source": "Business AI Weekly",
    "date": "December 16, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: A New Framework to Prevent Algorithmic Discrimination",
    "description": "A new framework for ethical AI use has been proposed to prevent algorithmic discrimination. The framework emphasizes the need for transparency, accountability, and inclusivity in AI applications.",
    "url": "#",
    "source": "Ethics in AI Review",
    "date": "December 16, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Transforms Text to Video, Pushing the Boundaries of Content Creation",
    "description": "A new AI tool that converts text inputs into realistic video content is making waves in the tech world. This tool could revolutionize content creation across multiple industries, including entertainment, education, and marketing.",
    "url": "#",
    "source": "Tech AI Today",
    "date": "December 16, 2022",
    "category": "Tools"
  }
];
