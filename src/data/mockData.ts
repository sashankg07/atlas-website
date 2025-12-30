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
    "title": "Revolutionizing Healthcare: AI Detects Rare Diseases with Unprecedented Accuracy",
    "description": "Researchers have developed an AI model capable of diagnosing rare diseases with accuracy never seen before. This breakthrough could dramatically improve patient outcomes and save healthcare systems millions.",
    "url": "#",
    "source": "The New York Times",
    "date": "October 06, 2021",
    "category": "Research"
  },
  {
    "title": "New AI Tech Predicts Climate Change Impact on Global Economy",
    "description": "A cutting-edge AI tool that predicts the impact of climate change on the global economy has been unveiled. The technology could help policymakers make informed decisions to combat climate change.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 06, 2021",
    "category": "Technology"
  },
  {
    "title": "AI Start-up Raises $200 Million in Series C Funding",
    "description": "An AI start-up specializing in autonomous driving technology has raised $200 million in Series C funding. The investment will be used to accelerate the company's research and development efforts.",
    "url": "#",
    "source": "Wall Street Journal",
    "date": "October 06, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethical Concerns Rise Over AI's Role in Employment Decisions",
    "description": "Concerns are growing over the ethical implications of AI's increased role in hiring decisions. Critics argue the technology may perpetuate biases, calling for greater transparency and regulation.",
    "url": "#",
    "source": "BBC News",
    "date": "October 06, 2021",
    "category": "Ethics"
  },
  {
    "title": "OpenAI Unveils New Language Model That Writes Code",
    "description": "OpenAI has unveiled a new AI language model capable of writing functioning code. The tool has the potential to revolutionize software development, making it more accessible to non-programmers.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 06, 2021",
    "category": "Tools"
  }
];
