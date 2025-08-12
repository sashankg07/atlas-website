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
    "title": "AI Breaks New Ground in Disease Prediction",
    "description": "Researchers have developed an AI model capable of predicting the progression of genetic diseases. This breakthrough could revolutionize personalized medicine and patient care.",
    "url": "#",
    "source": "Nature",
    "date": "November 29, 2021",
    "category": "Research"
  },
  {
    "title": "AI Startup Raises $100M for Autonomous Vehicles",
    "description": "AI startup, AutonomoTech, has just secured $100 million in a series B funding round. The funds will be used to enhance their self-driving technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 29, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics Under Scrutiny at International Summit",
    "description": "The role of ethics in AI was the central discussion at the recent International AI Summit. Participants stressed the need for transparency and fairness in AI algorithms.",
    "url": "#",
    "source": "BBC News",
    "date": "November 29, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "Tech company, DataDive, has introduced a new AI tool that simplifies complex data analysis. The tool is expected to expedite decision-making processes in businesses.",
    "url": "#",
    "source": "WIRED",
    "date": "November 29, 2021",
    "category": "Tools"
  },
  {
    "title": "Tech Giants Invest in AI for Climate Change Solutions",
    "description": "Large tech firms, including Google and Microsoft, are investing heavily in AI to find solutions to climate change. These AI models aim to predict and mitigate the effects of global warming.",
    "url": "#",
    "source": "The Verge",
    "date": "November 29, 2021",
    "category": "Technology"
  }
];
