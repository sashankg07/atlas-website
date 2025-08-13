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
    "description": "Researchers have developed an AI model that can predict the likelihood of certain diseases in patients more accurately than ever before. This breakthrough could revolutionize healthcare and disease prevention strategies.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 19, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Streamlines Business Processes",
    "description": "A cutting-edge AI tool has been launched that optimizes business processes by automating mundane tasks. This technology is expected to drive efficiency and productivity in various industries.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 19, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics: Balancing Innovation with Responsibility",
    "description": "The rise of AI has been accompanied by a necessary discussion on ethical implications. Experts are calling for guidelines to ensure responsible and fair use of AI technologies.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 19, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Transforming the Landscape of Cybersecurity",
    "description": "AI is being harnessed to enhance cybersecurity measures by predicting and preventing cyber attacks before they occur. This could potentially save billions in data breach costs.",
    "url": "#",
    "source": "The Verge",
    "date": "October 19, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI-Powered Tool Simplifies Data Analysis",
    "description": "A new tool powered by AI is set to make data analysis faster and more accurate. This innovation is expected to have significant impact on how businesses handle and interpret big data.",
    "url": "#",
    "source": "Bloomberg",
    "date": "October 19, 2021",
    "category": "Tools"
  }
];
