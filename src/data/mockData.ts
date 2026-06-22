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
    "title": "AI Breakthrough: New Algorithm Mimics Human Learning",
    "description": "A team of researchers has developed an AI algorithm that mimics human cognitive learning processes, promising to revolutionize artificial intelligence as we know it. The algorithm can learn new tasks quickly and adapt to changing environments.",
    "url": "#",
    "source": "Nature Magazine",
    "date": "April 27, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Introduces AI-Powered Virtual Assistant",
    "description": "A leading tech company has launched an AI-powered virtual assistant capable of understanding and responding to natural human language. This is a significant step towards making technology more accessible and intuitive.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "April 27, 2022",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $50 Million in Series B Funding",
    "description": "An innovative AI start-up specializing in healthcare solutions has raised $50 million in Series B funding. The company plans to use the funds to expand its product offerings and accelerate growth.",
    "url": "#",
    "source": "Forbes",
    "date": "April 27, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI’s Role in Job Recruitment",
    "description": "As AI continues to play a larger role in job recruitment, some are raising ethical concerns. Critics argue that the technology has the potential to reinforce existing biases, while proponents say it can make the hiring process more objective.",
    "url": "#",
    "source": "The Guardian",
    "date": "April 27, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Climate Change Impact",
    "description": "Researchers have developed a new AI tool that can predict the impacts of climate change with unprecedented accuracy. The tool uses machine learning to analyze climate data and make predictions about future climate events.",
    "url": "#",
    "source": "Science Daily",
    "date": "April 27, 2022",
    "category": "Tools"
  }
];
