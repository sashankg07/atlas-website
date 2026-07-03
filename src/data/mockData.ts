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
    "title": "AI Breaks Ground in Cancer Diagnosis",
    "description": "Artificial Intelligence is making waves in the medical sector, now capable of diagnosing certain types of cancer more accurately than human doctors. The technology is expected to greatly enhance early detection and treatment methods.",
    "url": "#",
    "source": "The New York Times",
    "date": "February 22, 2023",
    "category": "Research"
  },
  {
    "title": "Elon Musk's Neuralink Unveils AI Brain Implant",
    "description": "Elon Musk's Neuralink has made a breakthrough in AI technology, revealing a brain implant that could potentially enhance human cognitive abilities. The device is currently being tested and refined for consumer use.",
    "url": "#",
    "source": "Bloomberg",
    "date": "February 22, 2023",
    "category": "Technology"
  },
  {
    "title": "Tech Giants Invest Heavily in AI Startups",
    "description": "Major technology corporates like Google and Apple are increasingly investing in AI-based startups. These investments indicate the growing relevance and potential of AI in various industries.",
    "url": "#",
    "source": "Forbes",
    "date": "February 22, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Challenges Arise from AI's Role in Hiring",
    "description": "As companies turn to AI for hiring decisions, concerns are being raised about the ethical implications of this trend. Potential biases in AI algorithms and the lack of transparency are the main areas of focus.",
    "url": "#",
    "source": "The Guardian",
    "date": "February 22, 2023",
    "category": "Ethics"
  },
  {
    "title": "New Open-Source AI Tool Paves Way for Innovation",
    "description": "A new open-source AI tool released by a Silicon Valley startup is helping developers across the globe build AI-based applications. The tool aims at reducing the barriers in AI development and encourage innovations.",
    "url": "#",
    "source": "TechCrunch",
    "date": "February 22, 2023",
    "category": "Tools"
  }
];
