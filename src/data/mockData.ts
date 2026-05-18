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
    "title": "DeepMind's AI Masters the Game of Go Without Human Input",
    "description": "DeepMind's latest AI iteration, AlphaGo Zero, has learned to play the ancient game of Go entirely by itself, demonstrating a leap forward in AI self-learning capabilities.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 05, 2021",
    "category": "Research"
  },
  {
    "title": "OpenAI's GPT-3: An AI Game-Changer or an Environmental Threat?",
    "description": "While OpenAI's GPT-3 language model has shown remarkable capabilities, concerns are rising about its environmental impact due to the vast amounts of energy used in training.",
    "url": "#",
    "source": "BBC News",
    "date": "November 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "IBM Unveils Breakthrough in AI-Based Prescriptive Analytics",
    "description": "IBM has revealed a cutting-edge development in prescriptive analytics, which allows AI to suggest actions based on predictions, potentially revolutionizing decision-making in businesses.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 05, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Helps Decipher Long-Lost Languages",
    "description": "Researchers are employing machine learning algorithms to decode ancient scripts, opening up new possibilities in the field of archaeology and linguistics.",
    "url": "#",
    "source": "National Geographic",
    "date": "November 05, 2021",
    "category": "Technology"
  },
  {
    "title": "TensorFlow 2.5: A New Era for AI Development Tools",
    "description": "The latest update of Google's TensorFlow, a popular open-source AI framework, offers improved performance and new features, promising to push the boundaries of AI development.",
    "url": "#",
    "source": "Wired",
    "date": "November 05, 2021",
    "category": "Tools"
  }
];
