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
    "title": "AI Breaks New Ground in Climate Change Prediction",
    "description": "New AI models are revolutionizing our understanding and prediction of climate change patterns. These models offer unprecedented accuracy, enabling more effective planning and mitigation efforts.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 18, 2021",
    "category": "Research"
  },
  {
    "title": "Revolutionizing Healthcare: AI's Role in Disease Diagnosis",
    "description": "AI is transforming healthcare with machine learning models capable of diagnosing diseases with increased speed and precision. This breakthrough could significantly reduce the time for diagnosis and treatment.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 18, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: Automating Customer Service",
    "description": "More companies are adopting AI in their customer service departments, leveraging chatbots and virtual assistants to enhance customer experience and increase efficiency.",
    "url": "#",
    "source": "Forbes",
    "date": "September 18, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical AI: Balancing Innovation with Responsible Use",
    "description": "As AI continues to advance, there's a growing focus on ethical AI implementation. Experts argue for the need for a balance between technological advancement and responsible use.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 18, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tools Streamline Data Analysis",
    "description": "The latest AI tools are simplifying data analysis, offering accessible ways for businesses to leverage big data. This could democratize data-driven decision-making across industries.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 18, 2021",
    "category": "Tools"
  }
];
