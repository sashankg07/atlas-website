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
    "title": "Groundbreaking AI Learns to Code Software with No Prior Knowledge",
    "description": "In a major advancement, researchers have developed an AI that can write software code from scratch. This AI has the potential to revolutionize the software industry, reducing the need for human coders.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 07, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact on Business Operations",
    "description": "A new AI-based tool has been designed to calculate the potential impact of climate change on business operations. This tool can aid companies in making informed, proactive decisions to mitigate future risks.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "November 07, 2021",
    "category": "Business"
  },
  {
    "title": "AI Ethics Committee Releases Guidelines for Autonomous Vehicles",
    "description": "The global AI Ethics committee has released a comprehensive set of guidelines for the ethical use of AI in autonomous vehicles. The guidelines aim to address the safety and moral dilemmas posed by self-driving cars.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 07, 2021",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Revolutionary AI Tool Streamlines Machine Learning Process",
    "description": "A new AI tool has been unveiled that promises to streamline the machine learning process, making it more accessible to non-experts. This tool could democratize access to AI technology and spur innovation across industries.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "November 07, 2021",
    "category": "Tools"
  },
  {
    "title": "AI Technology Drives New Era of Personalized Medicine",
    "description": "AI technology is driving a new era of personalized medicine, with algorithms now capable of predicting individual health outcomes. This development could transform healthcare delivery and patient care.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 07, 2021",
    "category": "Technology"
  }
];
