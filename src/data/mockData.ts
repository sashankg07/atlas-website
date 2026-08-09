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
    "title": "AI Outperforms Humans at Identifying Rare Diseases",
    "description": "A ground-breaking AI system has been developed that outperforms doctors in diagnosing rare diseases, potentially revolutionizing healthcare. The AI uses deep learning to analyze patient data and make quick, accurate diagnoses.",
    "url": "#",
    "source": "Nature Medicine",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI To Drive Next Generation of Autonomous Vehicles",
    "description": "Tech giants are leveraging artificial intelligence to drive the next generation of autonomous vehicles. Employing a combination of machine learning and computer vision, these cars are expected to navigate roads with unprecedented accuracy and safety.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Secures Record $200M Funding",
    "description": "AI start-up, AIWorks, has secured a record $200M in funding, underscoring the growing business interest in AI technology. The firm specializes in AI-powered solutions for retail businesses.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Under Spotlight as Bias Concerns Grow",
    "description": "As AI technology becomes more prevalent, concerns are growing over its ethical implications, particularly around biases. Calls are intensifying for stricter regulations to mitigate potential discriminatory outcomes.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Releases New AI Tools for Developers",
    "description": "Google has released a new suite of AI tools aimed at making it easier for developers to build and deploy AI applications. The tools cover a wide array of uses, from data analysis to machine learning model training.",
    "url": "#",
    "source": "TechRadar",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
