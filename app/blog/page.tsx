import Navigation from '@/components/Navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NEET Preparation Blog - Akash Kushwaha',
  description: 'Expert NEET preparation tips, strategies, and insights from mentor Akash Kushwaha. Learn from real exam experiences and proven techniques.',
}

export default function Blog() {
  const featuredPost = {
    title: '5 Common NEET Mistakes to Avoid in 2025',
    excerpt: 'Based on 2024 exam analysis, learn about the most common mistakes NEET aspirants make and how to avoid them.',
    image: '/placeholder.svg?height=400&width=600',
    date: '2025-01-15',
    readTime: '8 min read',
    slug: 'common-neet-mistakes-2025'
  }

  const blogPosts = [
    {
      title: 'MCQ Elimination Techniques That Actually Work',
      excerpt: 'Master the art of eliminating wrong options with these proven strategies.',
      image: '/placeholder.svg?height=300&width=400',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Strategy',
      slug: 'mcq-elimination-techniques'
    },
    {
      title: 'Time Management During NEET Exam',
      excerpt: 'How to allocate your 3 hours effectively across Physics, Chemistry, and Biology.',
      image: '/placeholder.svg?height=300&width=400',
      date: '2025-01-08',
      readTime: '5 min read',
      category: 'Tips',
      slug: 'time-management-neet'
    },
    {
      title: 'Biology Revision Strategy for Last Month',
      excerpt: 'Intensive biology revision techniques for the final month before NEET.',
      image: '/placeholder.svg?height=300&width=400',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Biology',
      slug: 'biology-revision-strategy'
    },
    {
      title: 'Physics Problem-Solving Approach',
      excerpt: 'Step-by-step methodology to tackle complex physics problems in NEET.',
      image: '/placeholder.svg?height=300&width=400',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Physics',
      slug: 'physics-problem-solving'
    },
    {
      title: 'Chemistry Memory Techniques',
      excerpt: 'Proven memory techniques to remember chemical reactions and formulas.',
      image: '/placeholder.svg?height=300&width=400',
      date: '2025-01-01',
      readTime: '6 min read',
      category: 'Chemistry',
      slug: 'chemistry-memory-techniques'
    },
    {
      title: 'Mock Test Analysis: How to Improve',
      excerpt: 'Learn how to analyze your mock test performance and identify improvement areas.',
      image: '/placeholder.svg?height=300&width=400',
      date: '2024-12-28',
      readTime: '8 min read',
      category: 'Strategy',
      slug: 'mock-test-analysis'
    }
  ]

  const categories = ['All', 'Strategy', 'Tips', 'Biology', 'Physics', 'Chemistry']

  return (
    <>
      <Navigation />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NEET Preparation Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, proven strategies, and practical tips to help you crack NEET
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="card lg:flex lg:space-x-8">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <img 
                  src={featuredPost.image || "/placeholder.svg"} 
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Read Full Article
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card group">
                <img 
                  src={post.image || "/placeholder.svg"} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
