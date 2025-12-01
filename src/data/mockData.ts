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
    "title": "AI Revolutionizes Cancer Detection with Deep Learning",
    "description": "Researchers have developed an AI model that can diagnose certain types of cancer more accurately than human doctors. The AI uses deep learning to analyze patient scans, greatly improving early detection rates.",
    "url": "#",
    "source": "Science Daily",
    "date": "July 14, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giant Unveils Advanced AI Chip for Edge Computing",
    "description": "A leading technology company has unveiled a state-of-the-art AI chip designed to boost edge computing capabilities. This chip could revolutionize IoT devices, enabling faster, more efficient processing.",
    "url": "#",
    "source": "TechCrunch",
    "date": "July 14, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises Millions in Series B Funding Round",
    "description": "An AI startup focused on automating customer service has raised millions in a series B funding round. The funds will be used to enhance the AI's capabilities and expand the company's reach.",
    "url": "#",
    "source": "Business Insider",
    "date": "July 14, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines Proposed for Ethical AI Development",
    "description": "A think tank has proposed a new set of guidelines for ethical AI development. The guidelines aim to ensure AI technology is used responsibly and does not infringe on individual rights.",
    "url": "#",
    "source": "The Guardian",
    "date": "July 14, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Simplifies Data Analysis",
    "description": "A new AI tool has been launched that simplifies data analysis, enabling users to make data-driven decisions more easily. The tool uses machine learning to analyze complex datasets, delivering insights in a user-friendly format.",
    "url": "#",
    "source": "Wired",
    "date": "July 14, 2021",
    "category": "Tools"
  }
];
