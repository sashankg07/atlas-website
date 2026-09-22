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
    "title": "AI Beats Human Experts at Spotting Crop Diseases",
    "description": "A recent study reveals that AI models can now accurately identify crop diseases, often surpassing human experts. This groundbreaking advancement is expected to transform agriculture and food security.",
    "url": "#",
    "source": "The New York Times",
    "date": "March 29, 2023",
    "category": "Research"
  },
  {
    "title": "Tech Giants Race to Develop AI-Driven Cybersecurity Systems",
    "description": "Leading tech companies are investing heavily in AI to create robust cybersecurity systems. The aim is to proactively detect and neutralize threats, enhancing data security like never before.",
    "url": "#",
    "source": "BBC News",
    "date": "March 29, 2023",
    "category": "Technology"
  },
  {
    "title": "AI in Business: A Silent Revolution",
    "description": "AI is reshaping business operations across the globe, from customer service to supply chain management. Experts predict a seismic shift in business landscapes as AI continues to evolve.",
    "url": "#",
    "source": "Forbes",
    "date": "March 29, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI’s Role in Hiring",
    "description": "As more companies use AI for recruitment, concerns about bias and transparency are growing. Policymakers are urged to create regulations to ensure fairness in AI-driven hiring processes.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 29, 2023",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Aim to Streamline Software Development",
    "description": "AI is making its mark in software development, with new tools promising to automate and streamline the process. These advancements could significantly reduce development time and costs.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 29, 2023",
    "category": "Tools"
  }
];
