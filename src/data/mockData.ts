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
    "title": "AI Revolutionizes Cancer Diagnosis: Breakthrough in Medical Research",
    "description": "A new AI model developed by medical researchers has the potential to significantly improve the accuracy of cancer diagnosis. This leap in technology could save countless lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 02, 2021",
    "category": "Research"
  },
  {
    "title": "Google's DeepMind Develops AI That Can Learn Without Human Input",
    "description": "Google's AI firm, DeepMind, has created an AI model that can learn and improve itself without human input. This milestone could have profound implications for the future of AI technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 02, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startups Attract Record Investments in 2021",
    "description": "AI startups have attracted a record-breaking level of investment in 2021, indicating the growing importance of AI technology in the business world.",
    "url": "#",
    "source": "Forbes",
    "date": "December 02, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Development Proposed",
    "description": "In response to growing concern over AI's societal impact, a leading group of researchers proposed new ethical guidelines for AI development.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "December 02, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Transforming the Field of Data Analysis",
    "description": "The emergence of powerful AI tools is transforming the field of data analysis, enabling greater efficiency and accuracy in interpreting data.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 02, 2021",
    "category": "Tools"
  }
];
