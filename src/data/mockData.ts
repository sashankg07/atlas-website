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
    "title": "Groundbreaking AI Platform Revolutionizes Disease Diagnosis",
    "description": "A new AI-powered platform has been developed that can accurately diagnose diseases in record time, transforming the medical field. The platform uses machine learning to analyze patient data and detect patterns often missed by human doctors.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 01, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI for Sustainability",
    "description": "A leading tech company has announced a multi-billion dollar investment in AI to tackle global environmental issues. The funding is aimed at developing innovative AI technologies to reduce carbon emissions and promote sustainability.",
    "url": "#",
    "source": "Forbes",
    "date": "December 01, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Ethics Guidelines Released",
    "description": "In response to growing public concern, a respected AI research institute has released a comprehensive set of guidelines for the ethical use of artificial intelligence. These guidelines aim to ensure AI advancements benefit humanity without compromising privacy or security.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 01, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Breakthrough in Predicting Natural Disasters",
    "description": "Scientists have successfully used AI to predict natural disasters with unprecedented accuracy. By analyzing vast amounts of geological data, the AI system can predict earthquakes and other disasters, potentially saving thousands of lives.",
    "url": "#",
    "source": "Nature",
    "date": "December 01, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Streamlines Software Development",
    "description": "A new AI-powered tool has been launched that significantly reduces the time required for software development. The tool uses machine learning to automate coding, allowing developers to focus on more complex tasks.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 01, 2021",
    "category": "Tools"
  }
];
