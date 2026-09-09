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
    "title": "AI Breaks New Ground in Climate Change Predictions",
    "description": "Artificial Intelligence is revolutionizing climate change models, improving their accuracy and efficiency. These advancements could provide vital insights for future climate policies.",
    "url": "#",
    "source": "The New York Times",
    "date": "March 21, 2023",
    "category": "Research"
  },
  {
    "title": "AI Startup Raises $200M for Autonomous Vehicles",
    "description": "A leading AI startup has successfully raised $200 million in Series C funding for the development of autonomous vehicle technology. The investment will help accelerate the company's advancements in the self-driving industry.",
    "url": "#",
    "source": "Bloomberg",
    "date": "March 21, 2023",
    "category": "Business"
  },
  {
    "title": "New AI Tool Streamlines Customer Service",
    "description": "A new AI tool is transforming customer service operations by automating responses and providing faster solutions. The tool is set to drastically improve customer experience and business efficiency.",
    "url": "#",
    "source": "TechCrunch",
    "date": "March 21, 2023",
    "category": "Tools"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics: Balancing Benefits and Risks",
    "description": "As AI technology develops at an unprecedented rate, ethical considerations are coming to the forefront. Experts are calling for careful regulations to ensure the technology is used responsibly.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 21, 2023",
    "category": "Ethics"
  },
  {
    "title": "AI Transforms Drug Discovery Process",
    "description": "Artificial Intelligence is being used to expedite the drug discovery process, providing hope for faster and more efficient treatments. The technology could revolutionize the pharmaceutical industry.",
    "url": "#",
    "source": "Forbes",
    "date": "March 21, 2023",
    "category": "Technology"
  }
];
