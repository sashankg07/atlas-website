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
    "title": "DeepMind's AlphaFold Solves Decades-Old Biological Mystery",
    "description": "DeepMind's AI model, AlphaFold, has solved a 50-year-old challenge in biology, predicting the 3D structures of proteins accurately. This breakthrough could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 21, 2022",
    "category": "Research"
  },
  {
    "title": "AI Beats Humans at Popular Strategy Game Go",
    "description": "Google's AI, AlphaGo, has defeated the world champion of Go, marking a significant milestone in AI development. This achievement shows the potential of AI in complex decision-making scenarios.",
    "url": "#",
    "source": "BBC News",
    "date": "September 21, 2022",
    "category": "Technology"
  },
  {
    "title": "OpenAI Develops ChatGPT, the Most Advanced AI Language Model",
    "description": "OpenAI has developed ChatGPT, an AI language model that can generate human-like text. This development points to significant advances in natural language processing.",
    "url": "#",
    "source": "OpenAI Blog",
    "date": "September 21, 2022",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Microsoft Invests $1 Billion in OpenAI",
    "description": "Microsoft has invested $1 billion in OpenAI to develop AI technologies that can be deployed on Microsoft's Azure cloud platform. The move signifies Microsoft's intent to lead the AI market.",
    "url": "#",
    "source": "Reuters",
    "date": "September 21, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics in Spotlight After Twitter's Algorithm Bias Controversy",
    "description": "Twitter's image cropping algorithm has sparked a controversy over potential racial and gender bias, putting AI ethics into the spotlight. This incident reaffirms the need for transparency and fairness in AI development.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 21, 2022",
    "category": "Ethics"
  }
];
