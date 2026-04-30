import type { MetadataRoute } from 'next'
import { nav, isNavSection } from '@/lib/nav'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tudominio.com'

function collectHrefs(): string[] {
  const hrefs: string[] = ['/']
  for (const entry of nav) {
    hrefs.push(entry.href)
    for (const child of entry.children ?? []) {
      hrefs.push(child.href)
      if (isNavSection(child)) {
        for (const leaf of child.children) {
          hrefs.push(leaf.href)
        }
      }
    }
  }
  return hrefs
}

export default function sitemap(): MetadataRoute.Sitemap {
  return collectHrefs().map(path => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : path.split('/').length === 2 ? 0.8 : 0.6,
  }))
}
