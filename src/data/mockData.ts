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
    "title": "Revolutionizing Healthcare: AI's Role in Pandemic Response",
    "description": "AI has played a key role in responding to the COVID-19 pandemic, from tracking the virus to developing vaccines. Its predictive capabilities and data analysis have proven critical during these trying times.",
    "url": "#",
    "source": "The New York Times",
    "date": "September 30, 2022",
    "category": "Research"
  },
  {
    "title": "AI Takes the Wheel: Self-Driving Cars' Major Breakthrough",
    "description": "With the recent advancements in AI, self-driving cars are closer to reality than ever before. Enhanced machine learning algorithms are ensuring safer and more efficient rides.",
    "url": "#",
    "source": "The Guardian",
    "date": "September 30, 2022",
    "category": "Technology"
  },
  {
    "title": "AI in Retail: The Future of Shopping",
    "description": "AI is transforming the retail sector, providing personalized experiences to consumers and streamlining business operations. The future of shopping is here, and it's powered by AI.",
    "url": "#",
    "source": "Forbes",
    "date": "September 30, 2022",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Striking a Balance: The Ethics of Facial Recognition Technology",
    "description": "The widespread use of facial recognition technology raises ethical concerns. As AI continues to evolve, it's vital to ensure that it respects privacy and human rights.",
    "url": "#",
    "source": "The Washington Post",
    "date": "September 30, 2022",
    "category": "Ethics"
  },
  {
    "title": "Empowering Creativity: AI in Graphic Design",
    "description": "AI-powered tools are changing the landscape of graphic design, allowing designers to automate repetitive tasks and focus on creativity. The potential of AI in this field is enormous.",
    "url": "#",
    "source": "Adobe Blog",
    "date": "September 30, 2022",
    "category": "Tools"
  }
];
