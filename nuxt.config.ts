// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  telemetry: false,
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/content',
    '@pinia/nuxt'
  ]
})
