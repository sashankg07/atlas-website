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
    "title": "AI Revolutionizes Drug Discovery",
    "description": "Artificial intelligence is being used to accelerate the process of drug discovery, enabling scientists to identify potential treatments for diseases faster than ever before.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Powers Next-Generation Customer Service",
    "description": "Companies across industries are leveraging AI to improve customer service, using chatbots and predictive analysis to anticipate customer needs and deliver personalized service.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 30, 2021",
    "category": "Business"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "A new AI tool has been developed that can accurately predict the impact of climate change, providing crucial data to help governments and organizations respond to the environmental crisis.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI Development",
    "description": "As AI continues to advance, ethical considerations are becoming increasingly important. Leaders in the field are calling for more transparency and accountability in AI systems.",
    "url": "#",
    "source": "BBC News",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Streamlines Software Development",
    "description": "A new AI-powered tool is revolutionizing software development by automating coding, reducing errors and significantly speeding up the development process.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
