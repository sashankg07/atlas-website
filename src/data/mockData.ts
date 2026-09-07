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
    "title": "New AI Breakthrough Predicts Climate Change Impact More Accurately",
    "description": "Researchers have developed an AI model that can predict the impact of climate change with unprecedented precision. The model uses deep learning to simulate complex climate systems and predict future changes.",
    "url": "#",
    "source": "Nature",
    "date": "September 15, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giants Invest Heavily in AI for Healthcare",
    "description": "Major tech companies like Google and Apple are investing billions in AI to revolutionize healthcare. They aim to develop AI algorithms that can diagnose diseases and suggest treatments.",
    "url": "#",
    "source": "Forbes",
    "date": "September 15, 2022",
    "category": "Business"
  },
  {
    "title": "AI Tools Emerge as Game Changer for Small Businesses",
    "description": "New AI tools are helping small businesses automate tasks, analyze data, and improve customer service. This trend is leveling the playing field between large corporations and small businesses.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 15, 2022",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations Surrounding the Use of AI in Hiring",
    "description": "As more companies adopt AI in their hiring process, questions about fairness and bias are being raised. Experts call for regulations to ensure ethical use of AI in recruitment.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 15, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Technology Advances in Autonomous Vehicles",
    "description": "New developments in AI technology are making self-driving cars safer and more efficient. AI algorithms are now able to respond to unpredictable road situations, making them a step closer to widespread adoption.",
    "url": "#",
    "source": "The Verge",
    "date": "September 15, 2022",
    "category": "Technology"
  }
];
