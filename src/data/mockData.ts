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
    "title": "AI Outperforms Humans in Identifying Cancer Cells",
    "description": "Recent research shows that AI models can now identify cancer cells more accurately than human scientists. This breakthrough could revolutionize early cancer detection and treatment.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 13, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Algorithm Predicts Climate Change Impacts",
    "description": "Scientists have developed an AI algorithm capable of predicting the impact of climate change with unprecedented accuracy. This tool could be instrumental in planning for a sustainable future.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 13, 2022",
    "category": "Technology"
  },
  {
    "title": "Artificial Intelligence Transforming the Business Landscape",
    "description": "AI is being harnessed to transform business operations, with companies implementing AI technologies to streamline processes and boost efficiency. This trend is expected to significantly shape the future of business.",
    "url": "#",
    "source": "Forbes",
    "date": "October 13, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Addressing Ethical Concerns in AI Development",
    "description": "As AI continues to permeate different sectors, questions around ethical use are increasingly important. Researchers are calling for more robust guidelines to ensure AI development aligns with human values.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 13, 2022",
    "category": "Ethics"
  },
  {
    "title": "Introducing the Latest AI Tools for Researchers",
    "description": "A new suite of AI tools designed to help researchers analyze complex data sets has been launched. The tools are expected to significantly speed up research in various fields.",
    "url": "#",
    "source": "Nature",
    "date": "October 13, 2022",
    "category": "Tools"
  }
];
