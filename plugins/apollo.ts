import { CONTENTFUL_TOKEN_COOKIE_NAME } from "~/constants/index.constants";

export default defineNuxtPlugin(async (nuxtApp) => {
  const counter = useCookie(CONTENTFUL_TOKEN_COOKIE_NAME);

  nuxtApp.hook("app:beforeMount", async () => {
    try {
      await $fetch("/api/apollo/auth", {
        method: "POST",
      });
    } catch (error) {
      console.error("Error in apollo auth:", error);
    }
  });

  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    token.value = counter.value || "";
  });
});
