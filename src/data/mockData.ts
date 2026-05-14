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
    "title": "Unprecedented Breakthrough in AI Language Understanding",
    "description": "Researchers have developed a new AI model that comprehends language like never before. The model is capable of understanding context, making language translations more accurate and efficient.",
    "url": "#",
    "source": "The AI Times",
    "date": "October 15, 2021",
    "category": "Research"
  },
  {
    "title": "AI Now Capable of Predicting Climate Change Patterns",
    "description": "A groundbreaking AI system has been developed that can accurately predict climate change patterns. This could revolutionize our approach to addressing climate change challenges.",
    "url": "#",
    "source": "Tech Insider",
    "date": "October 15, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Finance: The New Trend that's Shaping the Industry",
    "description": "AI technology is being rapidly adopted in the finance sector. Experts predict this will transform the industry, making it more efficient and customer-centric.",
    "url": "#",
    "source": "Business Daily",
    "date": "October 15, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Raised Over AI in Surveillance",
    "description": "As AI technology advances, concerns are being raised about its use in surveillance systems. Critics argue that without proper regulation, this could lead to invasion of privacy.",
    "url": "#",
    "source": "Ethics Weekly",
    "date": "October 15, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Revolutionizes Image Editing",
    "description": "A new AI-based tool has been unveiled that promises to revolutionize the field of image editing. The tool uses machine learning to create realistic edits in real-time.",
    "url": "#",
    "source": "Tech Radar",
    "date": "October 15, 2021",
    "category": "Tools"
  }
];
