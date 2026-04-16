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
    "title": "AI Revolutionizes Cancer Diagnosis: A New Era in Medical Science",
    "description": "Recent advancements in AI technology have led to revolutionary improvements in the field of cancer diagnosis, potentially saving millions of lives. Groundbreaking algorithms can now accurately detect and identify cancerous cells at a much earlier stage than traditional methods.",
    "url": "#",
    "source": "Medical AI Today",
    "date": "November 15, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils AI-Powered Virtual Assistant With Unprecedented Accuracy",
    "description": "The latest iteration of the popular virtual assistant powered by AI boasts improved speech recognition and predictive capabilities. This major breakthrough is expected to enhance user experience and set a new standard in the industry.",
    "url": "#",
    "source": "TechWorld News",
    "date": "November 15, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Secures $100 Million in Funding",
    "description": "A promising AI startup focusing on autonomous driving technology has successfully secured $100 million in its latest funding round. This funding will expedite the development and deployment of their AI systems in vehicles.",
    "url": "#",
    "source": "Business Insider",
    "date": "November 15, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Laying Down the Law: New Regulations for AI Ethics",
    "description": "In response to growing concerns about AI and privacy, a new set of regulations has been proposed to guide ethical AI development and usage. The regulations aim to protect individual privacy and prevent misuse of AI technologies.",
    "url": "#",
    "source": "The AI Ethics Journal",
    "date": "November 15, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Developer Tools: The Next Big Thing in Software Engineering",
    "description": "The growth in AI technology has triggered a surge in innovative AI developer tools. These tools are designed to streamline the AI development process, making it more accessible to programmers across the globe.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 15, 2021",
    "category": "Tools"
  }
];
