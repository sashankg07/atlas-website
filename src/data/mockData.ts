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
    "title": "AI Outperforms Humans in Reading Comprehension Test",
    "description": "A groundbreaking research paper reveals that an AI model has surpassed human performance in a reading comprehension test for the first time. This breakthrough has potential implications for numerous industries, from education to customer service.",
    "url": "#",
    "source": "The AI Journal",
    "date": "November 09, 2021",
    "category": "Research"
  },
  {
    "title": "Revolutionary AI Chip Promises Faster Processing With Lower Energy Consumption",
    "description": "Tech giant Intel has announced the development of a new AI chip that promises to drive faster computations while significantly reducing energy consumption. This innovation could revolutionize the tech industry and accelerate AI adoption.",
    "url": "#",
    "source": "TechCrunch",
    "date": "November 09, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $100M for Predictive Analytics",
    "description": "DataRobot, an AI startup specializing in automated machine learning, has raised $100M in a Series D funding round. The company's platform allows businesses to build and deploy machine learning models quickly and efficiently.",
    "url": "#",
    "source": "Forbes",
    "date": "November 09, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethicist Calls for More Transparency in AI Decision-Making",
    "description": "Renowned AI ethicist, Dr. Timnit Gebru, advocates for greater transparency in AI decision-making processes. She emphasizes the need for public understanding of AI systems to prevent misuse and address potential biases.",
    "url": "#",
    "source": "The Guardian",
    "date": "November 09, 2021",
    "category": "Ethics"
  },
  {
    "title": "New Open-Source AI Tool Streamlines Deep Learning",
    "description": "TensorFlow has released a new open-source AI tool that simplifies the process of creating and training deep learning models. The tool is expected to democratize access to advanced AI technology, enabling more developers to leverage AI in their work.",
    "url": "#",
    "source": "Wired",
    "date": "November 09, 2021",
    "category": "Tools"
  }
];
