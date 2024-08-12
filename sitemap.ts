import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
 const siteUrl = 'https://jrr.at'
 return [
  {
   url: 'https://jrr.at',
   lastModified: new Date(),
   changeFrequency: 'weekly',
   priority: 1,
  },
  {
   url: `${siteUrl}/contact`,
   lastModified: new Date(),
   changeFrequency: 'yearly',
   priority: 0.5,
  },
  {
   url: `${siteUrl}/return-policy`,
   lastModified: new Date(),
   changeFrequency: 'yearly',
   priority: 0.5,
  },
  {
   url: `${siteUrl}/commercial`,
   lastModified: new Date(),
   changeFrequency: 'yearly',
   priority: 0.5,
  },
  {
   url: `${siteUrl}/list/all`,
   lastModified: new Date(),
   changeFrequency: 'daily',
   priority: 0.8,
  },
  {
   url: `${siteUrl}/list/Vinyl-Decal`,
   lastModified: new Date(),
   changeFrequency: 'daily',
   priority: 0.8,
  },
  {
   url: `${siteUrl}/list/Vinyl-Decal`,
   lastModified: new Date(),
   changeFrequency: 'daily',
   priority: 0.8,
  },
  {
   url: `${siteUrl}/fonzai`,
   lastModified: new Date(),
   changeFrequency: 'monthly',
   priority: 0.8,
  },
 ]
}
