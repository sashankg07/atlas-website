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
    "title": "AI Breaks New Ground in Protein Folding Predictions",
    "description": "A recent development in AI has allowed for significant advances in predicting protein folding. This breakthrough has the potential to revolutionize drug discovery and disease understanding.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "AI and Ethics: The Implications of Facial Recognition Technology",
    "description": "As AI continues to advance, facial recognition technology has raised questions about privacy and ethics. Advocates argue for its potential benefits, while critics worry about surveillance and bias.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "A New Era of AI in Business: Automating Decision-making",
    "description": "AI is transforming the business landscape by automating decision-making processes. This trend allows businesses to make more informed decisions, drive efficiency, and boost productivity.",
    "url": "#",
    "source": "Forbes",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Revolutionizes Climate Change Predictions",
    "description": "Artificial Intelligence is enhancing climate change predictions with more precise models. These advancements could significantly impact policy-making and climate action strategies.",
    "url": "#",
    "source": "BBC News",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "OpenAI Releases New Language Model API",
    "description": "OpenAI has released a new API for its language model, promising improved performance and versatility. The tool is expected to revolutionize natural language processing tasks.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
