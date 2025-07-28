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
    "title": "AI System Develops New Antibiotic",
    "description": "A revolutionary AI system has discovered a new antibiotic. The development marks the first time an AI has been used to uncover a new type of antibiotic, opening up significant potential for combating drug-resistant diseases.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 20, 2021",
    "category": "Research"
  },
  {
    "title": "Artificial Intelligence: The Key to Climate Change?",
    "description": "Researchers are using AI to predict the effects of climate change and develop solutions. By analyzing patterns and making predictions, AI could play a crucial role in global climate strategies.",
    "url": "#",
    "source": "BBC News",
    "date": "November 20, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: Boosting Efficiency and Cutting Costs",
    "description": "Businesses across the globe are leveraging AI to increase efficiency and reduce costs. AI's ability to automate tasks and analyze data is revolutionizing the business landscape.",
    "url": "#",
    "source": "Forbes",
    "date": "November 20, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding the Use of AI in Law Enforcement",
    "description": "Ethicists are raising concerns about the use of AI in law enforcement. Issues range from potential bias in AI algorithms to privacy concerns.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 20, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transforming the Medical Field",
    "description": "Innovative AI tools are being developed for the medical field, enabling faster and more accurate diagnosis. These advancements could revolutionize patient care and the healthcare industry as a whole.",
    "url": "#",
    "source": "Medical News Today",
    "date": "November 20, 2021",
    "category": "Tools"
  }
];
