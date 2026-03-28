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
    "title": "Revolutionizing Healthcare: AI Predicts Heart Disease with Unprecedented Accuracy",
    "description": "Researchers have developed an AI model that can predict heart diseases with over 90% accuracy. The breakthrough could potentially save millions of lives worldwide.",
    "url": "#",
    "source": "The New Scientist",
    "date": "September 01, 2022",
    "category": "Research"
  },
  {
    "title": "AI Enhances Renewable Energy: Predicting Wind Power Generation",
    "description": "An innovative AI model is set to boost the renewable energy sector by accurately predicting wind power output. This development could significantly optimize the use of wind power.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 01, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI Startups",
    "description": "Continuing its investment spree, a major tech company has invested billions in AI startups. The move underscores the growing importance of AI in the global economy.",
    "url": "#",
    "source": "Bloomberg",
    "date": "September 01, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate Intensifies: The Balance Between Innovation and Privacy",
    "description": "As AI continues to evolve, the debate about its ethical implications intensifies. Key issues include privacy, bias, and the potential for misuse of technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 01, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Data Analysis",
    "description": "A newly launched AI tool is set to revolutionize data analysis, offering real-time insights and predictive capabilities. The tool is expected to be a game-changer for businesses across industries.",
    "url": "#",
    "source": "Forbes",
    "date": "September 01, 2022",
    "category": "Tools"
  }
];
