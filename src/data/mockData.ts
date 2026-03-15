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
    "title": "Groundbreaking AI System Unveils New Possibilities for Drug Discovery",
    "description": "An innovative AI system has been developed that could greatly accelerate the process of drug discovery. Its machine learning algorithm predicts the pharmacological properties of drugs, potentially reducing the time and cost of new drug development.",
    "url": "#",
    "source": "The AI Journal",
    "date": "December 05, 2021",
    "category": "Research"
  },
  {
    "title": "AI Adoption Skyrockets in Business Amid Pandemic",
    "description": "The pandemic has accelerated the adoption of AI in businesses, as companies turn to technology to navigate the new normal. AI is being used to automate processes, improve decision-making, and enhance customer experience.",
    "url": "#",
    "source": "Forbes",
    "date": "December 05, 2021",
    "category": "Business"
  },
  {
    "title": "AI System Outperforms Humans in Designing Floorplans",
    "description": "A new AI system developed by researchers has demonstrated the ability to design floorplans more effectively than human architects. The system uses generative design principles to optimize space utilization and energy efficiency.",
    "url": "#",
    "source": "Nature",
    "date": "December 05, 2021",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise over AI's Role in Job Recruitment",
    "description": "The use of AI in job recruitment processes has sparked concerns over potential bias and privacy issues. Experts are calling for greater transparency and regulation in how these systems are used and developed.",
    "url": "#",
    "source": "The Guardian",
    "date": "December 05, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Unveils Cutting-Edge Language Understanding Tool",
    "description": "OpenAI has introduced a new language understanding tool that enhances the ability of AI to grasp complex linguistic concepts. The tool is predicted to revolutionize various sectors from customer service to content creation.",
    "url": "#",
    "source": "TechCrunch",
    "date": "December 05, 2021",
    "category": "Tools"
  }
];
