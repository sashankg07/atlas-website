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
    "description": "Researchers have developed an AI model that can predict disease progression in a way never seen before. The breakthrough could revolutionize healthcare and diagnostics.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 17, 2021",
    "category": "Research"
  },
  {
    "title": "AI Pioneers Quantum Computing Advancements",
    "description": "In a major breakthrough, AI has been used to solve complex quantum computing problems. This development could significantly speed up computational tasks.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 17, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises Millions in Investment",
    "description": "An AI startup specializing in autonomous vehicles has raised millions in a recent investment round, signaling strong investor confidence in the AI industry.",
    "url": "#",
    "source": "Forbes",
    "date": "October 17, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Proposed",
    "description": "A leading tech firm has proposed new ethical guidelines for AI development and usage, emphasizing transparency and fairness.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 17, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Driven Tool Simplifies Software Development",
    "description": "A new AI-powered tool that simplifies software development has been launched. It promises to significantly reduce coding errors and improve the overall quality of software.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 17, 2021",
    "category": "Tools"
  }
];
