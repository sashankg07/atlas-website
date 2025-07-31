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
    "title": "Revolutionizing Healthcare with AI-Powered Diagnostics",
    "description": "New advancements in AI are set to transform the medical field by introducing AI-powered diagnostic tools that can detect diseases with greater accuracy. This breakthrough could significantly reduce the time taken for diagnoses and treatment initiation.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "AI to Aid in Climate Change Mitigation",
    "description": "Researchers are leveraging AI technologies to understand and mitigate the impacts of climate change. AI models are being used to predict environmental patterns and develop efficient strategies for reducing greenhouse gas emissions.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startups Attract Billions in Investments",
    "description": "AI startups are experiencing record levels of investments, underlining the growing importance of AI in the global economy. This trend points to an accelerated adoption of AI technologies across various industries.",
    "url": "#",
    "source": "Financial Times",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Addressing Ethical Concerns in AI: A Call for Transparency",
    "description": "As AI technologies gain prominence, the need for ethical guidelines and transparency continues to grow. Experts are calling for more efforts to address bias, fairness, and accountability in AI applications.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Promise to Streamline Business Operations",
    "description": "A wave of new AI tools designed to automate and streamline business operations is hitting the market. These tools promise to enhance productivity, improve decision-making, and empower businesses to deliver better customer experiences.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
