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
    "title": "Groundbreaking AI Software Transforms Industry Standards",
    "description": "A revolutionary artificial intelligence software has been developed that radically improves predictive analysis in various industries. The software has shown significant potential in transforming business operations and decision-making processes.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 27, 2022",
    "category": "Technology"
  },
  {
    "title": "New Study Reveals AI's Potential in Climate Change Mitigation",
    "description": "Recent research demonstrates the significant role that AI can play in predicting and mitigating the effects of climate change. The study shows how machine learning can accurately model climate patterns and provide actionable insights.",
    "url": "#",
    "source": "Nature",
    "date": "October 27, 2022",
    "category": "Research"
  },
  {
    "title": "Unprecedented Investment in AI Startups Amidst Pandemic",
    "description": "Despite global economic uncertainty, AI startups have seen an unprecedented surge in investments. This trend underscores the increasing reliance of businesses on AI-driven solutions amidst the ongoing pandemic.",
    "url": "#",
    "source": "Forbes",
    "date": "October 27, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI in Healthcare",
    "description": "As AI becomes increasingly integrated into healthcare, questions regarding patient data privacy and algorithmic bias are being raised. Experts call for stringent regulations to address these ethical concerns.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 27, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transforming Remote Learning",
    "description": "The boom in remote learning has led to the development of innovative AI tools designed to enhance virtual education. These tools aim to personalize the learning experience and increase student engagement.",
    "url": "#",
    "source": "EdTech Magazine",
    "date": "October 27, 2022",
    "category": "Tools"
  }
];
