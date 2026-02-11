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
    "title": "AI Transforms Healthcare: New Developments Unveiled",
    "description": "Groundbreaking advancements in AI are set to revolutionize the healthcare industry. From early diagnosis to personalized treatment plans, AI is reshaping medical practices.",
    "url": "#",
    "source": "The AI Times",
    "date": "November 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI Goes Green: Promising Trends in Energy Efficiency",
    "description": "As sustainability takes center stage, AI technologies are being leveraged to optimize energy consumption, marking a significant step towards a greener future.",
    "url": "#",
    "source": "AI Daily",
    "date": "November 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Retail: The Future of Shopping is Here",
    "description": "Innovative AI solutions are transforming the retail landscape, enabling personalized experiences and efficient operations like never before.",
    "url": "#",
    "source": "Business AI Weekly",
    "date": "November 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Balancing Act: Ethical Considerations in AI Development",
    "description": "With AI's rapid advancements, ethical considerations are becoming increasingly critical. Stakeholders are focusing on fairness, accountability, and transparency in AI systems.",
    "url": "#",
    "source": "AI Ethics Journal",
    "date": "November 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Reshape Creative Industry: New Frontiers Explored",
    "description": "AI-powered tools are opening new avenues in the creative industry, automating processes and offering unique possibilities for artists and designers.",
    "url": "#",
    "source": "Creative AI Magazine",
    "date": "November 30, 2021",
    "category": "Tools"
  }
];
