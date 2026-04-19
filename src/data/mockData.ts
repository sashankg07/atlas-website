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
    "title": "AI Breakthrough in Cancer Detection",
    "description": "Researchers have developed a new artificial intelligence system that can help in early detection of cancer. The system has shown promising results in preliminary trials, outperforming traditional methods.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 13, 2021",
    "category": "Research"
  },
  {
    "title": "Automating Business Processes with AI",
    "description": "More businesses are turning to AI to automate their processes, leading to increased efficiency and productivity. This trend is reshaping the modern business landscape.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 13, 2021",
    "category": "Business"
  },
  {
    "title": "The Ethical Dilemmas of AI in Surveillance",
    "description": "With the increasing use of AI in surveillance, concerns are being raised about privacy and consent. This has sparked a global debate on the ethical limits of AI technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 13, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "A New Era of AI-Driven Tech Gadgets",
    "description": "The latest wave of tech gadgets leverages AI to provide more personalized and interactive experiences. These advancements are pushing the boundaries of what is possible in consumer technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 13, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Toolsets: Powering the Next Generation of Developers",
    "description": "New AI-powered toolsets are revolutionizing the way developers work by enhancing code generation, debugging, and more. These tools are set to significantly change software development processes.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 13, 2021",
    "category": "Tools"
  }
];
