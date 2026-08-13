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
    "title": "AI Now Capable of Simulating Quantum Physics",
    "description": "In a major breakthrough, researchers have developed an artificial intelligence system capable of simulating quantum physics phenomena. This new development could revolutionize the way we understand the quantum world.",
    "url": "#",
    "source": "The AI Times",
    "date": "November 02, 2021",
    "category": "Research"
  },
  {
    "title": "AI Pioneers New Frontiers in Climate Change Mitigation",
    "description": "AI is being used to tackle climate change, with new predictive models providing unprecedented insights into climate patterns. The technology could play a huge role in global efforts to reduce carbon emissions.",
    "url": "#",
    "source": "Tech World Daily",
    "date": "November 02, 2021",
    "category": "Technology"
  },
  {
    "title": "Tech Giant Invests Billions in AI for Business Applications",
    "description": "A leading tech company has announced a multi-billion dollar investment in AI to boost its business intelligence capabilities. The move signifies the increasing importance of AI in the business landscape.",
    "url": "#",
    "source": "Business AI Weekly",
    "date": "November 02, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Implications of AI Highlighted in Recent Study",
    "description": "A recent study has highlighted the ethical dilemmas presented by AI, emphasizing the need for regulations to prevent misuse. The study calls for more transparency and accountability in the AI industry.",
    "url": "#",
    "source": "AI Ethics Journal",
    "date": "November 02, 2021",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Predicts Market Trends with Unmatched Accuracy",
    "description": "A groundbreaking AI tool has been developed that predicts market trends with an astounding degree of accuracy. The tool is expected to transform various sectors, including finance and retail.",
    "url": "#",
    "source": "AI Tools Review",
    "date": "November 02, 2021",
    "category": "Tools"
  }
];
