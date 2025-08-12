import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
  perspective: 'published',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Queries para o blog
export const BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    category->{
      title,
      color
    },
    author->{
      name,
      role
    },
    publishedAt,
    featured,
    tags
  }
`

export const FEATURED_POSTS_QUERY = `
  *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    category->{
      title,
      color
    },
    publishedAt
  }
`

export const BLOG_POST_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    category->{
      title,
      color
    },
    author->{
      name,
      role,
      image {
        asset->{
          _id,
          url
        }
      },
      bio
    },
    publishedAt,
    body,
    gallery[] {
      asset->{
        _id,
        url
      },
      alt,
      caption
    },
    tags
  }
`

export const CATEGORIES_QUERY = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    description,
    color
  }
`
