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
    "title": "Revolutionizing Healthcare: AI Predicts Heart Attacks with Unprecedented Accuracy",
    "description": "A new AI model outperforms traditional methods in predicting heart attacks. Its groundbreaking accuracy could revolutionize patient care and save countless lives.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 06, 2022",
    "category": "Research"
  },
  {
    "title": "AI in Education: The Future of Learning is Here",
    "description": "AI-powered edtech is transforming how students learn, offering personalized curriculums and real-time feedback. This may be the dawn of a new era in education.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 06, 2022",
    "category": "Technology"
  },
  {
    "title": "Business World Embraces AI: Record Investments in 2022",
    "description": "AI startups are receiving record-breaking investments, signaling the business world's increasing reliance on artificial intelligence. The trend shows no signs of slowing down.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 06, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Debate on AI Ethics Intensifies: The Dilemma of Autonomous Vehicles",
    "description": "As autonomous vehicles become a reality, the ethical dilemmas they pose are sparking heated debates. The question of who is responsible in the event of an accident remains unanswered.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 06, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Image Editing",
    "description": "A new tool uses AI to make image editing more intuitive and efficient. This could change the game for graphic designers and digital artists.",
    "url": "#",
    "source": "Wired",
    "date": "September 06, 2022",
    "category": "Tools"
  }
];
