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
    "title": "AI Revolution: Ground-breaking AI Model Deciphers Long-Lost Languages",
    "description": "Researchers have developed a new artificial intelligence model that can decode and translate ancient languages. With this development, the mysteries of these languages may soon be unraveled.",
    "url": "#",
    "source": "Nature",
    "date": "September 30, 2021",
    "category": "Research"
  },
  {
    "title": "AI in Space: NASA Leverages AI to Predict Space Weather",
    "description": "NASA is employing artificial intelligence to predict solar flares and other space weather. This AI-based approach could prove critical for future space missions.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Healthcare: Google's Latest AI Tool Predicts Heart Disease",
    "description": "Google has unveiled a new AI tool that can predict heart disease by analyzing eye scans. The revolutionary AI tool could help in early detection and prevention of heart disease.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "The Ethical Dilemma: AI and Bias in Hiring Practices",
    "description": "A recent study reveals that AI systems used in hiring processes could be perpetuating bias. The study calls for stricter regulations and transparency in AI applications.",
    "url": "#",
    "source": "The Wall Street Journal",
    "date": "September 30, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools: Microsoft Launches New AI-based Writing Assistant",
    "description": "Microsoft has launched a new AI-based writing tool that can detect and correct grammatical errors. The tool is expected to be a boon for non-native English speakers.",
    "url": "#",
    "source": "The Washington Post",
    "date": "September 30, 2021",
    "category": "Tools"
  }
];
