import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { Inter } from 'next/font/google';
import { featuredArticles, latestNews } from '@/data/mockData';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              The Future of AI, Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted source for the latest developments, breakthroughs, and insights in artificial intelligence.
            </p>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 border-b pb-2">
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </section>

        {/* Latest News */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 border-b pb-2">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest AI news and insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow max-w-md"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
