interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  source: string;
  date: string;
  category: string;
}

export default function NewsCard({ title, description, url, source, date, category }: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-indigo-600">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            {title}
          </a>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{source}</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            Read more →
          </a>
        </div>
      </div>
    </article>
  );
} 