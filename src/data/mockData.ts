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
    "title": "Revolutionizing Medicine: AI's Role in Predicting Heart Disease",
    "description": "Researchers have developed a new artificial intelligence model that can predict the likelihood of a patient developing heart disease with unprecedented accuracy. The breakthrough could pave the way for more personalized preventative medicine.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 14, 2022",
    "category": "Research"
  },
  {
    "title": "AI to the Rescue: Fighting Climate Change with Machine Learning",
    "description": "A recent study shows how AI and machine learning can help scientists predict climate patterns more accurately. This could be a crucial step towards combating global warming and achieving sustainability goals.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 14, 2022",
    "category": "Technology"
  },
  {
    "title": "Microsoft Acquires AI Startup to Boost Cloud Services",
    "description": "Microsoft has acquired an AI startup that specializes in machine learning algorithms. The acquisition promises to enhance their cloud services and accelerate digital transformation for businesses.",
    "url": "#",
    "source": "Forbes",
    "date": "October 14, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding Facial Recognition Technology",
    "description": "As facial recognition technology becomes increasingly prevalent, concerns about privacy and ethical implications are rising. Experts are calling for regulations to ensure responsible use of this powerful AI tool.",
    "url": "#",
    "source": "BBC News",
    "date": "October 14, 2022",
    "category": "Ethics"
  },
  {
    "title": "Google Launches New AI Language Processing Tool",
    "description": "Google has launched a new language processing AI tool that promises to revolutionize how we interact with technology. The tool uses advanced machine learning to understand and respond to human language with incredible accuracy.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 14, 2022",
    "category": "Tools"
  }
];
