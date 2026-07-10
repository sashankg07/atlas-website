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
    "title": "Revolutionizing Medicine: AI Diagnoses Disease with Unprecedented Accuracy",
    "description": "Recent advancements in AI technology have led to breakthroughs in disease diagnosis, outperforming human doctors in some cases. This could revolutionize the future of healthcare, making diagnostics more accurate and accessible.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 24, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Outperforms Humans in Creating Realistic Art",
    "description": "A groundbreaking study has shown that AI can now create art that is indistinguishable from that created by human artists. This development could shake up the art world and poses questions about the nature of creativity.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 24, 2021",
    "category": "Research"
  },
  {
    "title": "Big Tech Invests Billions in AI: What Does this Mean for Small Businesses?",
    "description": "With big tech companies pouring billions into AI development, small businesses risk being left behind. However, some experts argue that this could also create opportunities for innovative startups.",
    "url": "#",
    "source": "Forbes",
    "date": "October 24, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate Heats Up: Who's Responsible When AI Goes Wrong?",
    "description": "As AI becomes increasingly integrated into our lives, the question of who is responsible when it goes wrong is more important than ever. This has sparked heated debate about the need for AI regulation and oversight.",
    "url": "#",
    "source": "BBC News",
    "date": "October 24, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms the Field of Data Analysis",
    "description": "A new AI tool promises to make data analysis easier and more intuitive than ever before. This could have wide-ranging implications, from scientific research to business analytics.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 24, 2021",
    "category": "Tools"
  }
];
