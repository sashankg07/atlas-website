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
    "title": "AI Revolutionizes Healthcare with Predictive Analysis",
    "description": "Emerging AI technology is transforming healthcare by offering predictive analysis for patient diagnosis. The advanced algorithms can identify patterns and predict potential health issues before they become critical.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 13, 2022",
    "category": "Technology"
  },
  {
    "title": "New AI Chatbot Tackles Mental Health Support",
    "description": "A recently developed AI chatbot is providing mental health support to individuals, revolutionizing the field of psychotherapy. The AI uses empathetic language processing to understand and respond to user emotions.",
    "url": "#",
    "source": "BBC News",
    "date": "October 13, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Business: Streamlining HR Processes",
    "description": "The use of artificial intelligence in HR departments is streamlining processes, saving time and resources. Automation and predictive analysis are leading to improved recruitment and employee management.",
    "url": "#",
    "source": "Forbes",
    "date": "October 13, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Over AI Facial Recognition Technology",
    "description": "With the rise in AI facial recognition technology, ethical concerns are being raised about privacy and consent. The debate centers around the balancing act between security and individual civil rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 13, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A new AI tool has been developed that can predict the impact of climate change with unprecedented accuracy. This breakthrough has potential to guide global policy on climate change adaptation and mitigation strategies.",
    "url": "#",
    "source": "National Geographic",
    "date": "October 13, 2022",
    "category": "Tools"
  }
];
