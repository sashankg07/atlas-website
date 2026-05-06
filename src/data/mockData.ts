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
    "description": "A groundbreaking AI model developed by researchers is capable of predicting the likelihood of diseases in patients with astonishing accuracy. This could revolutionize the healthcare industry and preventative medicine.",
    "url": "#",
    "source": "The New Scientist",
    "date": "October 02, 2022",
    "category": "Research"
  },
  {
    "title": "AI Start-up Launches Innovative Deep Learning Platform",
    "description": "Tech start-up, DeepCore, has launched an innovative AI platform that accelerates the deep learning process. The platform could drastically reduce the time it takes to train AI models.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 02, 2022",
    "category": "Technology"
  },
  {
    "title": "Big Business Turns to AI for Streamlined Operations",
    "description": "More corporations are using AI to streamline their operations and increase efficiency. This trend shows how AI is becoming an integral part of modern business strategy.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 02, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Report Highlights AI Ethics Issues",
    "description": "A new report from the AI Ethics Institute highlights the ongoing ethical issues related to AI use. The report calls for stricter regulation and greater transparency in the field.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 02, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Revolutionizes Data Analysis",
    "description": "The latest AI tool from DataPro could revolutionize the way businesses analyze their data. The tool uses machine learning to spot trends and patterns in large data sets.",
    "url": "#",
    "source": "Wired",
    "date": "October 02, 2022",
    "category": "Tools"
  }
];
