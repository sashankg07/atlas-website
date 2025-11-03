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
    "title": "AI System Beats Human Doctors in Diagnosing Skin Cancer",
    "description": "A groundbreaking AI system has outperformed human doctors in diagnosing skin cancer, marking a significant milestone in medical AI. The system utilized deep learning algorithms to correctly identify malignant melanomas with remarkable accuracy.",
    "url": "#",
    "source": "New York Times",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "Facebook Unveils New AI Tool to Detect Deepfakes",
    "description": "Facebook has announced a new AI tool designed to detect and combat deepfake videos. The move comes as part of the tech giant's ongoing efforts to curb the spread of misinformation on its platform.",
    "url": "#",
    "source": "BBC News",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "IBM Unleashes AI in Fight Against Climate Change",
    "description": "IBM has launched a new initiative using AI to combat climate change. The company's AI models will analyze environmental data to predict climate patterns and help businesses make sustainable decisions.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Debate Surrounds Use of AI in Military Drones",
    "description": "The use of AI in military drones has sparked a global debate on the ethical implications. Critics argue that autonomous weapons systems pose significant moral and legal risks.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "TensorFlow 2.6: Latest Updates and Features",
    "description": "Google's TensorFlow has released version 2.6 with exciting new features. The updates include improvements in model training, inference, and several new APIs.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
