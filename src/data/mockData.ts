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
    "title": "Revolutionizing Healthcare: AI Diagnostic Tool Receives FDA Approval",
    "description": "In a landmark decision, the FDA has granted approval for a new AI-powered diagnostic tool. This tool is expected to drastically improve early disease detection and patient outcomes.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 24, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Breakthrough: DeepMind's New Model Predicts Protein Structures with Unprecedented Accuracy",
    "description": "Google's DeepMind has unveiled a new AI model that can predict protein structures with a degree of accuracy never seen before. This development opens up vast possibilities in drug discovery and biological research.",
    "url": "#",
    "source": "Nature Journal",
    "date": "September 24, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Invests $2bn in AI Research for Climate Change Solutions",
    "description": "A leading tech company has committed $2bn to harnessing AI in the fight against climate change. The investment will fund research into new AI models capable of predicting and mitigating the effects of global warming.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 24, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: New Framework Proposed for Responsible AI Development",
    "description": "Top AI researchers have proposed a new framework for ethical AI development. This framework aims to ensure AI technologies are developed and used responsibly, with a focus on ensuring fairness and transparency.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 24, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Toolset Release: Next-Gen Tools for AI Developers Announced",
    "description": "A new suite of tools designed to streamline the AI development process has been released. The toolset aims to make it easier for developers to build and deploy AI models, reducing the time and cost involved.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 24, 2022",
    "category": "Tools"
  }
];
