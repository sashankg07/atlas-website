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
    "title": "AI Breaks New Ground in Protein Folding Problem",
    "description": "Google's AI lab, DeepMind, has solved the 50-year-old 'protein folding problem', a major breakthrough in the field of life sciences. The AI can predict how proteins fold into 3D shapes, a task which is key to understanding diseases and drug discovery.",
    "url": "#",
    "source": "Nature",
    "date": "December 03, 2021",
    "category": "Research"
  },
  {
    "title": "AI Now Capable of Writing Its Own Code",
    "description": "OpenAI's new AI system, Codex, is now capable of writing its own software code, potentially revolutionizing the software development industry. The system could reduce the need for human coders and make software creation more accessible.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 03, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Company Acquisitions Reach Record High in 2021",
    "description": "The number of acquisitions of AI startups has hit a record high in 2021, as tech giants and enterprises seek to enhance their AI capabilities. The trend underscores the growing importance of AI across industries.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "December 03, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Ethics Guidelines Released for AI Development",
    "description": "The International AI Ethics Board has released new guidelines for the ethical development and use of AI. The guidelines aim to ensure fairness, transparency, and accountability in AI systems.",
    "url": "#",
    "source": "BBC",
    "date": "December 03, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Streamlines Data Analysis for Scientists",
    "description": "A new AI tool called DataRobot is helping scientists analyze large datasets more efficiently. The tool uses machine learning algorithms to identify patterns and make predictions.",
    "url": "#",
    "source": "Scientific American",
    "date": "December 03, 2021",
    "category": "Tools"
  }
];
