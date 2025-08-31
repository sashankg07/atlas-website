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
    "title": "AI breakthrough in predicting Heart Diseases",
    "description": "Researchers have developed an AI model capable of predicting heart disease with unprecedented accuracy. This could save millions of lives in the future.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "AI-powered Chatbots Revolutionizing Customer Service",
    "description": "AI-powered chatbots are transforming the customer service landscape. More companies are adopting this technology to improve customer experience.",
    "url": "#",
    "source": "BBC",
    "date": "September 29, 2021",
    "category": "Business"
  },
  {
    "title": "AI in Climate Change: Predicting Natural Disasters",
    "description": "AI is proving to be a game-changer in climate studies, aiding in the prediction and management of natural disasters.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns over AI Facial Recognition",
    "description": "Issues of privacy and bias in AI facial recognition technologies are sparking a heated debate about ethical regulation.",
    "url": "#",
    "source": "Washington Post",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transforming the Education Sector",
    "description": "New AI tools are bringing revolutionary changes in the education sector, making remote learning more interactive and personalized.",
    "url": "#",
    "source": "CNBC",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
