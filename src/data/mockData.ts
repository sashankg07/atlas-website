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
    "title": "AI Just Solved a 50-Year-Old Science Problem, Revolutionizing Biological Research",
    "description": "Google's DeepMind has solved a decades-old problem related to protein folding, opening up incredible possibilities in drug discovery and disease understanding. This breakthrough is expected to accelerate biological research and herald a new era in AI applications in science.",
    "url": "#",
    "source": "The New York Times",
    "date": "December 15, 2021",
    "category": "Research"
  },
  {
    "title": "OpenAI's GPT-3 Powers New Wave of AI Language Tools",
    "description": "OpenAI's GPT-3 model, known for its impressive language generation capabilities, is now powering a suite of AI language tools. These tools are set to redefine content creation, translation, and communication across various industries.",
    "url": "#",
    "source": "Wired",
    "date": "December 15, 2021",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Cybersecurity Startup 'CyberX'",
    "description": "Microsoft has acquired CyberX, a startup specializing in AI-powered cybersecurity solutions. The acquisition is expected to strengthen Microsoft's AI capabilities in cybersecurity and provide more robust protections for its customers.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "December 15, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics in Focus: Unpacking the Bias in Machine Learning",
    "description": "As AI becomes more pervasive, concerns about inherent biases in machine learning models are growing. Ethicists and AI researchers are working together to develop strategies for building more equitable AI systems.",
    "url": "#",
    "source": "Nature",
    "date": "December 15, 2021",
    "category": "Ethics"
  },
  {
    "title": "IBM Unleashes Watson AI for IT Operations",
    "description": "IBM has released its Watson AIOps, a suite of AI tools designed to automate and optimize IT operations. The tools are expected to help businesses reduce costs and improve efficiency by predicting and resolving IT issues before they impact operations.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 15, 2021",
    "category": "Tools"
  }
];
