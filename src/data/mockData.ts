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
    "title": "AI Breaks Ground in Disease Prediction",
    "description": "Researchers have developed an AI model capable of predicting the onset of diseases with exceptional accuracy. This groundbreaking technology could revolutionize preventative medicine.",
    "url": "#",
    "source": "The New York Times",
    "date": "April 08, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Algorithm Outperforms Humans in Complex Tasks",
    "description": "A new AI algorithm has been developed that outperforms humans in complex decision-making tasks. This breakthrough could have significant implications for automation in various industries.",
    "url": "#",
    "source": "BBC News",
    "date": "April 08, 2022",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI Startups",
    "description": "A leading tech company has invested billions in AI startups, signaling a strong belief in the future of artificial intelligence. This substantial investment is expected to accelerate AI development.",
    "url": "#",
    "source": "TechCrunch",
    "date": "April 08, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics of AI: The Debate Continues",
    "description": "As AI continues to evolve, so does the debate around its ethical implications. Experts are calling for more regulations to ensure AI technology is developed and used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 08, 2022",
    "category": "Ethics"
  },
  {
    "title": "Revolutionary AI Tools Transforming the Art Industry",
    "description": "New AI tools are significantly influencing the art industry by enabling artists to produce unique and complex works. These tools are changing the way we create and perceive art.",
    "url": "#",
    "source": "The Verge",
    "date": "April 08, 2022",
    "category": "Tools"
  }
];
