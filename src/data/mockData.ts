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
    "title": "AI Breaks Ground in Predicting Climate Change",
    "description": "Artificial Intelligence is now being used to predict the impacts of climate change with unparalleled accuracy. This breakthrough could help governments and organizations make more informed decisions about climate policy.",
    "url": "#",
    "source": "Nature News",
    "date": "April 21, 2022",
    "category": "Research"
  },
  {
    "title": "AI Startup Raises $100 Million to Improve Autonomous Vehicle Technology",
    "description": "A promising AI startup has raised significant funding to further their work on autonomous vehicle technology. This could revolutionize the automotive industry and significantly decrease road accidents.",
    "url": "#",
    "source": "TechCrunch",
    "date": "April 21, 2022",
    "category": "Business"
  },
  {
    "title": "AI Tools Transforming the World of Design",
    "description": "Artificial Intelligence is making waves in the design industry, providing tools that automate design processes and enhance creativity. This could significantly speed up workflow and open new avenues for innovation.",
    "url": "#",
    "source": "The Verge",
    "date": "April 21, 2022",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Considerations in AI Development: A New Framework",
    "description": "A new ethical framework for AI development has been proposed, focusing on transparency and accountability. This comes amid growing concerns about the potential misuse of AI technology.",
    "url": "#",
    "source": "Harvard Business Review",
    "date": "April 21, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Innovations: A New Era for Cancer Detection",
    "description": "A recent breakthrough in AI technology could revolutionize cancer detection, making it faster and more accurate than ever before. This could potentially save millions of lives every year.",
    "url": "#",
    "source": "New Scientist",
    "date": "April 21, 2022",
    "category": "Technology"
  }
];
