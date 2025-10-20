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
    "title": "AI Breakthrough: Quantum Algorithms Outsmart Classic Supercomputers",
    "description": "Researchers have announced a new quantum algorithm that is capable of running more complex computations than classic supercomputers. The development signifies a significant leap in AI research and quantum computing.",
    "url": "#",
    "source": "Nature",
    "date": "October 14, 2022",
    "category": "Research"
  },
  {
    "title": "AI Adoption Accelerates in Healthcare Industry",
    "description": "The healthcare industry has seen an unprecedented acceleration in the adoption of AI technologies. This trend is driven by the need for improved diagnostics and patient care during the global pandemic.",
    "url": "#",
    "source": "Healthcare Tech News",
    "date": "October 14, 2022",
    "category": "Business"
  },
  {
    "title": "Elon Musk Warns of AI Ethics in Recent Interview",
    "description": "In a recent interview, Tesla and SpaceX CEO Elon Musk again expressed his concerns about the ethical implications of AI development, calling for more regulation in the field.",
    "url": "#",
    "source": "The Verge",
    "date": "October 14, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI-Powered Tool Revolutionizes 3D Modeling",
    "description": "A new AI tool has been developed that significantly reduces the time taken to create detailed and accurate 3D models. The tool is expected to have significant impact in the gaming and movie industry.",
    "url": "#",
    "source": "MIT Technology Review",
    "date": "October 14, 2022",
    "category": "Tools"
  },
  {
    "title": "Breakthrough in AI Technology: Self-learning Robots",
    "description": "Scientists have developed a new AI technology that allows robots to learn from their mistakes. This development could have a significant impact on how robots are used in a variety of fields, from industrial applications to home use.",
    "url": "#",
    "source": "Wired",
    "date": "October 14, 2022",
    "category": "Technology"
  }
];
