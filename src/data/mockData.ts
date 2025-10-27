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
    "title": "DeepMind's AlphaFold Solves Protein Folding Challenge",
    "description": "DeepMind's AI solution, AlphaFold, has made significant strides in solving the protein folding problem, a grand challenge in biology. This could revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "Nature",
    "date": "August 23, 2021",
    "category": "Research"
  },
  {
    "title": "IBM Watson Aids in Climate Predictions",
    "description": "IBM is leveraging its AI technology, Watson, to provide more accurate climate predictions. This innovation could help in planning and managing climate change impacts.",
    "url": "#",
    "source": "The Verge",
    "date": "August 23, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Retail: Amazon's New Checkout-free Grocery Stores",
    "description": "Amazon is expanding its AI-powered, checkout-free grocery stores, Amazon Go, across the US. This could redefine the retail experience amidst the COVID-19 pandemic.",
    "url": "#",
    "source": "Forbes",
    "date": "August 23, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Concerns Over Facial Recognition Use",
    "description": "The use of AI in facial recognition technology is facing increased scrutiny due to concerns over privacy and racial bias. Regulators and tech companies are grappling with these ethical dilemmas.",
    "url": "#",
    "source": "The Guardian",
    "date": "August 23, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI's GPT-3 Powers New Language Processing Tools",
    "description": "OpenAI's GPT-3, the latest generative pre-training transformer, is revolutionizing language processing tools with its impressive capabilities to understand and generate human-like text.",
    "url": "#",
    "source": "TechCrunch",
    "date": "August 23, 2021",
    "category": "Tools"
  }
];
