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
    "title": "AI Predicts Heart Disease with Remarkable Accuracy",
    "description": "Researchers have developed an AI model that can predict the likelihood of heart disease with over 90% accuracy. This could revolutionize preventative care and help reduce the number of heart disease cases worldwide.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "October 17, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Tool Transforms Sketches into Photorealistic Images",
    "description": "Tech company, DoodleAI, has launched an impressive new AI tool that can transform simple sketches into photorealistic images. The technology could have wide-ranging applications in design, education, and entertainment.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 17, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Startup, IntelliSense, Raises $50M in Series B Funding",
    "description": "IntelliSense, an AI startup specializing in predictive analytics, has successfully raised $50 million in its latest funding round. The funds will be used to advance their technology and expand their global presence.",
    "url": "#",
    "source": "Forbes",
    "date": "October 17, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Implications of AI in Hiring Processes",
    "description": "As AI continues to permeate hiring and recruitment processes, concerns about its ethical implications are on the rise. Experts call for more transparency and regulation to ensure fair and unbiased AI use.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 17, 2022",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI Tools for Data Analysis",
    "description": "Google has announced the launch of new AI tools designed to streamline and enhance data analysis. These tools aim to enable businesses to harness the power of their data more effectively.",
    "url": "#",
    "source": "CNET",
    "date": "October 17, 2022",
    "category": "Tools"
  }
];
