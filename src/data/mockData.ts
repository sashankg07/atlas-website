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
    "title": "AI Takes on Climate Change: Breakthroughs and Challenges",
    "description": "Artificial Intelligence proves instrumental in predicting climate change patterns. Despite the potential, experts debate the ethical implications and accuracy of AI models.",
    "url": "#",
    "source": "Nature",
    "date": "October 07, 2021",
    "category": "Research"
  },
  {
    "title": "Tech Giants Embrace AI for Cybersecurity",
    "description": "Amazon, Google, and Facebook have started integrating AI into their cybersecurity systems. The move aims to enhance security protocols and detect threats more accurately.",
    "url": "#",
    "source": "TechCrunch",
    "date": "October 07, 2021",
    "category": "Technology"
  },
  {
    "title": "AI in Healthcare: New Partnerships Drive Innovation",
    "description": "Major pharmaceutical companies are partnering with AI startups to revolutionize drug discovery and diagnostics. The partnerships promise a new era of personalized medicine.",
    "url": "#",
    "source": "Forbes",
    "date": "October 07, 2021",
    "category": "Business"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "AI Ethics Debate: Balancing Progress and Potential Harm",
    "description": "As AI impacts every sphere of life, scholars debate the ethical implications. Key concerns include privacy, bias in algorithms, and the potential misuse of technology.",
    "url": "#",
    "source": "The Guardian",
    "date": "October 07, 2021",
    "category": "Ethics"
  },
  {
    "title": "AI Tools Reshape the Landscape of Digital Marketing",
    "description": "Emerging AI tools are transforming the digital marketing industry. Predictive analytics, chatbots, and personalized recommendations are among the top trends.",
    "url": "#",
    "source": "Marketing Week",
    "date": "October 07, 2021",
    "category": "Tools"
  }
];
