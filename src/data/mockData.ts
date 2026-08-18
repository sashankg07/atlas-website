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
    "title": "The Dawn of Conscious AI: A Major Breakthrough in Research",
    "description": "Researchers have made significant progress in the development of Artificial Intelligence that can understand and respond to human emotions. This groundbreaking work could redefine human-computer interaction.",
    "url": "#",
    "source": "Nature AI",
    "date": "October 01, 2022",
    "category": "Research"
  },
  {
    "title": "Transforming Business Landscapes with AI-Powered Automation",
    "description": "AI is revolutionizing business operations with automation. Companies are leveraging AI to streamline processes, enhance decision-making, and drive profitability.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "October 01, 2022",
    "category": "Business"
  },
  {
    "title": "Emerging Ethical Dilemmas in AI: The Call for Regulation",
    "description": "As AI continues to permeate society, ethical concerns are rising. There's a pressing need for a robust regulatory framework to address potential misuse and bias in AI technologies.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 01, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI in Healthcare: A Technological Leap Saving Lives",
    "description": "AI is transforming healthcare with tools for early diagnosis, personalized treatment, and improved patient outcomes. The pandemic has accelerated the adoption of these promising technologies.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 01, 2022",
    "category": "Technology"
  },
  {
    "title": "OpenAI Unveils New AI Language Model: The Future of Communication",
    "description": "OpenAI has released a new AI language model, offering unprecedented capabilities. The tool is expected to revolutionize various sectors, from customer service to content creation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 01, 2022",
    "category": "Tools"
  }
];
