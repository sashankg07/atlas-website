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
    "title": "Groundbreaking AI Algorithm Shatters Traditional Music Composition",
    "description": "Researchers have developed a new AI algorithm capable of creating complex pieces of music, challenging traditional composition methods. This breakthrough could lead to innovative approaches in music production and theory.",
    "url": "#",
    "source": "The AI Times",
    "date": "March 03, 2023",
    "category": "Research"
  },
  {
    "title": "AI Technology Driving Sustainable Agriculture",
    "description": "A recent surge in AI technology is helping farmers to optimize crop yields while reducing water and chemical usage. The integration of AI in farming processes is a significant leap towards sustainable agriculture.",
    "url": "#",
    "source": "Tech Innovator",
    "date": "March 03, 2023",
    "category": "Technology"
  },
  {
    "title": "AI Startup Secures $100M in Series B Funding",
    "description": "Notable AI startup, Alpha Insights, has secured a whopping $100 million in Series B funding. The company plans to use the fund to enhance its machine learning capabilities and expand globally.",
    "url": "#",
    "source": "Business Insider",
    "date": "March 03, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding Facial Recognition AI",
    "description": "As facial recognition AI becomes increasingly prevalent, concerns about privacy and consent continue to rise. Advocacy groups are calling for stricter regulations to prevent misuse of the technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 03, 2023",
    "category": "Ethics"
  },
  {
    "title": "TensorFlow 3.0: A New Milestone for AI Development",
    "description": "Google has just released TensorFlow 3.0, the latest version of its open-source machine learning library. The update brings significant enhancements, promising to accelerate AI development across various sectors.",
    "url": "#",
    "source": "The Verge",
    "date": "March 03, 2023",
    "category": "Tools"
  }
];
