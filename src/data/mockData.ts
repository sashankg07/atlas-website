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
    "title": "AI Revolutionizes Drug Discovery",
    "description": "Groundbreaking AI technology is rapidly accelerating the pace of drug discovery, potentially revolutionizing the healthcare industry. This innovative approach could drastically reduce the time and cost associated with bringing new treatments to market.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "October 11, 2022",
    "category": "Technology"
  },
  {
    "title": "New AI Ethics Guidelines Released",
    "description": "In response to growing concerns about AI bias and transparency, a leading tech organization has released a comprehensive new set of ethical guidelines for AI development. The guidelines aim to ensure AI systems are fair, accountable, and respect user privacy.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 11, 2022",
    "category": "Ethics"
  },
  {
    "title": "AI Tool Streamlines Manufacturing Processes",
    "description": "A new AI-powered tool is set to revolutionize manufacturing processes, promising significant efficiency improvements. The tool uses machine learning to predict and prevent equipment failures, reducing downtime and increasing productivity.",
    "url": "#",
    "source": "Forbes",
    "date": "October 11, 2022",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Research Breaks New Ground in Natural Language Processing",
    "description": "Researchers have made a significant breakthrough in natural language processing (NLP) with a new AI model. The model has achieved record-breaking performance, demonstrating a deeper understanding of human language than ever before.",
    "url": "#",
    "source": "Nature",
    "date": "October 11, 2022",
    "category": "Research"
  },
  {
    "title": "AI Start-up Secures Major Investment",
    "description": "An AI start-up specializing in predictive analytics has secured a major investment, reinforcing the growing interest in AI within the business sector. The funds will be used to expand the company's innovative services across new industries.",
    "url": "#",
    "source": "Business Insider",
    "date": "October 11, 2022",
    "category": "Business"
  }
];
