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
    "title": "AI Breakthrough: A Machine that Understands Cause and Effect",
    "description": "Researchers have developed a groundbreaking AI model that can understand cause and effect. This could revolutionize decision-making in many fields, from medicine to finance.",
    "url": "#",
    "source": "Nature",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tool Transforms Text to Speech with Unprecedented Realism",
    "description": "A pioneering tool uses AI to transform text into speech that is indistinguishable from a human speaker. This development could have significant implications for accessibility and communication technology.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI to Enhance Cloud Computing",
    "description": "A leading tech company has announced a multi-billion dollar investment in AI to improve its cloud computing services. The move is expected to accelerate the firm's growth and competitiveness in the tech market.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics in Focus: Call for Regulations on Facial Recognition Technology",
    "description": "In light of recent controversies, experts and activists are calling for stricter regulations on the use of facial recognition technology. The ethical implications of AI are becoming increasingly important as the technology advances.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "Innovative AI Tool Predicts Climate Change Impact",
    "description": "A new AI tool can predict the impact of climate change on local environments with unprecedented accuracy. This tool could be crucial in helping policymakers make informed decisions about climate change mitigation.",
    "url": "#",
    "source": "Scientific American",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
