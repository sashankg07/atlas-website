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
    "title": "Revolutionizing Healthcare: AI Diagnoses Diseases as Accurately as Doctors",
    "description": "Recent studies show that AI can now diagnose a range of diseases with the same accuracy as healthcare professionals. This breakthrough has potential to transform the medical field.",
    "url": "#",
    "source": "The New York Times",
    "date": "March 03, 2023",
    "category": "Research"
  },
  {
    "title": "AI Takes the Wheel: Self-Driving Cars Now Safer Than Human Drivers",
    "description": "New data reveals that AI-controlled vehicles have a lower accident rate than those driven by humans. This development could accelerate the widespread adoption of autonomous vehicles.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 03, 2023",
    "category": "Technology"
  },
  {
    "title": "Tech Giants Invest Billions in AI Startups",
    "description": "Major tech companies are pouring billions into AI startups, signaling a shift in the business landscape. This trend emphasizes the growing importance of AI in the economy.",
    "url": "#",
    "source": "Forbes",
    "date": "March 03, 2023",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "New Guidelines Set for Ethical Use of AI",
    "description": "In response to growing concerns about AI misuse, international bodies have established new guidelines. These norms aim to ensure ethical and responsible use of AI.",
    "url": "#",
    "source": "The Economist",
    "date": "March 03, 2023",
    "category": "Ethics"
  },
  {
    "title": "AI-Powered Tools Transforming Graphic Design",
    "description": "AI-powered tools are reshaping the graphic design industry by automating complex tasks. These new tools offer unprecedented efficiency and creative possibilities.",
    "url": "#",
    "source": "Wired",
    "date": "March 03, 2023",
    "category": "Tools"
  }
];
