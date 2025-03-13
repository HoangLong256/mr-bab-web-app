// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/apollo"],
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
  runtimeConfig: {
    contentful: {
      spaceId: "",
      accessToken: "",
    },
  },
});
