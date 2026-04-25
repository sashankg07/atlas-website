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
    "title": "AI Predicts Heart Disease with Unprecedented Accuracy",
    "description": "A groundbreaking new AI model developed by researchers has shown unprecedented accuracy in predicting heart disease. The tool uses machine learning to analyze a wide range of data, offering a more comprehensive risk assessment.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 20, 2021",
    "category": "Research"
  },
  {
    "title": "AI's Role in Climate Change Mitigation",
    "description": "A recent report highlights how artificial intelligence is being used to combat climate change. AI technology, with its predictive and modeling capabilities, is proving to be a key tool in understanding and addressing climate-related challenges.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 20, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Acquires AI Start-up for Improved User Experience",
    "description": "A leading tech company has made a strategic acquisition of a promising AI start-up. The move is expected to significantly enhance the tech giant's user experience and personalization capabilities.",
    "url": "#",
    "source": "Bloomberg",
    "date": "December 20, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines for AI Ethics in Healthcare",
    "description": "The healthcare industry is grappling with ethical implications of AI and machine learning. A set of new guidelines has been proposed to ensure ethical considerations are at the forefront of AI integration in healthcare.",
    "url": "#",
    "source": "The Lancet",
    "date": "December 20, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Toolset Revolutionizes Graphic Design",
    "description": "A new toolset powered by AI is set to transform the world of graphic design. The tools offer features like automatic layout suggestions and smart color matching, significantly speeding up the design process.",
    "url": "#",
    "source": "Adobe Blog",
    "date": "December 20, 2021",
    "category": "Tools"
  }
];
