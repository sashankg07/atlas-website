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
    "title": "Groundbreaking AI Technique Expedites Drug Discovery",
    "description": "A pioneering AI model has demonstrated the capability of speeding up the process of drug discovery. This development could revolutionize the pharmaceutical industry and healthcare sector.",
    "url": "#",
    "source": "The AI Times",
    "date": "October 15, 2021",
    "category": "Research"
  },
  {
    "title": "AI Technology Set to Revolutionize Climate Change Predictions",
    "description": "A new AI-powered model capable of providing highly accurate climate change predictions has been unveiled. The model can enhance our ability to prepare for and mitigate the impacts of climate change.",
    "url": "#",
    "source": "The AI Journal",
    "date": "October 15, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises Millions to Improve Autonomous Vehicles",
    "description": "An AI startup has secured millions in funding to enhance the safety and efficiency of autonomous vehicles. The company plans to leverage AI and machine learning to revolutionize transportation.",
    "url": "#",
    "source": "AI Business News",
    "date": "October 15, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI Facial Recognition Tools",
    "description": "Recent developments in AI facial recognition technology have sparked controversies over privacy and bias issues. Experts call for rigorous regulations and ethical guidelines to govern its use.",
    "url": "#",
    "source": "The AI Ethics Weekly",
    "date": "October 15, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI-Powered Tool Simplifies Data Analysis",
    "description": "A new AI tool promises to make data analysis more accessible for all. The tool uses machine learning to interpret and present data in a user-friendly manner.",
    "url": "#",
    "source": "AI Tech Daily",
    "date": "October 15, 2021",
    "category": "Tools"
  }
];
