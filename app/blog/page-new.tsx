import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { client, BLOG_POSTS_QUERY, urlFor } from '@/lib/sanity'

async function getBlogPosts() {
  try {
    return await client.fetch(BLOG_POSTS_QUERY)
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    return []
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            background: 'linear-gradient(45deg, #000000 33.33%, #D41B1B 33.33%, #D41B1B 66.66%, #FFD500 66.66%)' 
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400 font-gothic">
            Blog Heimatland
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Acompanhe as novidades, eventos e histórias do nosso grupo folclórico alemão
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Blog em Construção
              </h2>
              <p className="text-gray-600 mb-8">
                Em breve teremos novidades e histórias incríveis para compartilhar!
              </p>
              <Link 
                href="/"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Voltar ao Início
              </Link>
            </div>
          ) : (
            <div>
              {/* Featured Posts */}
              {posts.filter((post: any) => post.featured).length > 0 && (
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 font-gothic" style={{ color: '#D41B1B' }}>
                    Posts em Destaque
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.filter((post: any) => post.featured).slice(0, 3).map((post: any) => (
                      <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600">
                        {post.mainImage && (
                          <div className="relative h-48">
                            <Image
                              src={urlFor(post.mainImage).width(400).height(240).url()}
                              alt={post.mainImage.alt || post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        
                        <div className="p-6">
                          {post.category && (
                            <span 
                              className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mb-3"
                              style={{ backgroundColor: post.category.color }}
                            >
                              {post.category.title}
                            </span>
                          )}
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            {post.author && (
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                <span>{post.author.name}</span>
                              </div>
                            )}
                          </div>
                          
                          <Link 
                            href={`/blog/${post.slug.current}`}
                            className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center"
                          >
                            Ler mais
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* All Posts */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-gothic" style={{ color: '#D41B1B' }}>
                  Todas as Postagens
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post: any) => (
                    <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      {post.mainImage && (
                        <div className="relative h-48">
                          <Image
                            src={urlFor(post.mainImage).width(400).height(240).url()}
                            alt={post.mainImage.alt || post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="p-6">
                        {post.category && (
                          <span 
                            className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mb-3"
                            style={{ backgroundColor: post.category.color }}
                          >
                            {post.category.title}
                          </span>
                        )}
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          {post.author && (
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              <span>{post.author.name}</span>
                            </div>
                          )}
                        </div>
                        
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex items-center mb-4">
                            <Tag className="h-4 w-4 mr-2 text-gray-400" />
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 3).map((tag: string, index: number) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <Link 
                          href={`/blog/${post.slug.current}`}
                          className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center"
                        >
                          Ler mais
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
