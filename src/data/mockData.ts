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
    "title": "AI Breaks New Ground in Climate Change Predictions",
    "description": "Researchers have used AI to create a new method for accurately predicting climate change. This revolutionary development could help policymakers make more informed decisions about climate policy.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "November 16, 2021",
    "category": "Research"
  },
  {
    "title": "AI-based Diagnostic Tool to Revolutionize Healthcare",
    "description": "A new AI-based diagnostic tool promises to dramatically improve the speed and accuracy of disease diagnosis. The technology uses machine learning to analyze patient data and suggest diagnoses.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 16, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI for Business Solutions",
    "description": "A leading tech company has announced a multi-billion dollar investment in AI to create innovative business solutions. The move reflects the growing importance of AI in the business world.",
    "url": "#",
    "source": "Forbes",
    "date": "November 16, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Proposed",
    "description": "A top think-tank has proposed new ethical guidelines for AI development and use. These guidelines aim to ensure that AI is developed and used in a way that respects human rights and promotes social good.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 16, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tool to Enhance Creative Process Launched",
    "description": "A new AI tool that enhances the creative process has been launched by a leading tech company. The tool uses machine learning to generate creative ideas and suggestions, providing a valuable resource for artists, writers, and other creative professionals.",
    "url": "#",
    "source": "Wired",
    "date": "November 16, 2021",
    "category": "Tools"
  }
];
