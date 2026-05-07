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
    "title": "New AI Algorithm Outperforms Humans in Identifying Emotions",
    "description": "Researchers have developed an AI algorithm that outperforms humans in identifying emotions based on facial expressions. This breakthrough could revolutionize fields like mental health and customer service.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 01, 2022",
    "category": "Research"
  },
  {
    "title": "AI-powered Robot Assists in Successful Heart Surgery",
    "description": "In a global first, an AI-powered robotic technology was leveraged in a complex heart surgery, leading to a successful outcome. This could redefine surgical procedures in the future.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 01, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $100M in Series B Funding",
    "description": "AI start-up, DeepLearn, has successfully raised $100M in Series B funding, marking one of the largest investments in the AI sector this year. The funds will be used to enhance their machine learning capabilities.",
    "url": "#",
    "source": "Forbes",
    "date": "December 01, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Experts Discuss Ethical Implications of AI in Job Markets",
    "description": "A panel of experts recently discussed the ethical implications of AI in job markets at a major tech conference. The discussion highlighted the need for regulations to ensure fair AI implementation.",
    "url": "#",
    "source": "BBC News",
    "date": "December 01, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A new AI tool, ClimatePredict, can accurately predict climate change impacts, providing crucial data for environmental efforts. It’s a major step towards leveraging AI for the global good.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 01, 2022",
    "category": "Tools"
  }
];
