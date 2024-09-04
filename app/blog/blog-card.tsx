import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/app/content/articles'

function BlogCard({ article }: { article: Article }) {
 return (
  <Link
   href={`/blog/${article.id}`}
   className='flex rounded-md bg-bg-secondary hover:bg-bg-tertiary transition-all w-max m-auto cursor-pointer'>
   <Image
    className='rounded-md'
    src={article.image}
    alt={article.title}
    width={200}
    height={200}
   />
   <div className='prose prose-invert p-4'>
    <h2>{article.title}</h2>
    <p>{article.excerpt}</p>
   </div>
  </Link>
 )
}

export default BlogCard
