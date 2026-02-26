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
    "title": "AI Helps Decode the Complex Language of Whales",
    "description": "Researchers have successfully used artificial intelligence to decode the complex language of whales. The breakthrough could help us understand these majestic creatures and their social behaviors better.",
    "url": "#",
    "source": "Nature",
    "date": "March 22, 2022",
    "category": "Research"
  },
  {
    "title": "AI Predicts the Next Big Trends in Fashion",
    "description": "Fashion brands are turning to artificial intelligence to predict the next big trends. The technology analyzes social media data and marketplace analytics to forecast what consumers will want next season.",
    "url": "#",
    "source": "Vogue",
    "date": "March 22, 2022",
    "category": "Business"
  },
  {
    "title": "AI in Healthcare: The Future of Disease Detection",
    "description": "AI is revolutionizing the healthcare industry by providing early and accurate disease detection. This could potentially save millions of lives and transform the approach to patient care.",
    "url": "#",
    "source": "The Lancet",
    "date": "March 22, 2022",
    "category": "Technology"
  }
];

export const latestNews: NewsArticle[] = [
  {
    "title": "Ethics in AI: Ensuring Fairness and Equality",
    "description": "As AI continues to evolve, ethical concerns are at the forefront of the conversation. Experts are calling for regulations to ensure fairness, transparency, and accountability in AI algorithms.",
    "url": "#",
    "source": "The Guardian",
    "date": "March 22, 2022",
    "category": "Ethics"
  },
  {
    "title": "New AI Tool Transforms Sketches Into Photorealistic Images",
    "description": "A new artificial intelligence tool allows users to transform simple sketches into photorealistic images. This groundbreaking technology could revolutionize digital art and graphic design.",
    "url": "#",
    "source": "The Verge",
    "date": "March 22, 2022",
    "category": "Tools"
  }
];
