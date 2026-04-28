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
    "title": "DeepMind Solves 50-Year-Old 'Protein Folding' Problem",
    "description": "DeepMind's AI program AlphaFold has made a major breakthrough in bioscience by solving the 50-year-old challenge of protein folding. This development could accelerate research in diseases like cancer and COVID-19.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 14, 2021",
    "category": "Research"
  },
  {
    "title": "AI Is Now Capable of Creating Lifelike Art and Music",
    "description": "AI programs are now capable of creating stunningly realistic art and music, opening a new chapter in creativity. These developments are revolutionizing the creative industry.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 14, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: Companies Leveraging AI for Competitive Advantage",
    "description": "More and more businesses are turning to AI for a competitive edge, transforming industries. This trend is expected to continue as the technology becomes more accessible.",
    "url": "#",
    "source": "Forbes",
    "date": "September 14, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Questions Surrounding the Use of AI in Surveillance",
    "description": "As AI is increasingly used in surveillance, ethical questions are being raised about privacy and consent. Experts are calling for regulations to guide its use.",
    "url": "#",
    "source": "BBC",
    "date": "September 14, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Transforming Software Development",
    "description": "AI-powered tools are changing the way software is developed, making it faster and more efficient. These tools are predicted to dominate the future of software development.",
    "url": "#",
    "source": "TechCrunch",
    "date": "September 14, 2021",
    "category": "Tools"
  }
];
