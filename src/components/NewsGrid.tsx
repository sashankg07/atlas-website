import { useEffect, useState } from 'react';
import { format } from 'date-fns';

interface NewsItem {
  title: string;
  summary: string;
  source: string;
  url: string;
  category: 'technology' | 'research' | 'business' | 'tools';
  publishedAt: string;
}

export default function NewsGrid() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/data/news.json');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading latest AI news...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item, index) => (
        <article
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-indigo-600">
                {item.category}
              </span>
              <span className="text-sm text-gray-500">
                {format(new Date(item.publishedAt), 'MMM d, yyyy')}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                {item.title}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{item.summary}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{item.source}</span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
} 