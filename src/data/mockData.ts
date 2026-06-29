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
    "title": "AI Breaks New Ground in Predicting Alzheimer's",
    "description": "Researchers have developed an AI model that can predict the onset of Alzheimer's disease with over 95% accuracy. The new system uses deep learning to analyze brain scans and identify early signs of the disease.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 26, 2022",
    "category": "Research"
  },
  {
    "title": "AI Revolutionizes E-commerce Personalization",
    "description": "Advanced AI algorithms are reshaping the e-commerce industry by providing highly personalized customer experiences. These advancements are helping retailers increase conversion rates and improve customer retention.",
    "url": "#",
    "source": "Forbes",
    "date": "September 26, 2022",
    "category": "Business"
  },
  {
    "title": "AI Ethics Under Scrutiny as Bias Concerns Surface",
    "description": "As AI continues to evolve, ethical concerns about bias and fairness are coming to the forefront. Leaders in the field are calling for more transparency and accountability in AI systems.",
    "url": "#",
    "source": "BBC News",
    "date": "September 26, 2022",
    "category": "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Transforms Climate Change Modeling",
    "description": "Scientists are leveraging AI technology to more accurately predict the impacts of climate change. The technology is helping to provide more precise data, leading to more effective mitigation strategies.",
    "url": "#",
    "source": "Nature",
    "date": "September 26, 2022",
    "category": "Research"
  },
  {
    "title": "New AI Tools Revolutionize Software Development",
    "description": "A new wave of AI-powered tools is automating and streamlining many aspects of software development, from coding to testing. These tools are promising to make software development faster and more efficient.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 26, 2022",
    "category": "Tools"
  }
];
