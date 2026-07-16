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
    "title": "AI Breaks New Ground in Climate Change Predictions",
    "description": "AI has been instrumental in modeling and predicting the impact of climate change with unprecedented accuracy. This major breakthrough could help governments and organizations in devising effective strategies for climate action.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 11, 2022",
    "category": "Research"
  },
  {
    "title": "Tech Giant Launches AI-Powered Tool to Detect Deepfakes",
    "description": "In a bid to combat the surge of deepfake technology, a leading tech firm has unveiled a sophisticated AI tool capable of detecting manipulated images and videos with high accuracy.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 11, 2022",
    "category": "Technology"
  },
  {
    "title": "How AI is Revolutionizing the E-commerce Industry",
    "description": "The use of AI in personalizing customer experiences and streamlining supply chain processes is transforming the e-commerce industry. Experts predict this trend to continue, with AI becoming an integral part of e-commerce operations.",
    "url": "#",
    "source": "Forbes",
    "date": "October 11, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Understanding the Ethical Implications of AI in Healthcare",
    "description": "As AI continues to make inroads in healthcare, the ethical implications of its widespread use are coming under scrutiny. Key concerns revolve around data privacy, algorithmic bias, and the need for human oversight.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 11, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Aims to Simplify Data Analysis",
    "description": "A newly released AI tool promises to democratize data analysis by enabling non-technical users to derive insights from complex datasets. This could significantly impact industries reliant on data-driven decision-making.",
    "url": "#",
    "source": "Wired",
    "date": "October 11, 2022",
    "category": "Tools"
  }
];
