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
    "title": "AI Outperforms Human Experts in Identifying Cervical Precancer",
    "description": "Researchers have trained an artificial intelligence model to detect precancerous changes in the cervix more accurately than expert clinicians. The breakthrough could have significant implications for cervical cancer screening, particularly in low-resource settings.",
    "url": "#",
    "source": "Nature Communications",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "OpenAI Unveils New Language Model, GPT-4",
    "description": "OpenAI has revealed its latest AI model, GPT-4, which exhibits a remarkable understanding of human language. The new model is expected to have applications ranging from content creation to customer service.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "IBM and Top Banks Develop AI Solution for Regulatory Compliance",
    "description": "IBM, in collaboration with top banks, has developed an AI system capable of understanding and interpreting complex financial regulations. This technology could help financial institutions streamline their compliance operations and reduce costs.",
    "url": "#",
    "source": "Financial Times",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics of AI: New Guidelines for Responsible AI Development",
    "description": "Leading AI researchers have published new ethical guidelines for the development of artificial intelligence. The document outlines the importance of transparency, fairness, and accountability in AI technology.",
    "url": "#",
    "source": "AI Ethics Journal",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI Tool to Improve Urban Planning",
    "description": "Google has introduced a new AI tool that allows urban planners to visualize and predict the impact of urban development projects. The tool utilizes machine learning to analyze data from various sources and generate detailed predictions.",
    "url": "#",
    "source": "Wired",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
