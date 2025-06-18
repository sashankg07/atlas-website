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
    title: "The Future of AI: A New Era of Human-Machine Collaboration",
    description: "As artificial intelligence continues to evolve, we're entering a transformative period where humans and machines work together in unprecedented ways.",
    url: "#",
    source: "AI Research Journal",
    date: "March 15, 2024",
    category: "Research"
  },
  {
    title: "OpenAI's Latest Breakthrough: GPT-5 and the Path to AGI",
    description: "OpenAI's newest model shows remarkable capabilities in reasoning and problem-solving, bringing us closer to artificial general intelligence.",
    url: "#",
    source: "Tech Insights",
    date: "March 14, 2024",
    category: "Technology"
  },
  {
    title: "AI Ethics: Navigating the Complex Landscape of Machine Learning",
    description: "As AI systems become more sophisticated, the ethical implications of their deployment raise important questions about responsibility and governance.",
    url: "#",
    source: "Ethics in AI",
    date: "March 13, 2024",
    category: "Ethics"
  }
];

export const latestNews: NewsArticle[] = [
  {
    title: "New AI Model Can Predict Protein Structures with 99% Accuracy",
    description: "Revolutionary breakthrough in protein folding prediction could accelerate drug discovery and medical research.",
    url: "#",
    source: "Science Daily",
    date: "March 15, 2024",
    category: "Research"
  },
  {
    title: "Major Tech Companies Form AI Safety Alliance",
    description: "Leading technology companies join forces to establish safety standards for artificial intelligence development.",
    url: "#",
    source: "Tech Chronicle",
    date: "March 15, 2024",
    category: "Business"
  },
  {
    title: "AI-Powered Climate Models Predict Faster Global Warming",
    description: "New machine learning algorithms reveal more accurate predictions about climate change impacts.",
    url: "#",
    source: "Climate Watch",
    date: "March 14, 2024",
    category: "Science"
  }
]; 