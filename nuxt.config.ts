// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.NUXT_CONTENTFUL_SPACE_ID}`,
        httpLinkOptions: {
          headers: {
            Authorization: `Bearer ${process.env.NUXT_CONTENTFUL_ACCESS_TOKEN}`,
          },
        },
      },
    },
  },
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  imports: {
    dirs: ['composables/**'],
  },
  modules: ['@nuxt/ui', '@nuxtjs/apollo', '@nuxt/eslint'],
  runtimeConfig: {
    contentful: {
      accessToken: '',
      spaceId: '',
    },
  },
});
