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
    "title": "AI Revolutionizes Medical Diagnosis with Incredible Accuracy",
    "description": "Recent advancements in AI technology have led to breakthroughs in medical diagnostics, with AI models outperforming human doctors in certain tests. This technological leap could revolutionize healthcare, making diagnostics faster, more accurate, and cost-effective.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Ethics: Balancing Innovation and Regulation",
    "description": "As AI becomes more pervasive, ethical concerns surrounding its use continue to mount. Policymakers and technologists are grappling to find the right balance between fostering innovation and ensuring ethical use of AI.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Pave the Way for Autonomous Vehicles",
    "description": "Innovative AI tools are fast-tracking the development of autonomous vehicles. These tools are enhancing vehicle perception capabilities and decision-making processes, bringing us closer to the reality of self-driving cars.",
    "url": "#",
    "source": "Wired",
    "date": "October 29, 2021",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "How AI is Transforming the Business Landscape",
    "description": "Artificial Intelligence is not just a buzzword anymore. It's dramatically reshaping the way companies operate, from automating routine tasks to delivering personalized customer experiences.",
    "url": "#",
    "source": "Forbes",
    "date": "October 29, 2021",
    "category": "Business"
  },
  {
    "title": "AI Research Unveils Next-Gen Machine Learning Models",
    "description": "Researchers have developed advanced machine learning models that promise to significantly improve AI capabilities. These models are capable of learning more complex patterns and making more accurate predictions.",
    "url": "#",
    "source": "Nature",
    "date": "October 29, 2021",
    "category": "Research"
  }
];
