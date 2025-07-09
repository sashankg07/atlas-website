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
    "title": "AI Beats Humans at Understanding Written Sentiments",
    "description": "In a groundbreaking development, Artificial Intelligence now surpasses human abilities in understanding written emotions. This could revolutionise online communication and marketing strategies.",
    "url": "#",
    "source": "The AI Times",
    "date": "September 29, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Adopt AI to Boost Cybersecurity Measures",
    "description": "As cyber threats continue to rise, tech giants like Google and Microsoft are leveraging AI to combat these threats. This trend is set to redefine the cybersecurity landscape.",
    "url": "#",
    "source": "Digital Trends",
    "date": "September 29, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Business: Is it Changing the Game?",
    "description": "AI is reshaping the business world with its ability to automate tasks, generate insights, and create personalized experiences. Companies that adapt to this technology are witnessing unprecedented growth.",
    "url": "#",
    "source": "Business Insider",
    "date": "September 29, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Surrounding AI's Rapid Advancement",
    "description": "As AI continues to evolve, ethical concerns such as privacy, bias, and job displacement are becoming increasingly important. Industry leaders are calling for comprehensive regulatory policies.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 29, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms the Field of Data Analysis",
    "description": "A new AI tool, designed to analyze and interpret complex data sets, is set to revolutionize the field of data analysis. The tool has the potential to speed up decision-making processes and improve accuracy.",
    "url": "#",
    "source": "Tech Crunch",
    "date": "September 29, 2021",
    "category": "Tools"
  }
];
