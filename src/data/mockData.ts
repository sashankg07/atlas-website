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
    "title": "AI Beats Humans in Complex Strategy Game",
    "description": "Google's subsidiary, DeepMind, has recently developed an AI that can outperform humans in the complex strategy game, StarCraft II. The AI, known as 'AlphaStar', uses deep learning to strategize and make decisions in real-time.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI in Healthcare: Revolutionizing Patient Care",
    "description": "IBM's Watson Health is leveraging AI to improve patient care with predictive analytics. The technology is designed to predict patient outcomes and help healthcare providers make more informed decisions.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 30, 2022",
    "category": "Business"
  },
  {
    "title": "Ethical Concerns Surrounding Facial Recognition Technology",
    "description": "In the wake of increasing use of AI in surveillance and policing, the ethics of facial recognition technology are being brought into question. Advocates call for stringent regulations to prevent misuse of the technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-Powered Tool Predicts Climate Change Impact",
    "description": "A new research project by the University of Cambridge utilizes AI to predict the environmental impact of climate change. The tool analyzes past climate data and predicts future scenarios, aiming to help policy makers in decision-making.",
    "url": "#",
    "source": "BBC News",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "OpenAI Releases New Language Processing Tool",
    "description": "OpenAI has released an innovative language processing tool, GPT-4, which is capable of understanding and generating human-like text. The tool is expected to revolutionize content creation and customer service interactions.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
