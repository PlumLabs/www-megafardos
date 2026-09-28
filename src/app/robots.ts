import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Permitimos explícitamente a los rastreadores de buscadores e IAs para que
// Megafardos del Norte pueda aparecer en Google, ChatGPT, Perplexity, Claude, Gemini y Copilot.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
