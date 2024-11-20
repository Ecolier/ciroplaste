import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ciroplaste.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.ciroplaste.com/en',
          fr: 'https://www.ciroplaste.com/fr',
        },
      },
    },
    {
      url: 'https://www.ciroplaste.com/explore',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.ciroplaste.com/en/explore',
          fr: 'https://www.ciroplaste.com/fr/explore',
        },
      },
    },
  ]
}