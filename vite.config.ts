import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        pricing: resolve(import.meta.dirname, 'pricing.html'),
        bounty: resolve(import.meta.dirname, 'bounty.html'),
        bounties: resolve(import.meta.dirname, 'bounties.html'),
        express: resolve(import.meta.dirname, 'express.html'),
        partners: resolve(import.meta.dirname, 'partners.html'),
        certification: resolve(import.meta.dirname, 'certification.html'),
        shield: resolve(import.meta.dirname, 'shield.html'),
        trust: resolve(import.meta.dirname, 'trust.html'),
        blog: resolve(import.meta.dirname, 'blog.html'),
        foundersNote: resolve(import.meta.dirname, 'founders-note.html'),
        terms: resolve(import.meta.dirname, 'terms.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        security: resolve(import.meta.dirname, 'security.html'),
        asi1: resolve(import.meta.dirname, 'asi-1.html'),
        asi1Assessment: resolve(import.meta.dirname, 'asi-1-assessment.html'),
      },
    },
  },
})
