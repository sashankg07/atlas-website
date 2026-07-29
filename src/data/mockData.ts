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
    "title": "AI Breakthrough: Machine Learning Masters Quantum Physics",
    "description": "In a significant leap forward, artificial intelligence has successfully solved a quantum physics problem that was previously thought impossible. This could revolutionize not just the world of physics, but numerous other fields as well.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI-Powered Facial Recognition: A Powerful Tool or an Ethical Nightmare?",
    "description": "As AI-powered facial recognition technology becomes increasingly advanced, it raises new ethical questions about privacy and consent. Despite its potential benefits, many are calling for stricter regulations.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "Artificial Intelligence Transforming the Finance Industry",
    "description": "AI is revolutionizing the finance industry by automating tasks, improving customer service, and making predictions more accurate. However, there are challenges to overcome, including data privacy and the potential for job displacement.",
    "url": "#",
    "source": "Forbes",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI and Climate Change: A Potent Combo",
    "description": "Artificial Intelligence is being harnessed to tackle climate change, helping scientists make more accurate predictions, optimize energy usage, and design more effective mitigation strategies.",
    "url": "#",
    "source": "National Geographic",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "New AI Tool Predicts Protein Structures with Unprecedented Accuracy",
    "description": "A new AI-powered tool has the ability to quickly and accurately predict protein structures, a feat that could have significant implications for understanding disease and developing new treatments.",
    "url": "#",
    "source": "Nature",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
