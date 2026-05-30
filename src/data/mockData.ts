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
    "title": "AI Now Capable of Detecting Deepfakes More Effectively",
    "description": "Researchers unveil a new AI technique that accurately identifies deepfake images, bringing a significant breakthrough in combating misinformation. The AI model, trained on thousands of real and deepfake images, can spot the difference with 97% accuracy.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "February 26, 2023",
    "category": "Research"
  },
  {
    "title": "IBM Introduces AI System to Improve Supply Chain Management",
    "description": "IBM has launched an AI-based system designed to optimize supply chain management. The system predicts future trends and potential disruptions, enabling businesses to take proactive measures.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "February 26, 2023",
    "category": "Business"
  },
  {
    "title": "New AI Tool Transforms Sketches into Photorealistic Images",
    "description": "A newly developed AI tool can convert simple sketches into highly detailed and photorealistic images. The tool could revolutionize various fields like graphic design, architecture, and even video game design.",
    "url": "#",
    "source": "The Verge",
    "date": "February 26, 2023",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Council Formed to Guide Responsible AI Development",
    "description": "A global council focused on AI ethics has been formed to guide the development of AI in a responsible and ethical manner. The council aims to address concerns about data privacy, bias, and the impact of AI on jobs.",
    "url": "#",
    "source": "BBC News",
    "date": "February 26, 2023",
    "category": "Ethics"
  },
  {
    "title": "AI Breakthrough in Predicting Climate Change Impacts",
    "description": "Scientists have developed an AI model that can predict the impact of climate change with unprecedented accuracy. This could provide crucial insights for policymakers and environmentalists.",
    "url": "#",
    "source": "Nature",
    "date": "February 26, 2023",
    "category": "Technology"
  }
];
