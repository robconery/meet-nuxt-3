// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  telemetry: false,
  router:{
    base: "/redfour/" //required for non-root deployment
  },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/content',
    '@pinia/nuxt'
  ]
})
