import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://damask.fi/sitemap.xml',
    host: 'https://damask.fi',
  }
}
