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
    "title": "AI Breakthrough: Discovering New Materials",
    "description": "Researchers have developed an AI model capable of predicting the properties of new materials, opening doors to numerous scientific advancements. The technology could fast-track the discovery process in industries like pharmaceuticals, electronics, and more.",
    "url": "#",
    "source": "The AI Journal",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "Revolutionizing E-Commerce with AI",
    "description": "In the competitive e-commerce landscape, businesses are turning to AI to optimize customer experiences. The technology not only enables personalized shopping experiences but also enhances supply chain management.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 30, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics: The Debate Intensifies",
    "description": "As AI technology continues to evolve, so do concerns about its ethical implications. Experts call for robust regulatory frameworks to ensure AI systems do not perpetuate harmful biases or infringe on privacy rights.",
    "url": "#",
    "source": "The Verge",
    "date": "September 30, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "DeepMind's AI Masters Protein Folding",
    "description": "DeepMind's AI algorithm, AlphaFold, has made a breakthrough in solving the protein folding problem. This development accelerates research in diseases like Alzheimer's and cancer.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI Tools: Streamlining Workflow Across Industries",
    "description": "From healthcare to finance, AI tools are being leveraged to streamline workflows and enhance productivity. Companies report significant improvements in efficiency and accuracy.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
