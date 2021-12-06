import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    'components': '/components'
  },
  css: [
    '/assets/styles/main.scss'
  ],
  meta: {
    title: 'Victor Carpio - elcarpios.site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  }
})
