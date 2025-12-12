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
    "title": "AI Breakthrough: Machine Learning Models Predict Climate Change",
    "description": "Researchers have developed an AI model capable of predicting the impacts of climate change with unprecedented accuracy. The advancement could play a crucial role in global environmental strategies.",
    "url": "#",
    "source": "The New Scientist",
    "date": "September 20, 2022",
    "category": "Research"
  },
  {
    "title": "AI Ethics: Facial Recognition Technology Under Debate",
    "description": "Questions are being raised about the ethical implications of facial recognition technology. Critics argue that without proper regulation, the technology could infringe on personal privacy rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 20, 2022",
    "category": "Ethics"
  },
  {
    "title": "Tech Giant Acquires AI Startup for Predictive Analytics",
    "description": "In a significant business move, a leading tech company has acquired an AI startup known for its advanced predictive analytics. The deal is expected to revolutionize the tech giant's data analysis capabilities.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 20, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New AI Tool Simplifies Complex Data Visualization",
    "description": "A new AI-powered tool has been launched that simplifies the visual representation of complex data. The tool is expected to aid businesses in making more informed, data-driven decisions.",
    "url": "#",
    "source": "Wired",
    "date": "September 20, 2022",
    "category": "Tools"
  },
  {
    "title": "The Rise of AI in Healthcare: Predicting Patient Outcomes",
    "description": "Artificial Intelligence is revolutionizing healthcare, with new models capable of predicting patient outcomes and assisting in early diagnosis. These advancements are expected to significantly improve patient care.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "September 20, 2022",
    "category": "Technology"
  }
];
