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
    "title": "AI Breaks New Ground in Disease Prediction",
    "description": "Researchers have developed an AI model capable of predicting disease progression with unprecedented accuracy. This could revolutionize the healthcare industry and impact the lives of millions globally.",
    "url": "#",
    "source": "Nature",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Next-Gen AI Chip",
    "description": "A leading technology company has announced the launch of a new AI chip promising significant improvements in processing speed and power efficiency. This chip will enable more advanced AI applications across various industries.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises Millions in Funding",
    "description": "An innovative AI start-up has secured significant funding to further develop its ground-breaking AI solution. The funding will aid the company in making strides in the AI industry.",
    "url": "#",
    "source": "Forbes",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Debate Intensifies Over AI Ethics",
    "description": "As AI continues to permeate every aspect of our lives, concerns about its ethical implications are growing. Industry experts are calling for stricter regulations and transparency.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Streamlines Data Analysis",
    "description": "A new tool harnessing the power of AI to analyze and interpret complex data sets has been launched. This tool could significantly simplify data analysis, reducing the time and resources needed.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
