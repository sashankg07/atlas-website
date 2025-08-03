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
    "title": "AI Outperforms Humans in Birdsong Recognition",
    "description": "Researchers have developed an AI algorithm that can identify individual birds from their songs with greater accuracy than any human. The breakthrough could have significant implications for ecological studies.",
    "url": "#",
    "source": "Nature",
    "date": "October 12, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Next-Gen AI Processor",
    "description": "A leading technology company has unveiled their newest AI processor. Promising lightning-fast processing speeds, it is set to revolutionize AI computing.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 12, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-Up Scoops $100 Million in Funding",
    "description": "A promising AI startup has secured $100 million in Series A funding. The company specializes in AI-driven customer service solutions.",
    "url": "#",
    "source": "Forbes",
    "date": "October 12, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethical Guidelines for AI Proposed",
    "description": "A group of respected AI researchers have proposed new ethical guidelines for AI development and use. The guidelines aim to address issues such as bias and fairness.",
    "url": "#",
    "source": "Science Daily",
    "date": "October 12, 2021",
    "category": "Ethics"
  },
  {
    "title": "Cutting-Edge AI Tool Streamlines Data Analysis",
    "description": "A new AI tool has been developed that can significantly streamline data analysis. The tool uses machine learning algorithms to automate and optimize data processing tasks.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 12, 2021",
    "category": "Tools"
  }
];
