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
    "title": "AI Breaks Ground in Early Cancer Detection",
    "description": "A revolutionary AI model can now predict the onset of specific types of cancer years before symptoms appear. This breakthrough could drastically improve early detection and treatment outcomes.",
    "url": "#",
    "source": "Nature",
    "date": "October 06, 2021",
    "category": "Research"
  },
  {
    "title": "AI Plays Pivotal Role in Climate Change Mitigation",
    "description": "New AI-powered models are providing unprecedented accuracy in climate prediction, aiding global efforts to mitigate climate change. The tech is also being utilized to optimize renewable energy production.",
    "url": "#",
    "source": "Scientific American",
    "date": "October 06, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Startup Raises $50M in Series B Funding",
    "description": "AI startup, SynthAI, has successfully raised $50 million in Series B funding. The company aims to utilize the funds to enhance its synthetic data generation capabilities.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 06, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Over AI Face Recognition Intensify",
    "description": "Concerns over the ethical implications of AI-powered facial recognition technology continue to grow. Critics argue that without proper regulation, the technology could be used for mass surveillance or discrimination.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 06, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Toolkit Accelerates Deep Learning Research",
    "description": "A new open-source toolkit, DeepLearn, has been launched to accelerate deep learning research. The toolkit simplifies the process of building, training, and deploying complex models.",
    "url": "#",
    "source": "MIT News",
    "date": "October 06, 2021",
    "category": "Tools"
  }
];
