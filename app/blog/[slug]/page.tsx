import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { client, BLOG_POST_QUERY, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getBlogPost(slug: string) {
  try {
    return await client.fetch(BLOG_POST_QUERY, { slug })
  } catch (error) {
    console.error('Erro ao buscar post:', error)
    return null
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
            <p className="text-gray-600 mb-8">O post que você está procurando não existe.</p>
            <Link 
              href="/blog"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back to Blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 font-semibold"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Blog
        </Link>

        {/* Category */}
        {post.category && (
          <span 
            className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full mb-4"
            style={{ backgroundColor: post.category.color }}
          >
            {post.category.title}
          </span>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-gothic">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          
          {post.author && (
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{post.author.name}</span>
            </div>
          )}
          
          {post.readingTime && (
            <div className="flex items-center">
              <span>{post.readingTime} min de leitura</span>
            </div>
          )}
        </div>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <PortableText 
            value={post.body}
            components={{
              types: {
                image: ({ value }) => (
                  <div className="relative h-64 md:h-96 my-8 rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(value).width(800).height(400).url()}
                      alt={value.alt || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              },
              block: {
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 font-gothic" style={{ color: '#D41B1B' }}>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {children}
                  </h3>
                ),
                normal: ({ children }) => (
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {children}
                  </p>
                )
              },
              marks: {
                link: ({ children, value }) => (
                  <a 
                    href={value.href}
                    className="text-red-600 hover:text-red-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                )
              }
            }}
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center mb-4">
              <Tag className="h-5 w-5 mr-2 text-gray-400" />
              <span className="text-gray-600 font-semibold">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(`*[_type == "blogPost" && defined(slug.current)][].slug.current`)
    return posts.map((slug: string) => ({
      slug,
    }))
  } catch (error) {
    console.error('Erro ao gerar params estáticos:', error)
    return []
  }
}
