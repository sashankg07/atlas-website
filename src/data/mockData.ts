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
    "title": "AI Revolutionizes Drug Discovery Process",
    "description": "Groundbreaking work in the field of AI is unlocking new potential in drug discovery, significantly speeding up the process. These advances could potentially save millions of lives.",
    "url": "#",
    "source": "New York Times",
    "date": "November 02, 2021",
    "category": "Research"
  },
  {
    "title": "AI-powered Chatbots Improve Customer Service Experience",
    "description": "Businesses are integrating AI-powered chatbots, resulting in improved customer service interactions. These chatbots are capable of providing instant support and solving complex issues.",
    "url": "#",
    "source": "Forbes",
    "date": "November 02, 2021",
    "category": "Business"
  },
  {
    "title": "AI Tools Predict Climate Change Impact",
    "description": "New AI tools are being developed to predict the impact of climate change more accurately than ever before. These tools could play a crucial role in global climate crisis management.",
    "url": "#",
    "source": "BBC News",
    "date": "November 02, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Grow Over AI in Warfare",
    "description": "As AI becomes more integrated into modern warfare, ethical concerns are growing. There's an urgent need for regulation to prevent potential misuse.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 02, 2021",
    "category": "Ethics"
  },
  {
    "title": "New OpenAI Tool Simplifies Code Writing",
    "description": "OpenAI has released a new AI tool that simplifies the task of writing code. The tool, which learns from millions of public code repositories, aims to make programming more accessible.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 02, 2021",
    "category": "Tools"
  }
];
