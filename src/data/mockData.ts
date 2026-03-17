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
    "title": "AI Outperforms Humans in Predicting Heart Attacks",
    "description": "A new AI algorithm developed by CardiAI Inc. has shown promising results in early detection of heart diseases, outperforming doctors in accurately predicting heart attacks.",
    "url": "#",
    "source": "The New York Times",
    "date": "November 12, 2021",
    "category": "Research"
  },
  {
    "title": "AI Helps in the Fight Against Climate Change",
    "description": "Researchers at MIT have developed an AI model that predicts climate patterns with unprecedented accuracy, providing valuable insights for climate change mitigation strategies.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "November 12, 2021",
    "category": "Technology"
  },
  {
    "title": "OpenAI's New Language Model, GPT-4, Sets New Benchmark",
    "description": "OpenAI's latest AI language model, GPT-4, is setting new benchmarks in natural language understanding and generation, showing improvements in translation, summarization and conversation tasks.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 12, 2021",
    "category": "Research"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Google's AI Ethics Scandal: What You Need to Know",
    "description": "The recent firing of two prominent AI ethics researchers by Google has sparked an industry-wide debate about the influence of big tech in AI ethics research.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 12, 2021",
    "category": "Ethics"
  },
  {
    "title": "TensorFlow 2.6 Released: A Deep Dive into the New Features",
    "description": "Google has released TensorFlow 2.6, the latest version of its popular open-source machine learning library, with many new features and updates that enhance model performance and ease of use.",
    "url": "#",
    "source": "The Verge",
    "date": "November 12, 2021",
    "category": "Tools"
  }
];
